// Helper: Generate dummy cohort retention data
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
  
  // Helper: Generate dummy layer cake data
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
  
  // Controller: Return cohort data
  const getCohortData = (req, res) => {
    try {
      const data = generateCohortData();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: 'Error generating cohort data', error: err });
    }
  };
  
  // Controller: Return layer cake data
  const getLayerCakeData = (req, res) => {
    try {
      const data = generateLayerCakeData();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: 'Error generating layer cake data', error: err });
    }
  };
  
  module.exports = {
    getCohortData,
    getLayerCakeData,
  };
  