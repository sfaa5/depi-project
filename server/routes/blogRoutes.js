import express from "express";
import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/blogs", getBlogs);
router.get("/blogs/:id", getBlog);
router.post("/blogs", createBlog);
router.patch("/blogs/:id", updateBlog);
router.patch("/blogs/:id", deleteBlog);

export default router;
