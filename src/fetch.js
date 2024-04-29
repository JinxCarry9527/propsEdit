// fetch.js

import axios from 'axios';

export default {
  async fetchPostsList(callback) {
    return axios.get('/xx').then(res => {
      return callback(res.data);
    })
  }
}