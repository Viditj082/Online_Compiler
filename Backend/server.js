import express from 'express'
const app=express();
import cors from 'cors';
import router from './routes/executeRoute.js'
import bodyparser from 'body-parser';
const PORT=process.env.PORT||5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use('/run',router);

app.get('/',(req,res)=>{res.send('Just testing:)')})

app.listen(PORT,()=>{
    console.log('Server has started');
})