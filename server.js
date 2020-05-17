const express = require('express');
const dotevn = require('dotenv');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser')

//  Routes
const auth = require('./routes/auth');
const search = require('./routes/search');
/* ================= DOT ENV ================== */
dotevn.config({
    path: './config/config.env'
})

/* ================= PORT & INITIALIZE EXPRESS ================== */
const port = process.env.port || 5000;
const app = express();

/* Set View Engine */
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

/* ================= MiDDLE WARE ================== */
app.use(express.json());
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

/* ================= MOUNT ROUTES ================== */
app.use('/flights', search);
app.use('/auth', (req, res) => {
    res.render('login')
});

app.get('/', (req, res) => {
    res.render('index')
});

/* ================= CREATE SERVER CONNECTION ================== */
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
});