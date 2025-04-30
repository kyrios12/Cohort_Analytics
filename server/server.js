const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper to generate dummy cohort retention data
const generateCohortData = () => {
  const cohorts = ['2024-01', '2024-02', '2024-03', '2024-04'];
  const maxDays = 10;

  return cohorts.map(cohort => {
    const day0Users = Math.floor(Math.random() * 500) + 100;
    const data = { cohort, day0: day0Users };

    for (let day = 1; day <= maxDays; day++) {
      const decay = Math.random() * 0.3 + 0.6; // 60–90% retention
      data[`day${day}`] = Math.floor(data[`day${day - 1}`] * decay);
    }

    return data;
  });
};

// Helper to generate layer cake data
const generateLayerCakeData = () => {
  const days = 10;
  const cohorts = ['2024-01', '2024-02', '2024-03', '2024-04'];

  const result = [];
  for (let i = 0; i <= days; i++) {
    const entry = { day: `Day ${i}` };
    cohorts.forEach(cohort => {
      // Slight decay across days for each cohort
      entry[cohort] = Math.floor(Math.random() * 300 + 100 - i * 10);
    });
    result.push(entry);
  }

  return result;
};

// Routes
app.get('/api/cohorts', (req, res) => {
  const data = generateCohortData();
  res.json(data);
});

app.get('/api/layercake', (req, res) => {
  const data = generateLayerCakeData();
  res.json(data);
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
