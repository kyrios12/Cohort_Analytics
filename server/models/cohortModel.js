const mongoose = require('mongoose');

const CohortSchema = new mongoose.Schema({
  cohort: {
    type: String,
    required: true,
    unique: true, // Each cohort (e.g. 2024-03) should be stored only once
  },
  retention: {
    type: Map,
    of: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Cohort', CohortSchema);
