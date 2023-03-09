const listNV = new ListNhanVien();
const validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function displayTable(array) {
    var content = "";
    array.map(function (nv, index) {
        var trELE = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.gioLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNhanVien}</td>
            <td>
                <button onclick="delNhanVien('${nv.taiKhoan}')"   class="btn btn-danger"  >Xóa</button>
            </td>
        </tr>`
        content += trELE;
    })
    getELE("tableDanhSach").innerHTML = content;
}

function setLocalStorage(mang) {
    localStorage.setItem("DSNV", JSON.stringify(mang));

}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        listNV.arrayNhanVien = JSON.parse(localStorage.getItem("DSNV"));
        displayTable(listNV.arrayNhanVien);
    }


}
getLocalStorage();//gọi khi load trang


function addNhanVien(){
    var taiKhoan = getELE("tknv").value;
    var tenSV = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngaySinh = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;

    //taikhoan: có dữ liệu ko, có bị trùng ko
    isValid &= validation.checkEmpty(taiKhoan, "tbTKNV", "Tài khoản nhân viên không để trống!") && validation.checkTaiKhoan(taiKhoan, "tbTKNV", "Tài khoảnh nhân viên không hợp lệ", listNV.arrayNhanVien);

    //tenSV: có dữ liệu ko, đúng định dạng không

    isValid &= validation.checkEmpty(tenSV, "tbTen", "Tên nhân viên không để trống!") && validation.checkName(tenSV, "tbTen", "Tên sinh vien chưa đúng định dạng!");

    //email: có dữ liệu ko, đúng định dạng không

    isValid &= validation.checkEmpty(email, "tbEmail", "Email không để trống!") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng!");

    //Pass
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không để trống!") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu chưa đúng định dạng!");

    //LươngCB
    isValid &= validation.checkEmpty(luongCoBan, "tbLuongCB", "Lương cơ bản không để trống!") && validation.checkSal(luongCoBan, "tbLuongCB", "Lương cơ bản chưa đúng định dạng!");
   
    //Chức vụ: kiểm tra người dùng có chọn không

    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chức vụ chưa hợp lệ!");

    //Giờ làm: phải là số, 80 -> 200

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không để trống!") && validation.checkScore(gioLam, "tbGiolam", "Giờ làm chưa hợp lệ!");

    if(isValid){
        var nv = new nhanVien(taiKhoan, tenSV, email, pass, ngaySinh, Number(luongCoBan), chucVu, Number(gioLam));
        nv.tinhLoaiNhanVien();
        nv.tinhTongLuong();
        listNV.addNV(nv);
        displayTable(listNV.arrayNhanVien);
        setLocalStorage(listNV.arrayNhanVien);
    }
}

function delNhanVien(id) {
    listNV.delNV(id);
    setLocalStorage(listNV.arrayNhanVien);
    displayTable(listNV.arrayNhanVien);
    getLocalStorage()

}

function update() {
    //lấy giá trị từ form
    var taiKhoan = getELE("tknv").value;
    var tenSV = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngaySinh = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;

    //taikhoan: có dữ liệu ko, có bị trùng ko
    isValid &= validation.checkEmpty(taiKhoan, "tbTKNV", "Tài khoảnh nhân viên không để trống!") && validation.checkTaiKhoanUpdate(taiKhoan, "tbTKNV", "Không tìm thấy tài khoản", listNV.arrayNhanVien);

    //tenSV: có dữ liệu ko, đúng định dạng không

    isValid &= validation.checkEmpty(tenSV, "tbTen", "Tên nhân viên không để trống!") && validation.checkName(tenSV, "tbTen", "Tên sinh vien chưa đúng định dạng!");

    //email: có dữ liệu ko, đúng định dạng không

    isValid &= validation.checkEmpty(email, "tbEmail", "Email không để trống!") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng!");

    //Pass
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không để trống!") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu chưa đúng định dạng!");

    //LươngCB
    isValid &= validation.checkEmpty(luongCoBan, "tbLuongCB", "Lương cơ bản không để trống!") && validation.checkSal(luongCoBan, "tbLuongCB", "Lương cơ bản chưa đúng định dạng!");
   
    //Chức vụ: kiểm tra người dùng có chọn không

    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chức vụ chưa hợp lệ!");

    //Giờ làm: phải là số, 80 -> 200

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không để trống!") && validation.checkScore(gioLam, "tbGiolam", "Giờ làm chưa hợp lệ!");

    if(isValid){
        var nv = new nhanVien(taiKhoan, tenSV, email, pass, ngaySinh, Number(luongCoBan), chucVu, Number(gioLam));
        nv.tinhLoaiNhanVien();
        nv.tinhTongLuong();
        listNV.updateNV(nv);
        displayTable(listNV.arrayNhanVien);
        setLocalStorage(listNV.arrayNhanVien);
        getLocalStorage();
    }

}

function search() {
    var keyword = getELE("searchName").value;
    var mangKQ = listNV.searchName(keyword);

    displayTable(mangKQ);
}

getELE("btnThemNV").onclick = addNhanVien; 
getELE("btnCapNhat").onclick = update; 

getELE("searchName").onkeyup = function(){
    var keyword = getELE("searchName").value;
    var mangKQ = listNV.searchName(keyword);
    displayTable(mangKQ);
}