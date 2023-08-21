const axios = require('axios');

async function fetchData() {
  try {
    const {data} = await axios('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {fetchData};
