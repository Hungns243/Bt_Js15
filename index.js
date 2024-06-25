//Bai1:
document.getElementById("formDiemChuan").onsubmit = function(event) {
    event.preventDefault();
    console.log("su kien submit");



    let diemChuan = document.getElementById("nhapDiemChuan").value * 1;
    let diemMon1 = document.getElementById("nhapDiem1").value * 1;
    let diemMon2 = document.getElementById("nhapDiem2").value * 1;
    let diemMon3 = document.getElementById("nhapDiem3").value * 1;

    let khuVuc = document.querySelector('input[name="khuVucUt"]:checked').value;
    let doiTuong = document.querySelector('input[name="doiTuongUt"]:checked').value;

    //Kiem tra diem mon thi < 0 thi loai
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById("ketQua").innerHTML = "Ban da rot vi co mon diem bi diem 0";
        return;
    };

    //Tinh diem uu tien khu vuc
    let diemKhuVuc = 0;
    if (khuVuc === "A") {
        diemKhuVuc = 2;
    } else if (khuVuc === "B") {
        diemKhuVuc = 1;
    } else if (khuVuc === "C") {
        diemKhuVuc = 0.5;
    }
    //TInh diem uu tien doi tuong
    let diemDoiTuong = 0;
    if (doiTuong === "dT1") {
        diemDoiTuong = 2.5;
    } else if (doiTuong === "dT2") {
        diemDoiTuong = 1.5;
    } else if (doiTuong === "dT3") {
        diemDoiTuong = 1;
    }

    //TInh tong diem
    let tongDiem = diemMon1 + diemMon2 + diemMon3 +diemDoiTuong +diemKhuVuc;

    //Kiem tra dieu kien tuyen sinh
    if (tongDiem >= diemChuan) {
        document.getElementById("ketQua").innerHTML = `Tong diem: ${tongDiem} - Ban da do,xin chuc mung ban ^^`
    } else {
        document.getElementById("ketQua").innerHTML = `Tong diem: ${tongDiem} - Ban da truot, chuc ban may man lan sau^^`
    }


    //reset form input
    event.target.reset();
};

//Bai2: Tinh tien dien
document.getElementById("formTienDien").onsubmit = function (event) {
    event.preventDefault();

    let hoTen = document.getElementById("hoTen").value;
    let soKw = document.getElementById("nhapSoDien").value * 1;

    let tienDien = tinhTienDien(soKw);

    //Ket qua
    document.getElementById("ketQua2").innerHTML = `Xin chao: ${hoTen} so tien dien can thanh toan la: ${tienDien.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}`;

    //Reset input
    event.target.reset();
};

function tinhTienDien(soKw) {

    let tienDien = 0;
    let bac1_50KwDau = 1806;
    let bac2_51Den100 = 1866;
    let bac3_101den200 = 2167;

    if (soKw <= 50) {
        tienDien = soKw * bac1_50KwDau;
    } else if (soKw <= 100) {
        tienDien = (50 * bac1_50KwDau) + ((soKw - 50) * bac2_51Den100);
    } else {
        tienDien = (50 * bac1_50KwDau) + (50 * bac2_51Den100) + ((soKw - 100) * bac3_101den200);
    }
    return tienDien;
};

//Bai 3:Tinh thue thu nhap ca nhan
document.getElementById("formThueThuNhap").onsubmit = function (event) {
    event.preventDefault(); //tranh reload trang

    let hoTen = document.getElementById("hoTen").value;
    let tongThuNhapNam = document.getElementById("tongThuNhapNam").value *1;
    let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value *1;

    let tongThue = tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc);

    //ket qua
    document.getElementById("ketQua3").innerHTML =`Thue thu nhap ca nhan cua '${hoTen}' la: ${tongThue.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}`
    //reset input
    event.target.reset();
};

function tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc) {
    let thueThuNhap = 0;
    let thuNhapChiuThue = tongThuNhapNam - (4e+6) - soNguoiPhuThuoc * (16e+5);

    if (thuNhapChiuThue <= 0) {
        thueThuNhap = 0;
    } else if (thuNhapChiuThue <= (60e+6)) {
        thueThuNhap = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= (120e+6)) {
        thueThuNhap = (60e+6) * 0.05 + (thuNhapChiuThue - (60e+6)) * 0.1;
    } else if (thuNhapChiuThue <= (210e+6)) {
        thueThuNhap = (60e+6) * 0.05 + (60e+6) * 0.1 + (thuNhapChiuThue - (120e+6)) * 0.15;
    } else if (thuNhapChiuThue <= (384e+6)) {
        thueThuNhap = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (thuNhapChiuThue - (210e+6)) * 0.2;
    } else if (thuNhapChiuThue <= (624e+6)) {
        thueThuNhap = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (thuNhapChiuThue - (384e+6)) * 2.5;
    } else if (thuNhapChiuThue <= (960e+6)) {
        thueThuNhap = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 2.5 + (thuNhapChiuThue - (624e+6)) *0.3;
    } else {
        thueThuNhap = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 2.5 + (336e+6)*0.3 + (thuNhapChiuThue -(960e+6))*0.35;
    }
    return thueThuNhap;
};