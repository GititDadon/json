// Exercise 3: Show User's Email
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Fetch user by ID
 * Print "User's email: <email>"
 *
 * Example output:
 *   User's email: Sincere@april.biz
 *
 * @param {number} userId
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
async function getUserEmail(userId) {
   try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const data = await response.json();

    console.log(`User's email: ${data.email}`);

    return data;

  } catch (err) {
    console.log("Oops, Something went wrong...", err.message);
  }

}

module.exports = { getUserEmail };
