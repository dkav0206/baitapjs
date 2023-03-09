function ListNhanVien (){
    this.arrayNhanVien = [];

    this.addNV = function (nv) {
        this.arrayNhanVien.push(nv);
    }

    this.findIndexNV = function (id) {
        var indexFind = -1;
        indexFind = this.arrayNhanVien.findIndex(function (nv) {
            return nv.taiKhoan == id;
        })
        return indexFind;
    }

    this.delNV = function (id) {
        var index = this.findIndexNV(id);
        if (index != -1) {
            this.arrayNhanVien.splice(index, 1);
        }

    }

    this.updateNV = function (nv) {
        //tìm index
        var index = this.findIndexNV(nv.taiKhoan);
        if (index != -1) {
            //tìm thấy
            //thay đổi giá trị phần tử mảng theo index
            this.arrayNhanVien[index] = nv;
        }
    }

}

ListNhanVien.prototype.searchName = function (keyword) {

    var mangKQ = [];
    //! trim(): xóa khoảng trắng trước và sau đoạn chữ
    // keyword = keyword.trim();
    var keywordLowerCase = keyword.toLowerCase();

    keywordLowerCase = keywordLowerCase.replace(/\s/g, "");

    console.log(keywordLowerCase);
    this.arrayNhanVien.map(function (nv) {
        var nameLowerCase = nv.loaiNhanVien.toLowerCase().replace(/\s/g, "");
        // nameLowerCase.replace(/\s/g, "");

        if (nameLowerCase.indexOf(keywordLowerCase) > -1) {
            //tìm được sv theo tên
            mangKQ.push(nv);
        }

    });


    return mangKQ;


}