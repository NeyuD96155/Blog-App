import express from 'express';
import Post from '../models/post.model.js';  // Đường dẫn tùy theo cấu trúc thư mục của bạn

const router = express.Router();

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single post
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new post
router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,  // Giả định đã có author ID
        tags: req.body.tags,
        status: req.body.status
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a post
router.patch('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        if (req.body.title) {
            post.title = req.body.title;
        }
        if (req.body.body) {
            post.body = req.body.body;
        }
        if (req.body.tags) {
            post.tags = req.body.tags;
        }
        if (req.body.status) {
            post.status = req.body.status;
        }
        const updatedPost = await post.save();
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a post
router.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        await post.remove();
        res.status(200).json({ message: "Deleted Post" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
