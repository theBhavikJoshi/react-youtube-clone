import axios from 'axios';
const KEY  = 'AIzaSyAldQ9u209cCWSMPZmONED5EiRZwYGNURc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    key: KEY
  }
})