const express = require('express');
const router = express.Router();

// Dummy data generator functions
const generateCohortData = () => {
  const cohorts = ['2024-01', '2024-02', '2024-03', '2024-04'];
  const maxDays = 10;

  return cohorts.map(cohort => {
    const day0Users = Math.floor(Math.random() * 500) + 100;
    const data = { cohort, day0: day0Users };

    for (let day = 1; day <= maxDays; day++) {
      const decay = Math.random() * 0.3 + 0.6;
      data[`day${day}`] = Math.floor(data[`day${day - 1}`] * decay);
    }

    return data;
  });
};

const generateLayerCakeData = () => {
  const days = 10;
  const cohorts = ['2024-01', '2024-02', '2024-03', '2024-04'];

  const result = [];
  for (let i = 0; i <= days; i++) {
    const entry = { day: `Day ${i}` };
    cohorts.forEach(cohort => {
      entry[cohort] = Math.max(0, Math.floor(Math.random() * 300 + 100 - i * 10));
    });
    result.push(entry);
  }

  return result;
};

// Routes
router.get('/cohorts', (req, res) => {
  const data = generateCohortData();
  res.json(data);
});

router.get('/layercake', (req, res) => {
  const data = generateLayerCakeData();
  res.json(data);
});

module.exports = router;
