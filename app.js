const express = require('express');
const app = express();

app.get('/', (req, res) => {

  let html = '';  
  
  for (let index = 1; index <= 50; index++) 
  {
    html += `<p>${index} ${index % 2 === 0 ? 'Soy Par!' : 'Soy Impar!'}</p>`;
  }

  res.send(html);
});

app.listen(3000, () => console.log('Listening on port 3000!'));