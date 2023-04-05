import VideoItem from '~/components/Video/VideoItem';

function Home() {
    const info_video = [
        {
            src: 'https://static2.yan.vn/YanNews/2167221/202112/nghi-van-mck-va-tlinh-guong-vo-lai-lanh-gay-xon-xao-mxh-718decea.jpg',
            nickname: 'mck',
            name: 'Tlinh đây',
            none: true,
            description: '[Live] RPT MCK - Anh Đã Ổn Hơn @"99%"',
            hastags: ['#Album', ' #SUY', 'Night', '#1900', ' #rapper'],
            namemusic: 'Anh Đã Ổn Hơn',
            frame: (
                <iframe
                    width="320"
                    height="515"
                    src="https://www.youtube.com/embed/dz6xe0xXqYE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            ),
            like: '24.6M',
            cmt: '305.3k',
            share: '102k',
        },
        {
            src: 'https://i.ytimg.com/vi/t_nCINnDNxY/maxresdefault.jpg',
            nickname: 'tli',
            name: 'Tlinh đây',
            none: true,
            description: '[Live] RPT  - Anh đã bị cắm sừng @"99%"',
            hastags: ['#Album', '#1900', ' #rapper'],
            namemusic: 'Nếu lúc đó thì',
            frame: (
                <iframe
                    width="320"
                    height="515"
                    src="https://www.youtube.com/embed/fyMgBQioTLo"
                    title="tlinh - nếu lúc đó (ft. 2pillz) | OFFICIAL MUSIC VIDEO"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            ),
            like: '10.6M',
            cmt: '102.3k',
            share: '202.9k',
        },

        {
            src: 'https://cdn.ithethao.vn/image/12.05.2022/theanh96-gia-nhap-hang-ngu-kol-cua-500bros_1652352981.jpg?version=1652354040',
            nickname: 'theanh096',
            name: 'TheAnh96',
            none: false,

            hastags: ['#theanh96', '#boylacquan'],
            namemusic: 'nhạc nền - TheAnh96',
            frame: (
                <iframe
                    width="320"
                    height="515"
                    src="https://www.youtube.com/embed/Qzm_sxvWXlE"
                    title="Giao Tiếp Là Chìa Khóa Chiến Thắng"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            ),
            like: '10.6k',
            cmt: '1.3k',
            share: '2.1k',
        },

        {
            src: 'https://i.pinimg.com/564x/ae/ef/0e/aeef0e1be313af1723bef285f2dc5005.jpg',
            nickname: 'dyqynh',
            name: 'qynh',
            none: false,

            hastags: ['#CapCut', '#xuhuong', '#TikTokGiaiTri', '#xinhgai'],
            namemusic: 'Nhạc nền - qynh',
            frame: (
                <iframe
                    width="520"
                    height="350"
                    src="https://www.youtube.com/embed/RWMLJ0bjzDM"
                    title="Tổng Hợp Những Video Của Các Idol TikTok #241 l Trần Luân Tv"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            ),
            like: '27.6k',
            cmt: '10.7k',
            share: '9.1k',
        },
    ];
    return (
        <>
            <VideoItem data={info_video} />
        </>
    );
}

export default Home;
