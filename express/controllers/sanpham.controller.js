exports.list = (req,res, next)=>{
    // hiển thị danh sách sản phẩm

    res.render('sanpham/list');
}

exports.add = (req, res, next)=>{

    res.render('sanpham/add')
}