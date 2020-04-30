import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

export default axios.create({
    baseURL: 'https://ws.crmolivosvillavicencio.com/app',
}).interceptors.response.use(AxiosLogger.responseLogger);