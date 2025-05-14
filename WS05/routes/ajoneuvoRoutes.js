const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Ajoneuvo = require('../models/ajoneuvo');

router.get('/getall', async (req, res) => {
  try {
    const ajoneuvot = await Ajoneuvo.find();
    res.status(200).json(ajoneuvot);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const ajoneuvo = await Ajoneuvo.findById(req.params.id);
    console.log(ajoneuvo)
    if (!ajoneuvo) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(ajoneuvo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/add', async (req, res) => {
  try {
    const { model, type, kilpi } = req.body;
    
    if (!model || !type || !kilpi) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['model', 'type', 'kilpi']
      });
    }

    const uusi = new Ajoneuvo({ model, type, kilpi });
    await uusi.save();
    res.status(201).json(uusi);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const { model, type, kilpi } = req.body;
    const update = { model, type, kilpi };

    const updatedAjoneuvo = await Ajoneuvo.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );
    
    if (!updatedAjoneuvo) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(updatedAjoneuvo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const deletedAjoneuvo = await Ajoneuvo.findByIdAndDelete(req.params.id);
    if (!deletedAjoneuvo) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;