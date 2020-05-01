const express = require('express');
const router = express.Router();
const {Pedigree} = require('../models/pedigree');

router.get('/', async (req, res) => {
  const pedigree = await Pedigree.find();
  res.send(pedigree);
});

router.post('/', async (req, res) => {
  let pedigree = new Pedigree({...req.body});
  pedigree = await pedigree.save();

  res.send(pedigree);
});

router.put('/:id', async (req, res) => {
  const pedigree = await Pedigree.findByIdAndUpdate(req.params.id, { ...req.body }, {
    new: true
  });

  if (!pedigree) return res.status(404).send('The pedigree with the given ID was not found.');
  res.send(pedigree);
});

router.delete('/:id', async (req, res) => {
  const pedigree = await Pedigree.findByIdAndRemove(req.params.id);

  if (!pedigree) return res.status(404).send('The pedigree with the given ID was not found.');

  res.send(pedigree);
});

router.get('/:id', async (req, res) => {
  const pedigree = await Pedigree.findById(req.params.id);

  if (!pedigree) return res.status(404).send('The pedigree with the given ID was not found.');

  res.send(pedigree);
});

module.exports = router;