const express = require('express');
const router = express.Router();
const User = require('../models/user')

// get all users
router.get('/', async function(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// get an user
router.get('/:id', getUser, function(req, res) {
    res.json(res.user);
});

// create an user
router.post('/', async function(req, res) {
    const user = new User({
        name: req.body.name,
        subscribed: req.body.subscribed
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// update an user
router.patch('/:id', getUser, async function(req, res) {
    if (req.user.name != null) {
        res.user.name = req.user.name;
    }
    if (req.user.subscribed != null) {
        res.user.subscribed = req.user.subscribed;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// delete an user
router.delete('/:id', getUser, async function(req, res) {
    try {
        await res.user.remove();
        res.json({ message: 'Deleted User!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: "User not found!" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user;
    next();
}

module.exports = router;