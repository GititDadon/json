// Exercise 8: Fetch User, Then Their First Post
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Step 1: Fetch user by ID
 * Step 2: Fetch posts by same user
 * Step 3: Show the title of the first post
 *
 * Example output:
 *   First post title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
 *
 * @param {number} userId
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
async function getUserFirstPost(userId) {
  const res1=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);  const data1=await res1.json();
  const data2=await res2.json();
  console.log(`First post title: ${data2[0].title}`)


}
module.exports = { getUserFirstPost };
