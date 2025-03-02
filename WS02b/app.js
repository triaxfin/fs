const axios = require('axios');

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });