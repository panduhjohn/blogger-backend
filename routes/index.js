const express = require('express');
const router = express.Router();

const Blog = require('./models/Blogs')

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/allblogs', (req, res) => {
    Blog.find({})
        .then((blogs) => {
            res.json(blogs)
        })
})

router.get('/singleblog/:id', (req, res) => {
    Blog.findOne({ _id: req.params.id })
        .then((blog) => {
            if (blog) {
                res.status(200).json({blog})
            } else {
                res.status(400).json({message: 'Cant find blog'})
            }
        })
        .catch(err => console.log('Error in single blog', err))
});

router.post('/createblog', (req, res) => {
    const newBlog = new Blog()

    newBlog.title = req.body.title
    newBlog.author = req.body.author
    newBlog.subject = req.body.subject
    newBlog.article = req.body.article
    
    newBlog.save()
        .then((blog) => {
            res.json('Blog added to DB')
        })
        .catch(err => res.status(400).json('Blog already in DB', err))
})

router.put('/updateblog/:id', (req, res) => {
    Blog.findOne({ _id: req.params.id })
        .then((blog) => {
            if (blog) {
                blog.title = req.body.title ? req.body.title : blog.title
                blog.author = req.body.author ? req.body.author : blog.author
                blog.subject = req.body.subject ? req.body.subject : blog.subject
                blog.article = req.body.article ? req.body.article : blog.article

                blog.save()
                    .then((blog) => {
                        res.status(200).json({message: 'Blog updated', blog})
                    })
                    .catch(err => res.status(400).json({message: 'Blog was not updated'}))
            }
        })
        .catch(err => res.status(400).json({message: 'Server Error', err}))
})

router.delete('/deleteblog/:id', (req, res) => {
    Blog.findOneAndDelete({ _id: req.params.id})
        .then((blog) => {
            if (blog) {
                res.status(200).json({message: 'Blog deleted', blog})
            } else {
                res.status(400).json({message: 'Blog not in DB'})
            }
        })
        .catch(err => res.status(400).json('Server Error', err))
})



module.exports = router;
