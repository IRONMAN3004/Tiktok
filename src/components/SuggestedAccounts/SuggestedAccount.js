import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const info_item = [
        {
            src: 'https://i.pinimg.com/564x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg',
            nickname: 'Dạt Vina ta ba',
            name: 'vnnn.official',
            icon: true,
        },
        {
            src: 'https://i.pinimg.com/236x/7c/af/30/7caf30b02abf707ca10f018670c02493.jpg',
            nickname: 'annhien_boiboi',
            name: 'AnNhiên BốiBối',
            icon: true,
        },
        {
            src: 'https://i.pinimg.com/236x/8e/4e/cc/8e4eccbf5c493d39600b90dfb3fa3632.jpg',
            nickname: 'GaoStore',
            name: 'Gạo Store Việt Nam',
        },
        {
            src: 'https://i.pinimg.com/564x/00/84/5c/00845c222302e602a3b8cd24ef54ce19.jpg',
            nickname: '_roseeinWhite',
            name: 'hi, tớ là rosee',
        },
        {
            src: 'https://i.pinimg.com/564x/0d/b1/d8/0db1d8d5fc83125ab2645388c06b3858.jpg',
            nickname: 'yni_66',
            name: 'ThorYni',
        },
        {
            src: 'https://i.pinimg.com/564x/3a/f2/71/3af271dcaaf387790e74787f1a414eef.jpg',
            nickname: '_vn.p304',
            name: 'Phạm Văn Nam đây',
            icon: true,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list-account_item')}>
                <AccountItem data={info_item} />
            </div>
            <button className={cx('see-more')}>See all</button>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
