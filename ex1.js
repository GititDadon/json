// Exercise 1: Get User Data
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Fetch https://jsonplaceholder.typicode.com/users/<userId>
 * Show the user's name
 *
 * Example output:
 *   User's name: Leanne Graham
 *
 * @param {number} userId
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
async function getUser(userId) {
  try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data=await response.json()
        console.log(`User's name: ${data.name}`)
  }catch(err){
    console.log("Oops, Something went wrong...",err.message)
  }

}

module.exports = { getUser };
