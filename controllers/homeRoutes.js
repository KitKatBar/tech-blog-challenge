const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

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
        res.render('homepage', { posts, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Post
                },
                {
                    model: Comment
                }
            ]
        })

        const user = userData.get({ plain: true });
        res.render('dashboard', { user, logged_in: req.session.logged_in })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard_posts', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Post
                }
            ]
        })

        const user = userData.get({ plain: true });
        res.render('dashboard_posts', { user, logged_in: req.session.logged_in })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard_comments', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Comment
                }
            ]
        })

        const user = userData.get({ plain: true });
        res.render('dashboard_comments', { user, logged_in: req.session.logged_in })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password'] }
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: { exclude: ['password'] }
                        }
                    ],
                }
            ],
            order: [[sequelize.col('comments.date_created'), 'ASC']]
        });
    
        const post = postData.get({ plain: true });
        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('post', { post, logged_in: req.session.logged_in, post_id: req.params.id });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new_post', withAuth, (req, res) => { 
    try {
        res.render('new_post', { logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/edit_post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        res.render('edit_post', { post, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/edit_comment/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        const comment = commentData.get({ plain: true });
        res.render('edit_comment', { comment, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/register', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('register');
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});

module.exports = router;