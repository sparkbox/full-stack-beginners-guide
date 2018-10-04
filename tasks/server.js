const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.use('/', express.static(__dirname + "/../", {
  extensions: ['html', 'htm']
}));


app.listen(PORT, () => {
  console.log(`Local beginners guide listening on port ${PORT}!`);
});