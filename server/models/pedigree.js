const mongoose = require('mongoose');

const pedigreeSchema = new mongoose.Schema({}, { strict: false });

const Pedigree = mongoose.model('Pedigree', pedigreeSchema);

exports.pedigreeSchema = pedigreeSchema;
exports.Pedigree = Pedigree;