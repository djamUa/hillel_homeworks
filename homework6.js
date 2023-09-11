const fetch = require('node-fetch');
const fs = require('fs');

async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/users?page=1&per_page=5');
    const data = await response.json();

    fs.writeFile('data.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
