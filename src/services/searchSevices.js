import * as request from '~/utils/httpRequest';

export const search = async (query, type = 'less') => {
    try {
        const res = await request.get('users/search?', {
            //đoạn code này mục đích gọi hàm get trong untils/request  thì hàm get này nó trả về response.data và trong đây mình phải .data nữa thì mới nhận đc dữ liệu
            params: {
                q: query,
                type: 'less',
            },
        });

        return res.data;
    } catch (erre) {}
};

// const fetchApi = async () => {
//     try {
//         const res = await request.get('users/search?', {     // bình thường là axios.get("url_api",{option_param)
//             params: {
//                 q: debounced,
//                 type: 'less',
//             },
//         });
//         // console.log(res);

//         setSearchResult(res.data);
//         setLoading(false);
//     } catch (erre) {
//         setLoading(false);
//     }
// };
