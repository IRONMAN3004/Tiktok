import axios from 'axios';

// console.log(process.env);
//Create Instance (axios)
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option); // bình thường là axios.get("url_api")
    return response.data; //mục đích để lấy ra data của response từ data của axios
};
export default request;
