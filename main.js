/**
 * Cho người dùng nhập vào số nguyên và lưu vào trong mảng
 */
// tự cho mảng
var arrNumber = [1,-6,22,-18,30,4,-3,45,6,27,8,9,-41,-9];
document.getElementById("btnSubmit").onclick = function() {
    // input: giá trị người dùng nhập
    var soNguyen = document.getElementById("nhapSo").value*1;

    // output: string
    var result = "";

    // xử lý
    arrNumber.push(soNguyen);

    for(var index = 0; index < arrNumber.length; index++) {
        // mỗi lần duyệt lấy ra một giá trị
        var giaTri = arrNumber[index];
        result += giaTri + " ";
    }
    document.getElementById("thongbao").innerHTML = result;
} 

/**
 * Bài tập 1: Tính tổng số dương truong mảng
 */
document.getElementById("btnTinhTongSoDuong").onclick = function() {
    // output: number
    var result = 0;
    for(var index = 0; index < arrNumber.length; index++) {
        var giaTri = arrNumber[index];
        if(giaTri > 0) {
            result += giaTri;
        }
    }
    document.getElementById("thongbao1").innerHTML = result;
}

/**
 * Bài tập 2: Đếm có bao nhiêu số dương trong mảng
 */
 document.getElementById("btnDemSoDuong").onclick = function() {
    // output: number
    var result = 0;
    for(var index = 0; index < arrNumber.length; index++) {
        var giaTri = arrNumber[index];
        if(giaTri > 0) {
            result++;
        }
    }
    document.getElementById("thongbao2").innerHTML = result;
}

/**
 * Bài tập 3: Tìm số nhỏ nhất trong mảng
 */
document.getElementById("btnSoNhoNhat").onclick = function() {
    // lính canh
    var min = arrNumber[0];
    for(var index = 0; index < arrNumber.length; index++) {
        var giaTri = arrNumber[index];
        if(giaTri < min ) {
            min = arrNumber[index];
        }
    }
    document.getElementById("thongbao3").innerHTML = min;
}

/**
 * Bài tập 4: Tìm số dương nhỏ nhất trong mảng
 */
 document.getElementById("btnSoDuongNhoNhat").onclick = function() {
    // lính canh
    var max = arrNumber[0];
    for(var index = 0; index < arrNumber.length; index++) {
        var giaTri = arrNumber[index];
        if(giaTri <= max && giaTri > 0 ) {
            max = arrNumber[index];
        }
    }
    document.getElementById("thongbao4").innerHTML = max;
}

/**
 * Bài tập 5: Tìm số chẵn cuối cùng trong mảng
 */
 document.getElementById("btnSoChanCuoiCung").onclick = function() {
    // lính canh
    var soChan = 0;
    for(var index = arrNumber.length -1; index >= 0; index-- ) {
        var giaTri = arrNumber[index];
        if(giaTri%2 === 0 ) {
            soChan = arrNumber[index];
            break;
        } else {
            soChan =-1;
        }
    }
    document.getElementById("thongbao5").innerHTML = soChan;
}

/**
 * Bài tập 6: Bài tập 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
 */
document.getElementById("btnDoiChoGiaTri").onclick = function() {
    var number1 = document.getElementById("themGiaTri1").value*1;
    var number2 = document.getElementById("themGiaTri2").value*1;
    var result = "";
    for( var index = 0; index <= arrNumber.length -1; index++) {
        if(number1 === index || number2 === index) {
            var giaTri2 = arrNumber[number2]*1;
            var giaTri1 = arrNumber[number1]*1;
             arrNumber.splice(number1,1,giaTri2)*1;
             arrNumber.splice(number2,1,giaTri1)*1;
            result += arrNumber.splice(arrNumber);
        }
    }
    document.getElementById("thongbao6").innerHTML = result;
}

/**
 * Bài tập 7: Sắp xếp mảng theo thứ tự tăng dần
 */
 document.getElementById("btnSapXep").onclick = function() { 
     var result = arrNumber.sort((a,b)=>  a-b);
    document.getElementById("thongbao7").innerHTML = result;
}

/**
 * Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng
 */
document.querySelector("#btnTimSoNguyenTo").onclick = function() {
    var soNguyenTo = 0;
    for(var i = 0; i <= arrNumber.length -1; i++) {
        if(arrNumber[i]%2 !== 0 || arrNumber[i] === 2 ) {
            soNguyenTo = arrNumber[i];
        }
        break;
    }
    document.getElementById("thongbao8").innerHTML = soNguyenTo;
}

/**
 * Bài tập 9: Nhập thêm 1 mảng số thực. đếm xem có bao nhiêu số nguyên
 */

document.querySelector("#btnDemSoNguyen").onclick = function() {
    var soThuc = [2.3,-60.5,14,-33.2,48,-15.8];
    var newArrNumber = soThuc.concat(arrNumber);
    console.log(newArrNumber);
    var count = 0;
    for(var i = 0; i <= newArrNumber.length -1; i++) {
        if(newArrNumber[i]%1 === 0) {
            count++;
        }
    }
    document.getElementById("thongbao9").innerHTML = count;
}

/**
 * Bài tập 10: So sánh số lượng sô dương và số lượng số âm
 */
document.querySelector("#btnSoSanh").onclick = function() {
    var soAm = 0;
    var soDuong = 0;
    var ketQua = 0;
    for(var i = 0; i <= arrNumber.length -1; i++) {
        if(arrNumber[i] >= 0) {
            soDuong++;
        }
    }
    for(var i = 0; i <= arrNumber.length -1; i++) {
        if(arrNumber[i] < 0) {
            soAm++;
        }
    }
    if(soDuong > soAm) {
        ketQua = "Số lượng số dương là: " + soDuong + " nhiều hơn số lượng số âm là " + soAm;
    } else {
        ketQua = "Số lượng số âm là: " + soAm + " nhiều hơn số lượng số dương là " + soDuong;
    }
    document.getElementById("thongbao10").innerHTML = ketQua;
}