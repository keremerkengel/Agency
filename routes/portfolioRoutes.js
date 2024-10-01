
const express = require('express');
const router = express.Router();
const Portfolio = require('../models/portfolio');

// Anasayfa (Portfolio listesi)
router.get('/', async (req, res) => {
  const portfolios = await Portfolio.find({});
  res.render('index', { portfolios });
});

// Add Sayfası
router.get('/add', (req, res) => {
  res.render('add');
});

router.post('/add', async (req, res) => {
  const { title, description, imageUrl } = req.body;
  await Portfolio.create({ title, description, imageUrl });
  res.redirect('/');
});

// Edit Sayfası
router.get('/edit/:id', async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  res.render('edit', { portfolio });
});

router.post('/edit/:id', async (req, res) => {
  const { title, description, imageUrl } = req.body;
  await Portfolio.findByIdAndUpdate(req.params.id, { title, description, imageUrl });
  res.redirect('/');
});

// Portfolio Silme
router.post('/delete/:id', async (req, res) => {
  await Portfolio.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
