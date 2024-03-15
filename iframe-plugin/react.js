// App.js

import React, { useState, useEffect } from 'react';

const App = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns for a specific client
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('/api/campaigns/client1');
        if (!response.ok) {
          throw new Error('Failed to fetch campaigns');
        }
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h1>Campaigns</h1>
      {campaigns.map(campaign => (
        <div key={campaign.id}>
          <h2>{campaign.title}</h2>
          <p>{campaign.description}</p>
          <iframe src={`https://yourwebsite.com/campaigns/${campaign.id}`} title={campaign.title} />
        </div>
      ))}
    </div>
  );
};

export default App;
