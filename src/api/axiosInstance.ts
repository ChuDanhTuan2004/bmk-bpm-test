import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apisit.bmktech.vn',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'vi',
        'appid': 'ELITE_APP',
        'appversion': 'v1',
        'deviceid': '069b21c2-3e74-4518-90f2-35b6e37173dc',
        'latitude': 'null',
        'longitude': 'null',
        'priority': 'u=1, i',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
    },
});

export default api;
