function nhanVien(taiKhoan,tenNV,email,pass,ngaySinh,luongCoBan,chucVu,gioLam) {
    //thuộc tính
    this.taiKhoan = taiKhoan;
    this.tenNV = tenNV;
    this.email = email;
    this.pass = pass;
    this.ngaySinh = ngaySinh;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";
    //phương thức
    this.tinhTongLuong = function(){
        let exponentval = this.chucVu === "Giám đốc" ? 3 
                        : this.chucVu === "Trưởng phòng" ? 2 
                        : 1; 
        this.tongLuong = this.luongCoBan * exponentval;
    }

    this.tinhLoaiNhanVien = function(){
        this.loaiNhanVien = this.gioLam >= 192 ? "Xuất xắc" 
                          : this.gioLam >= 176 ? "Giỏi"
                          : this.gioLam >= 160 ? "Khá" 
                          : "Trung bình"
                        
    }
}

