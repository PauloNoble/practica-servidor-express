import { listOfPosts } from "../models/post-models.js";

export function ctrlCreatePost(req, res) {
  const { title, desc, image } = req.body;

  listOfPosts.push({ title, desc, image });

  res.sendStatus(201);
}

export function ctrlGetAllPost(req, res) {
  res.json(listOfPosts);
}
