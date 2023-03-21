import axios from 'axios';

const request = axios.create({
    baseURL: ' https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option); // bình thường là axios.get("url_api")
    return response.data; //mục đích để lấy ra data của response từ data của axios
};
export default request;
