//slide//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//search
function timkiem() {
    var kqtim = document.getElementById("getIn").value; /* guitar     tranhquehuong.html                guitar.html */
    if (kqtim == "nón bảo hiểm" || kqtim == "non bao hiem") {
        window.location = "nonbh.html";
    } else if (kqtim == "nón thời trang" || kqtim == "non thoi trang") {
        window.location = "nontr.html";
    } else if (kqtim == "nón thể thao" || kqtim == "non the thao") {
        window.location = "nontt.html";
    } else if (kqtim == "phụ kiện" || kqtim == "phu kien") {
        window.location = "phukien.html";
    }
}

function timkiemuser() {
    var kqtim = document.getElementById("getIn").value; /* guitar     tranhquehuong.html                guitar.html */
    if (kqtim == "nón bảo hiểm" || kqtim == "non bao hiem") {
        window.location = "nonbh-user.html";
    } else if (kqtim == "nón thời trang" || kqtim == "non thoi trang") {
        window.location = "nontr-user.html";
    } else if (kqtim == "nón thể thao" || kqtim == "non the thao") {
        window.location = "nontt-user.html";
    } else if (kqtim == "phụ kiện" || kqtim == "phu kien") {
        window.location = "phukien-user.html";
    }
}
// Giỏ hàng
function addshop() {
    alert("Đã thêm vào giỏ hàng");
}
//Mua ngay
function mua() {
    if (confirm("Bạn phải đăng nhập để mua hàng!") == true) {
        window.location = "dangnhap.html";
    }
}
//Đăng kí
function register() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var passwordl = document.getElementById("passw").value;

    var sexRadios = document.getElementsByName("text");
    var a = sexRadios.value;
    var selected = false;
    for (var i = 0; i < sexRadios.length; i++) {
        if (sexRadios[i].checked) {
            selected = true;
            break;
        }
    }
    if (name == "" || phone == "" || username == "" || password == "" || passwordl == "" || !selected) {
        if (name == "") {
            alert("Họ và tên không được bỏ trống!");
            return;
        } else if (phone == "") {
            alert("Số điện thoại không được bỏ trống!");
            return;
        } else if (!selected) {
            {
                alert("Vui lòng chọn giới tính");
                return;
            }
            return;
        } else if (username == "") {
            alert("Tên tài khoản không được bỏ trống!");
            return;
        } else if (password == "") {
            alert("Mật khẩu không được bỏ trống!");
            return;
        } else if (passwordl == "") {
            alert("Hãy nhập xác minh mật khẩu!");
            return;
        }
    } else if (name.length < 5) {
        alert("Bạn phải dùng họ tên thật của mình để đăng kí!");
        return;
    } else if (username == "mynhu" || username == "admin") {
        alert("Tên tài khoản đã tồn tại!");
        return;
    } else if (username.length < 5) {
        alert("Tên tài khoản phải nhiều hơn 5 kí tự !");
        return;
    } else if (password.length <= 7) {
        alert("Mật khẩu phải từ 8 kí tự trở lên !");
        return;
    } else if (password != passwordl) {
        alert("Mật khẩu không trùng nhau vui lòng nhập lại");
        return;
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("name", name);
        alert("Bạn đã đăng kí thành công!");
        window.location = "login.html";
    }
}

// Đăng nhập
function kiemtra() {
    var name1 = "Lu Mỹ Như"
    var username1 = "mynhu";
    var password1 = "123";

    var name2 = localStorage.getItem("name");
    var username2 = localStorage.getItem("username");
    var password2 = localStorage.getItem("password");

    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;

    if (userName == "" || passWord == "") {
        if (userName == "") {
            alert("Tên tài khoản không được bỏ trống!");
            return;
        }
        if (passWord == "") {
            alert("Mật khẩu không được bỏ trống!");
            return;
        }
    } else {
        if ((username1 == userName) && (password1 == passWord)) {
            localStorage.setItem("Hello", name1);
            alert("Chào mừng " + name1 + "!");
            window.location = "index-user.html";
            return false;
        } else if ((username3 == userName) && (password3 == passWord)) {
            localStorage.setItem("hello", name3);
            alert("Chào mừng " + name3 + "!");
            window.location = "index-user.html";
            return false;
        } else alert("Bạn nhập sai tên tài khoản hoặc mật khẩu !");
    }
}

//check thanh toán
function check() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var diachi1 = document.getElementById("dc1").value;
    var diachi2 = document.getElementById("dc2").value;
    var diachi3 = document.getElementById("dc3").value;
    var diachi4 = document.getElementById("dc4").value;

    var sexRadios = document.getElementsByName("name");
    var a = sexRadios.value;
    var selected = false;
    for (var i = 0; i < sexRadios.length; i++) {
        if (sexRadios[i].checked) {
            selected = true;
            break;
        }
    }
    if (name == "") {
        alert("Họ và tên người nhận không được bỏ trống!");
        return;
    }
    if (phone == "") {
        alert("Số điện thoại giao hàng không được bỏ trống!");
        return;
    }
    if (diachi1 == "") {
        alert("Tỉnh/ Thành phố không được bỏ trống!");
        return;
    }
    if (diachi2 == "") {
        alert("Quận/ Huyện không được bỏ trống!");
        return;
    }
    if (diachi3 == "") {
        alert("Phường/ Xã không được bỏ trống!");
        return;
    }
    if (diachi4 == "") {
        alert("Địa chỉ không được bỏ trống!");
        return;
    }
    if (!selected) {
        alert("Vui lòng chọn phương thức thanh toán");
        return;
    }
    if (name != "" && phone != "" && diachi1 != "" && diachi2 != "" && diachi3 != "" && diachi4 != "" && selected) {
        window.location = "hoadon.html";
    }
}

//hóa đơn button
function btnXacNhan() {
    alert("Đã đặt hàng thành công!\nCảm ơn bạn đã mua hàng tại NQTSHOP");
    window.location = "index-user.html";
}

function btnHuyBo() {
    if (confirm("Bạn chắc chắn muốn hủy?") == true) {
        alert("Bạn đã hủy!");
        window.location = "index-user.html";
    }
}

function xoa() {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm ?") == true) {
        alert("Bạn đã xóa thành công!");
    }
}

function xoadn() {
    if (confirm("Bạn chắc chắn muốn xóa tài khoản này ?") == true) {
        alert("Bạn đã xóa thành công!");
    }
}

function khoadn() {
    if (confirm("Bạn chắc chắn muốn khóa tài khoản này ?") == true) {
        alert("Khóa tài khoản thành công!");
    }
}