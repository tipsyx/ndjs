const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  try {
    let slack_name = "Tipsy0";
    let track = "backend";

    if (req.query.slack_name) {
      slack_name = req.query.slack_name;
    }

    if (req.query.track) {
      track = req.query.track;
    }

    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const currentUtcTime = new Date().toISOString();

    const fileUrl = "https://github.com/tipsyx/retask/blob/main/app.js";

    const sourceCodeUrl = "https://github.com/tipsyx/retask";

    const response = {
      slack_name,
      current_day: currentDay,
      current_utc_time: currentUtcTime,
      track,
      file_url: fileUrl,
      source_code_url: sourceCodeUrl,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

