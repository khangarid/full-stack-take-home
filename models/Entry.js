const mongoose = require('mongoose');
const { Schema } = mongoose;

const EntrySchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  flow: { type: Number, required: true, min: 1 },
  pressure: { type: Number, required: true, min: 1 },
});

mongoose.model('entries', EntrySchema);

module.exports = EntrySchema;
