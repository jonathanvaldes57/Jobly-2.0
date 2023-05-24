const express = require('express');
import { Request, Response } from "express";
const userRouter = require('./routes/userRoutes');

const app = express()
app.use(express.json())

//refresh redirect
app.get('/*', (req: Request, res: Response): void => {
  res.redirect('/');
})

app.use('/user', userRouter);

app.listen(3000, () => console.log('server is listening on port 3000'))