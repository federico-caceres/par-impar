const express = require('express');
const app = express();

app.get('/', (req, res) => {

  let html = '';  
  
  for (let index = 1; index <= 50; index++) 
  {
    resultado = (index % 2 == 0) ? 'Soy Par!' : 'Soy Impar!';
    html += `<p>${index} ${resultado}</p>`;
  }

  res.send(html);
});

app.listen(3000, () => console.log('Listening on port 3000!'));