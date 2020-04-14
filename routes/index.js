const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/allblogs', (req, res) => {
    res.json({ username: 'Roamin' });
})

router.get('/singleblog', (req, res) => {
    res.send('Hey from get SINGLE blog');
});

router.post('/createblog', (req, res) => {
    res.send('Hey from CREATE blog')
})

router.put('/updateblog', (req, res) => {
    res.send('Hey from UPDATE blog')
})

router.delete('/deleteblog', (req, res) => {
    res.send('Hey from DELETE blog')
})

module.exports = router;
