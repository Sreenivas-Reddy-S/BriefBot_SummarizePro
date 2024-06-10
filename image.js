const axios = require('axios');

// This is the function where the call to the API is made. Returns the image generation result.

async function generateImage(prompt) {
  let data = JSON.stringify({
    "inputs": prompt
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}

// Allows for generateImage() to be called outside of this file

module.exports = generateImage;
