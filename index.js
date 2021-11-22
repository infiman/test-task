const express = require('express');

const { multiplyOf } = require('./multiply-of');

const app = express();
const port = 3000;

app.get('/multiply-of-3-and-5', (req, res) => {
  const value = Number.parseInt(req.query.value, 10);

  // Setting Cache-Control to tell client to avoid re-fetching since our algo is a pure function and final result should be cached.
  res.set({ 'Cache-Control': 'private, max-age=86400' });

  if (Number.isNaN(value)) {
    return res.status(400).send({
      error: {
        message: 'Only integer type is allowed as value and it is required.',
      },
    });
  }

  return res.status(200).send({
    result: multiplyOf(value) || value,
  });
});

app.disable('x-powered-by');

app.listen(port, () => console.log(`App has been started using ${port}...`));
