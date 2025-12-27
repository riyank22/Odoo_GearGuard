const bcrypt = require("bcrypt");
const { prisma } = require("../db/connection");

async function seedUsers() {
    console.log("🌱 Starting User Seeding...");

    // 1. Create a common hashed password for everyone
    // You can change this to "admin1234" or whatever you prefer
    const password = "password123";
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Define the data based on your SQL list
    const usersToSeed = [
        // Maintenance Crew (IT - Team 1)
        {
            name: "Tech IT 1",
            email: "tech.it1@dm.com",
            type: "Maintenance",
            teamId: 1
        },
        {
            name: "Tech IT 2",
            email: "tech.it2@dm.com",
            type: "Maintenance",
            teamId: 1
        },
        // Maintenance Crew (Mechanics - Team 2)
        {
            name: "Mech Mike",
            email: "mech.mike@dm.com",
            type: "Maintenance",
            teamId: 2
        },
        {
            name: "Mech Sarah",
            email: "mech.sarah@dm.com",
            type: "Maintenance",
            teamId: 2
        },
        // Employees (Sales - Team 4)
        {
            name: "Sales John",
            email: "sales.john@dm.com",
            type: "Employee",
            teamId: 4
        },
        // Employees (Production - Team 5)
        {
            name: "Prod Steve",
            email: "prod.steve@dm.com",
            type: "Employee",
            teamId: 5
        },
    ];

    // 3. Loop and Upsert
    for (const user of usersToSeed) {
        await prisma.users.upsert({
            where: { email: user.email },
            create: {
                name: user.name,
                email: user.email,
                password_hash: hashedPassword,
                user_type: user.type,
                team_id: user.teamId,
            },
        });
        console.log(`✅ Seeded: ${user.name} (${user.email})`);
    }
}

seedUsers()
    .catch((err) => {
        console.error("❌ Error seeding users:", err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });