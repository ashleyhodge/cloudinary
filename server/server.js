const express = require('express')
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.post('/api/upload', (req, res) => {
  try {
    const fileStr = req.body.data;
    console.log(fileStr);
  } catch (error) {
    console.log(error)
  }
})


const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})