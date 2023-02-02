require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./Models/connectDB');
const cookieParser = require('cookie-parser');
const { handleUserafterLogin } = require('./middlewares/authOnlywhenLogined')
const {checkAuth} = require('./middlewares/checkAuthotization')

const app = express();

//connect to DB
connectDB('mongodb://127.0.0.1:27017/url-shortener').then(() => {
    console.log(`Connected to monogoDB`)
}).catch((err) => {
    console.log('Error Occured');
})

//to parse cookie between files
app.use(cookieParser());

//routers
const urlRouter = require('./Routes/urlRoutes');
const userRouter = require('./Routes/userRoutes')
const staticRouter = require('./Routes/staticRoute')

//setting Routes
app.use('/' ,checkAuth,staticRouter);
app.use('/url', handleUserafterLogin ,urlRouter);
app.use('/user', userRouter);

//View template part
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.listen(process.env.PORT, () => {
    console.log('Started Server on port 8000')
})