const {prisma} = require("../db/connection")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // 1. Find user (FIXED model name)
        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // 2. Check password (FIXED await)
        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // 3. Generate token
        const token = jwt.sign(
            { role: user.userType, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        // 4. Remove password before sending
        const { passwordHash, ...userWithoutPass } = user;

        res.json({
            message: 'Login successful',
            token,
            user:
                {
                    name: user.name,
                    email: user.email,
                    user_type: user.user_type,
                    team_id: user.team_id
                }
        });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.test = async (req, res) => {
    return res.status(200).json({
        user: req.user
    })
}