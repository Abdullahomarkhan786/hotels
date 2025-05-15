const express = require('express');
const app = express();
app.use(express.json());
const multer=require('multer')
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://f20210021:lv8oUb57i6P3Rece@cluster1.ijx2ur1.mongodb.net/");

const Student=require('./student');
