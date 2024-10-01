
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();

// Veritabanına bağlantı
mongoose.connect('mongodb://localhost:27017/agency-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// EJS ayarları
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotalar
app.use('/', portfolioRoutes);

// Sunucuyu başlat
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
