# Huong dan upload file 
 https://www.npmjs.com/package/multer?activeTab=readme 
 
Bước 1: cài đặt thư viện  
npm install --save multer
Bước 2: Tạo thư mục đặt tên là uploads/ ở trong thư mục /public để chứa file

Buoc 3: Tạo form html 
```

    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="anh" /> 
        <button type="submit"> Upload </button>
    </form> 
```
Bước 4: Sửa router:
```
// upload file:
var multer = require('multer'); // dùng upload file
var uploader = multer({dest: './tmp'});
router.post('/add',uploader.single('anh'), spCtrl.add);

```
