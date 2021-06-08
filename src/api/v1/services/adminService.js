const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user');

const createToken = (user) => {
    const tokenSignature = {
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const token = jwt.sign(tokenSignature,
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        });
    return token;
};

const registerUser = async (name, email, password) => {
    const admin = await User.find({ role: 'ADMIN' });
    let role;
    if (admin.length === 0) {
        role = 'ADMIN';
    } else {
        role = 'EDITOR';
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        role,
    });
    const token = createToken(user);
    await user.save();
    return token;
};

const verifyUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (user !== null) {
        // verify password using bcrypt
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return null;
        }
        const token = createToken(user);
        return token;
    }
    return null;
};
module.exports = { verifyUser, registerUser };
