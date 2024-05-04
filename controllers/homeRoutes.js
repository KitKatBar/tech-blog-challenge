const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        // Get all users, sorted by name
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password'] },
                },
            ],
            order: [['date_created', 'DESC']],
        });

        // Serialize user data so templates can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data into Handlebars.js template
        res.render('homepage', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
    
        const post = postData.get({ plain: true });
        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('post');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/register', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('register');
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});

module.exports = router;