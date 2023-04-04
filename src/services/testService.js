import axios from 'axios';

const getTestService = () => {
    return axios.get('localhost:8000/api/get-test');
};

export { getTestService };
