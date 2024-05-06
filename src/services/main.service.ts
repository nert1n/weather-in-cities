import axios from 'axios';

export default class MainService {
  static async getAll(city: string, language: string) {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${language}&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`);
    return res.data;
  }
  static async getIp() {
    const res = await axios.get('https://ipapi.co/json/');
    return res.data;
  }
}