import express, { Request, Response } from "express";

const app = express()
app.use(express.json())


app.get('/*', (req: Request, res: Response) => {
  res.redirect('/')
})

app.listen(3000, () => console.log('server is listening on port 3000'))