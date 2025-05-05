const express = require('express');
const cors = require('cors');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
const PORT = 5000;
// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', analyticsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
