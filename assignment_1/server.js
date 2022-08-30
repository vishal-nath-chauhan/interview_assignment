import app from "./app.js";
import mongodbConfig from "./config/mongodb.config.js";
import mongoose from "mongoose";

const PORT = process.env.PORT;

mongoose.connect(mongodbConfig.url).then(()=>console.log('Database connected')).catch(()=>'Failed to connect with Database')



app.listen(PORT,()=>console.log('Server running at ',PORT))