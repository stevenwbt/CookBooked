import express from 'express';
import cors from 'cors';

import receiptsRouter from '../routes/receipts.js';

const port = 3000;
const app = express();
app.use(cors());

/** GET endpoint for sending back a Hello World message */
app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello, World! This is the home page');
});

// middleware 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/receipts', receiptsRouter);

// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});