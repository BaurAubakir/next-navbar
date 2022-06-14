import axios from 'axios';

const API_URL = '/api/app/';

// Create app
const createApp = async (appData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, appData, config);

  return response.data;
};

const appService = {
  createApp,
};

export default appService;
