import axios from 'axios';
import { KEY } from './../keys';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    key: KEY
  }
})