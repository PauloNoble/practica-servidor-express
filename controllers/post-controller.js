import { postModel } from "../models/post-models.js";

export function ctrlCreatePost(req, res) {
  const { title, desc, image } = req.body;

  postModel.create({ title, desc, image });

  res.sendStatus(201);
}

export function ctrlGetAllPost(req, res) {
  const posts = postModel.findAll();

  res.json(posts);
}

export function ctrlGetPostById(req, res) {
  const { postId } = req.params;

  const post = postModel.findOne({ id: postId });

  if (!post) {
    return res.sendStatus(404);
  }

  res.status(200).json(post);
}

export function ctrlUpdatePost(req, res) {
  const { postId } = req.params;

  const { title, desc, image } = req.body;

  const updatedPost = postModel.update(postId, { title, desc, image });

  if (!updatedPost) return res.sendStatus(404);

  res.sendStatus(200);
}

export function ctrlDeletePost(req, res) {
  const { postId } = req.params;

  postModel.destroy({ id: postId });

  res.sendStatus(200);
}
