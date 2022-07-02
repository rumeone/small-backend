import express from 'express';
import mongoose from 'mongoose';
import Post from "./Post.js";
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 3000;
const DB_URL = `mongodb+srv://rumeone:12345@cluster0.vqihm05.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
   try {
      await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
      app.listen(PORT, () => console.log("Sever is started on port " + PORT));
   } catch (e) {
      console.log(e);
   }
}

startApp();
