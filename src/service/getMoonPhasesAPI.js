import axios from 'axios';

const BASE_URL = 'https://api.farmsense.net/v1/moonphases';

export const getMoonPhasesQuery = async params =>
  await axios.get(`${BASE_URL}/?d=${params}`);
