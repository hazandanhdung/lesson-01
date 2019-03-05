// Lesson 1

/**
 * Giới thiệu tổng quan và cách cài đặt
 */


/**
 *  + JavaScript là ngôn ngữ kịch bản hướng đối tượng đa nền tảng được sử dụng *
 *  để làm cho các trang web tương tác 
 *  (ví dụ: có hình động phức tạp, nút * có thể nhấp, menu bật lên, v.v.)
 *  + Ngoài ra còn có các phiên bản JavaScript phía máy chủ nâng cao hơn như Node.Js
 *  cho phép bạn thêm nhiều chức năng hơn vào trang web thay vì chỉ tải xuống các tệp
 *  (chẳng hạn như cộng tác trong thời gian thực giữa nhiều máy tính). 
 *  Trong môi trường máy chủ (ví dụ: trình duyệt web)
 * , JavaScript có thể được kết nối với các đối tượng trong môi trường của nó để 
 * cung cấp quyền kiểm soát theo chương trình đối với chúng. 
 * (
 * - Client-side JavaScript  
 * - Server-side JavaScript 
 * )
 * + Đặc tả : JavaScript được chuẩn hóa tại Ecma International - 
 *  hiệp hội châu Âu về tiêu chuẩn hóa hệ thống thông tin và truyền thông 
 * (ECMA trước đây là từ viết tắt của Hiệp hội các nhà sản xuất máy tính châu Âu) 
 * để cung cấp một ngôn ngữ lập trình quốc tế được chuẩn hóa dựa trên JavaScript
 * 
 */ 
 /**
  * Basic
  */
  //Comment 
  
  // Diễn giải, chú thích, bình luận 1 dòng 

  /**
   * Diễn giải, chú thích, bình luận nhiều dòng
   */

   // Variable 

// khởi tạo một biến 
// + var;
/**
 * Khởi tạo biến theo đên, chức năng của biến. Tượng trưng cho các giá trị được gắn 
 * và phải tuân thủ quy tắc nhất định. Mã định danh JavaScript phải bắt đầu bằng một chữ cái, dấu gạch dưới (_) hoặc ký hiệu đô la ($); các ký tự tiếp theo cũng có thể là chữ số (0-9).
 *  Vì JavaScript phân biệt chữ hoa chữ thường, 
 * các chữ cái bao gồm các ký tự "A" đến "Z" (chữ hoa) và các ký tự "a" đến "z" (chữ thường).
 */

 /**
  * Data types
  */
  /**
   * Tròng javascript có 6 kiểu dữ liệu chính : 
   * + Boolean : "true" and "false"
   * + NULL : rỗng 
   * + undefined : Không xác định
   * + String : Chuỗi, dạng chữ .
   * + Number : Kiểu số
   * + Object : đối tượng, kiểu đặc biệt 
   */

//vd :
// type number
var a = 10;
console.log (typeof a);
//type string
var b = "Hello";
console.log(typeof b);
//type undefined
var c;
console.log(typeof c);
//type boolean
var d = true;
console.log(typeof d)

//type NULL;
var e = null;
console.log(typeof e);

if(d == e){
    console.log("true")
} else{
    console.log("false");
}
// sự khác nha giữa hai giá trị null và undefined . Null được gán với giá trị là giỗng, còn undefined thì không có giá trị

// type object, array 
var person = {
    firstName : "Dung",
    lastName: "Nguyen",
    age : 24,
    handSome : true,
    add : "Toan Thang- Kim Dong- Hung Yen",
    //method 
    getFullName : function(){
        return this.firstName + this.lastName;
    }
}
console.log(person.getFullName());

// type array

var listName  = ["Viet" , "Huyen", "Cuong"];
console.log(listName);
console.log(listName[0]);


/**
 * Arithmetic Operators
 *  +  
 *  - 
 *  *
 *  / 
 * **
 *  % 
 *  ++
 *  --
 */

// Bài tập: Khai báo biến và thực hiện các phép tình vừa liệt kê

// JavaScript String Operators ( cộng chuỗi )

var vd1 = "Dung";
var vd2 = "Nguyen";

//Bài tập Cộng chuỗi của 2 biến trên


/**
 * JavaScript Comparison Operators (Toán tử so sánh )
 * ==  // bằng với, tương đương với 
 * === //  ""             ""             so sánh nghiêm ngặt hơn, cụ thể là so sánh cả kiểu dữ liệu
 * != // không bằng 
 * !==      ""      cụ thể hơn, so sánh cả kiểu dữ liệu
 * > // lớn hơn 
 * < // nhỏ hơn
 * >= // lớn hơn or bằng 
 * <= // nhỏ hơn or bằng 
 * ?  // toán tử điều kiện 3 ngôi thường được dùng tắt cho biểu thức điều kiện if 
 */
/**
 *  Toán tử logic
 * 
 * &&	logical and
 * ||	logical or
 *  !	logical not
 * &	AND
 * |	OR
 * ~	NOT
 * ^	XOR
 */


 // bài tập : dựa vào các toán tử đã nêu ở trên so sánh 2 giá trị sau (trừ toán tử 3 ngôi : ?)
var demo = 10;
var demo1 = 20;


/**
 * method String  :
 *
 * Tìm hiểu thêm và lấy ví dụ cho các method string sau
 *  + length
 *  + indexOf()
 *  + lastIndexOf()
 *  + concat()
 *  + slice()
 *  + toUpperCase()
 *  + trim()
 *
 */


/**
 * Method number tìm hiểu thêm và lấy ví dụ cho các method number sau :
 *  valueOf()
 *  isInteger()
 * toString()
 * 
 * / 

/**
 * Cú pháp hàm JavaScript
    Hàm JavaScript được xác định với functiontừ khóa, theo sau là tên , theo sau là dấu ngoặc đơn () .

    Tên hàm có thể chứa chữ cái, chữ số, dấu gạch dưới và ký hiệu đô la (cùng quy tắc với biến).

    Các dấu ngoặc đơn có thể bao gồm các tên tham số được phân tách bằng dấu phẩy: 
    ( tham số1, tham số2, ... )

    Mã được thực thi, theo hàm, được đặt bên trong dấu ngoặc nhọn: {}

  
    Các tham số hàm được liệt kê bên trong dấu ngoặc đơn () trong định nghĩa hàm.

    Các đối số hàm là các giá trị mà hàm nhận được khi nó được gọi.

    Bên trong hàm, các đối số (các tham số) hoạt động như các biến cục bộ.
 * 
 * 
 * 
 * 
 */
function name(parameter1, parameter2, parameter3) {
    // return
    }

  /**
   * Khi JavaScript đạt đến một return câu lệnh, hàm sẽ dừng thực thi.

        Nếu hàm được gọi từ một câu lệnh, JavaScript sẽ "trở lại" để thực thi mã sau câu lệnh gọi.

        Các hàm thường tính một giá trị trả về . Giá trị trả về được "trả lại" cho "người gọi":
   *  
   */  
        var x = myFunction(4, 3);   // Function is called, return value will end up in x

        function myFunction(a, b) {
            return a * b;             // Function returns the product of a and b
        }
  //12