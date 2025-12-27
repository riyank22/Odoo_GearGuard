const bcrypt = require("bcrypt");
const {prisma} = require("../db/connection");

async function seedAdmin() {
    const email = "admin@dm.com";
    const password = "admin1234";

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.users.upsert({
        where: { email },
        update: {}, // do nothing if already exists
        create: {
            name: "Admin",
            email,
            password_hash: hashedPassword,
            user_type: "Admin",
        },
    });

    console.log("✅ Admin user seeded:", admin.email);
}

seedAdmin()
    .catch((err) => {
        console.error("❌ Error seeding admin:", err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
