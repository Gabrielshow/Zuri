const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  if (!slackName || !track) {
    res.status(400).json({ error: 'Missing slack_name or track query parameter' });
    return;
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date();
  const currentDay = days[date.getDay()];

  const utcTime = date.toISOString();

  const githubFileUrl = 'https://github.com/Gabrielshow/Zuri/blob/master/server.js';
  
  const githubRepoUrl = 'https://github.com/Gabrielshow/Zuri';

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200
  };

  res.json(response);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`); 
});
