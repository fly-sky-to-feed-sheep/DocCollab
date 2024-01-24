const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', (req, res) => {
    // 假的用户凭证
    const fakeUser = {
        username: 'testuser',
        password: 'testpassword'
    };

    const { username, password } = req.body;

    // 检查用户名和密码是否匹配
    if (username === fakeUser.username && password === fakeUser.password) {
        // 生成一个假的JWT
        const token = jwt.sign({ username }, 'fake_secret', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Authentication failed');
    }
});

module.exports = router;
