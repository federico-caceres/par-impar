const express = require('express');
const app = express();

app.get('/', (req, res) => {

  let html = '';  
  
  for (let index = 1; index <= 50; index++) 
  {
    if (index % 2 == 0) 
    {
        html += `<p>${index} Soy par!</p>`;  
    }else{
        html += `<p>${index} Soy impar!</p>`;  
    }
  }

  res.send(html);
});

app.listen(3000, () => console.log('Listening on port 3000!'));