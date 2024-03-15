// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Mock campaigns data
const campaigns = {
  client1: [
    { id: 1, title: 'Campaign 1', description: 'Description for Campaign 1' },
    { id: 2, title: 'Campaign 2', description: 'Description for Campaign 2' }
  ],
  client2: [
    { id: 1, title: 'Campaign 3', description: 'Description for Campaign 3' },
    { id: 2, title: 'Campaign 4', description: 'Description for Campaign 4' }
  ]
};

// API endpoint to fetch campaigns for a specific client
app.get('/api/campaigns/:clientId', (req, res) => {
  const clientId = req.params.clientId;
  const clientCampaigns = campaigns[clientId] || [];
  res.json(clientCampaigns);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
