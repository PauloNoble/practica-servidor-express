let listOfPosts = [
  {
    id: Date.now(),
    title: "React",
    desc: "Mi primer app",
    image: "www.image.com",
  },
];

export function createNewPost({ title, desc, image }) {
  if (!title) return null;

  const newPost = { id: Date.now(), title, desc, image };

  listOfPosts.push(newPost);

  return newPost;
}

function getAllPost() {
  return [...listOfPosts];
}

function getPostById({ id }) {
  const post = listOfPosts.find((post) => post.id === id);

  return post;
}

function findPostByIdAndUpdate(id, data) {
  const post = getPostById(id);

  if (!post) return null;

  listOfPosts = listOfPosts.map((post) => {
    if (post.id === id) {
      return {
        ...post,
        ...data,
      };
    }

    return post;
  });

  return post;
}

function deletePostById({ id }) {
  listOfPosts = listOfPosts.filter((post) => post.id !== id);
}

export const postModel = {
  findAll: getAllPost,
  create: createNewPost,
  findOne: getPostById,
  destroy: deletePostById,
  update: findPostByIdAndUpdate,
};
