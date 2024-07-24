import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log('DB Connected');
    })
    .catch((err)=>{
        console.log(err);
    });

// mongoose
// .connect("mongodb+srv://balusamimukesh:<password>@angle-erms-database.2w8z5np.mongodb.net/?retryWrites=true&w=majority&appName=Angle-ERMS-Database").then(()=>{
//     console.log('Connected');
// });

const app = express();

app.listen(300, () => {
    console.log("Server is running on the port 3000...!!!...")
});