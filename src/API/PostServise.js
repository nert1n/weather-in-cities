import axios from 'axios';

export default class PostService {
  static async getAll(props) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=${props.language}&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`);
    return response.data;
  }
  static async getIp() {
    const response = await axios.get('https://ipapi.co/json/');
    return response.data;
  }
}