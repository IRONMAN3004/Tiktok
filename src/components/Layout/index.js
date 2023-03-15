export { default as DefaultLayout } from './DefaultLayout';
export { default as HeaderOnly } from './HeaderOnly';

/* 
 Nếu một tệp khác import thành phần này, nó sẽ sử dụng tên mặc định để import, ví dụ:
 import HeaderOnly from './HeaderOnly';

 còn nếu trong file ./HeaderOnly'; ko đc expor default ra cái gì thì sẽ ko xuất ra cái gì

 =>>Điều này có nghĩa là khi import từ './HeaderOnly', CHỈ có thành phần mặc định(DÈAULT) được xuất ra bên 
 ngoài và nó được đặt tên là 'default'.Nếu như có export ra nhiều thì dùng dustructuring như ở trên
 . Nếu trong tệp HeaderOnly.js mà không định nghĩa thành phần mặc định thì khi import sẽ không có gì được xuất ra.
*/
