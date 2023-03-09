// function checkID(params) {
//     fdsghjd
// }

function Validation() {
    //phương thức kiểm tra
    //input: valueInput , spanID , message
    //output: đúng true , sai false
    this.checkEmpty = function (valueInput, spanID, message) {
        if (valueInput == "") {
            //không hợp lệ
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

        //hợp lệ
        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true
    }

    this.checkTaiKhoan = function (valueInput, spanID, message, mangNV) {
        // some(): trả về true / false (kiểm tra điều kiện nào đó trong mảng)
        var isExist = false; //? giả sử chưa có mã

        var pattern = /^[0-9]{4,6}$/;
        
        //? kiểm chứng mã có trong mảng chưa
        isExist = mangNV.some(function (nv) {
            return valueInput === nv.taiKhoan;
        });

        if (isExist || !valueInput.match(pattern)) {
            //! đã tồn tại mã sinh viên => không hợp lệ
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false

        } else {
            //? mã không trùng => hợp lệ
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

    }

    this.checkTaiKhoanUpdate = function (valueInput, spanID, message, mangNV) {
        // some(): trả về true / false (kiểm tra điều kiện nào đó trong mảng)
        var isExist = false; //? giả sử chưa có mã
        
        //? kiểm chứng mã có trong mảng chưa
        isExist = mangNV.some(function (nv) {
            return valueInput === nv.taiKhoan;
        });

        if (isExist === true) {
            //? mã trùng => hợp lệ
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true

        } else {
            //! không tồn tại mã sinh viên => không hợp lệ
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

    }

    this.checkName = function (valueInput, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        // test(), match()
        if (valueInput.match(pattern)) {
            //hợp lệ
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //không hợp lệ
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkEmail = function (valueInput, spanID, message) {
        var patternString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // var patternRegexp = new RegExp(patternString);
        // test(), match()
        if (valueInput.match(patternString)) {
            //hợp lệ
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //không hợp lệ
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }


    this.checkPass = function (valueInput, spanID, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if (valueInput.match(pattern)) {
            //hợp lệ
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //không hợp lệ
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }  


    this.checkSelect = function (selectID, spanID, message) {
        var indexOption = document.getElementById(selectID).value;

        if (indexOption !== "Chọn chức vụ") {
            //hợp lệ

            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }


        //không hợp lệ
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }


    this.checkScore = function (valueInput, spanID, message) {

        if (valueInput >= 80 && valueInput <= 200) {
            //hợp lệ

            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //không hợp lệ
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false


    }

    this.checkSal = function (valueInput, spanID, message) {
        //var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;

        if (valueInput >= 1000000 && valueInput <= 20000000) {
            //hợp lệ

            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //không hợp lệ
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false


    }

}