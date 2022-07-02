import express from 'express';
import mongoose from 'mongoose';
import Post from "./Post.js";

const PORT = 3000;
const DB_URL = `mongodb+srv://rumeone:12345@cluster0.vqihm05.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
   try {
      const {author, title, content, picture} = req.body;
      const post = await Post.create({author, title, content, picture});
      res.json(post);
   }
   catch (e) {
      res.status(500).json(e.message);
   }
});

async function startApp() {
   try {
      await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
      app.listen(PORT, () => console.log("Sever is started on port " + PORT));
   } catch (e) {
      console.log(e);
   }
}

startApp();
