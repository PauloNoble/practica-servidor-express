export function validatePost(req, res, next) {
  const { title, desc } = req.body;

  if (req.url === "/posts" && req.method === "POST") {
    if (!title) return res.status(400).send("Property title is requiered");
    if (!desc) return res.status(400).send("Property desc is requiered");
    if (!image) return res.status(400).send("Property desc is requiered");
  }

  next();
}
