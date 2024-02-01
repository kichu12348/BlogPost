const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const staticRoutes = require('./routes/staticRoute');
const blogRoutes = require('./routes/blog');
const cookieParser = require('cookie-parser');
//
const {connectDB} = require('./connection');
connectDB(process.env.MONGO_URL);

//port
const port =process.env.PORT || 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//middlewares
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


//routes
app.use('/', staticRoutes);
app.use('/', userRoutes);
app.use('/blog', blogRoutes);



app.listen(port, () => console.log(`Server is running on port ${port} 😎`));