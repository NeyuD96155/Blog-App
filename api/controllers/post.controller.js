// File: controllers/PostController.js
import Post from '../models/Post.js';

// Utility function to handle the response
const handleResponse = (res, status, data) => {
    res.status(status).json(data);
};

// Error handling utility function
const handleError = (res, err, message = "An error occurred", statusCode = 500) => {
    console.error(err); // Log to console for debugging
    res.status(statusCode).json({ message: message, details: err.message });
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username email');
        handleResponse(res, 200, posts);
    } catch (err) {
        handleError(res, err);
    }
};

// Get a single post
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username email');
        if (!post) {
            return handleResponse(res, 404, { message: "Post not found" });
        }
        handleResponse(res, 200, post);
    } catch (err) {
        handleError(res, err);
    }
};

// Create a new post
const createPost = async (req, res) => {
    const { title, body, author, tags, status } = req.body;
    const post = new Post({ title, body, author, tags, status });

    try {
        const newPost = await post.save();
        handleResponse(res, 201, newPost);
    } catch (err) {
        handleError(res, err, "Failed to create post", 400);
    }
};

// Update a post
const updatePost = async (req, res) => {
    const { title, body, tags, status } = req.body;

    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return handleResponse(res, 404, { message: "Post not found" });
        }

        post.title = title || post.title;
        post.body = body || post.body;
        post.tags = tags || post.tags;
        post.status = status || post.status;

        const updatedPost = await post.save();
        handleResponse(res, 200, updatedPost);
    } catch (err) {
        handleError(res, err, "Failed to update post", 400);
    }
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return handleResponse(res, 404, { message: "Post not found" });
        }

        await post.remove();
        handleResponse(res, 200, { message: "Deleted Post" });
    } catch (err) {
        handleError(res, err, "Failed to delete post");
    }
};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
