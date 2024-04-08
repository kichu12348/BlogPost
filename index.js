const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user');
const staticRoutes = require('./routes/staticRoute');
const blogRoutes = require('./routes/blog');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// mongodb connection setup
const { connectDB } = require('./connection');
connectDB("mongodb+srv://kichu12348:tk288174@cluster0.krglllg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const port = process.env.PORT || 8000;

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use('/', staticRoutes);
app.use('/', userRoutes);
app.use('/blog', blogRoutes);

app.listen(port, () => console.log(`Server is running on port ${port} 😎`));