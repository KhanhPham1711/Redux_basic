cách cấu hình redux : tạo 3 folder: redux , reducer , actions

1 .folder : redux => Store.js

2 folder reducer : tạo file rootReducer.js để import lên file store.js

3 . vào file index.js => dùng Provider + store = {store } để bọc toàn bộ các file app và router bên trong

4 trong file reducer : tạo file counterReducer (tại vì đang dùng chức năng tăng giảm nên đặt tên là couter)

5 . import file counterReducer vào rootReducer

6 . trong file store.js import rootReducer vào

7 trong folder action => tạo file types => dùng để định nghĩa tên biến ví dụ (
export const SET_JOB = "set_job";

export const ADD_JOB = "add_job";)

8. Tiếp tục trong folder action : tạo file actions => ví dụ(
   export const set_job = (payload) => {
   return {
   type: SET_JOB,
   payload,
   };
   };
   )

   và import file types vào file actions

9. trong file conuterReducer

gồm 2 const : 1 là initstate : giá trị khởi tạo
2 là const reducer để xử lí logic
và import TyPEs vào

10 tiếp theo đến file App xử lí hiển thị
#   D e m o _ r e d u x  
 #   R e d u x _ b a s i c  
 