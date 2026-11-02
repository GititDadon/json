
async function getPost(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    const data = await response.json();

    console.log(`Post title: ${data.title}`);

    return data;

  } catch (err) {
    console.log("Oops, Something went wrong...", err.message);
  }
}

module.exports = { getPost };
