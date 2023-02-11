const express = require('express');
const app = express();

app.get('/', (req, res) => {

  let html = '';  
  
  for (let index = 1; index <= 50; index++) 
  {
    if (index % 2 == 0) 
    {
        html += `</br><p1>${index} Soy par!</p1>`;  
    }else{
        html += index === 1 ? `<p1>${index} Soy impar!</p1>` : `</br><p1>${index} Soy impar!</p1>`;  
    }
  }

  res.send(html);
});

app.listen(3000, () => console.log('Listening on port 3000!'));