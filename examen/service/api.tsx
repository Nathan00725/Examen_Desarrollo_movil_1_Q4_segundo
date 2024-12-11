
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/logs';

export const fetchLogs = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const postLog = async (logData) => {
  await axios.post(API_BASE_URL, logData);
};
















/*import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/logs';

export const fetchLogs = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const postLog = async (logData) => {
    await axios.post(API_BASE_URL, logData);
};*/