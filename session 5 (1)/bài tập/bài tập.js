/// bài 1
//Viết một đoạn mã JS cho người dùng nhập vào một chuỗi số ngăn cách nhau bởi dấu phẩy. 
//Tính tổng của các số đó và in ra ngoài màn hình console (hoặc alert)

// let a = prompt("nhập một chuỗi số ngăn cách bằng dấu phẩy").split(",")
// let b = 0
//  for(i = 0; i <= a.length - 1; i = i + 1){
//     b = b + Number(a[i])
//  }
// console.log(b);


// bài 2
// Viết một đoạn mã JS cho người dùng nhập vào một chuỗi số được ngăn cách nhau bởi dấu phẩy. 
//Tìm số nhỏ nhất và in số đó ra màn hình console (hoặc alert)


// let a = prompt("nhập một chuỗi số ngăn cách bằng dấu phẩy").split(",");
// let min = [];
// for( i = 0; i <= a.length - 1; i = i + 1){
//     min.push(a[i])
// }
// min.sort();
// console.log(min.sort());
// console.log(min[0]);


//BÀI 3: Tạo một mảng gồm ít nhất 5 số, sau đó cho người dùng nhập vào số cần tìm kiếm ở trong mảng. 
//Thực hiện tìm kiếm và thông báo cho người dùng chỉ số (index) của phần tử đó nếu tìm thấy,
//nếu không cũng vẫn thông báo với người dùng
//const arr = [3, 4, 6, -9, 10, -88, 2];

// let yes = [3, 4, 6, -9, 10, -88, 2]
// let what = Number(prompt("nhập số bạn muốn tìm"));
// c,vs;

//         yes.push(what);
//         for (i = 0; i <= yes.length - 1; i = i + 1) {
//             let what = yes[i];

//          } 
//       }  console.log(yes);

// bài 4: Mô phỏng ứng dụng todo list, tạo sẵn một mảng todoList có sẵn 2 phần tử

//const todoList = [“Go to bed at 11pm”, “Do homework at 8pm”];

// Sử dụng những kiến thức thao tác với mảng (C/R/U/D),
// hỏi người dùng command mà người dùng muốn nhập vào thông qua 4 chữ cái C/R/U/D.
// C — Create: 
// Cho người dùng nhập vào todo mới
// Sau đó in ra toàn bộ phần tử có trong todoList theo dạng
// 1. Go to bed at 11pm
// 2. Do homework at 8pm 
// 3. New todo

// R — Read:
// In ra toàn bộ phần tử có trong todoList giống phần C
// U — Update:
// Hỏi người dùng vị trí phần tử muốn update
// Hỏi người dùng nội dung muốn update → tiến hành update
// Sau đó in ra toàn bộ phần tử có trong todoList giống phần C
// D — Delete:
// Hỏi người dùng vị trí phần tử muốn delete
// Tiến hành delete
// Sau đó in ra toàn bộ phần tử có trong todoList giống phần C


// const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// state = true;

// let yes = prompt("nhập 4 chữ cái: C/ R/ U/ D/");
// if (yes === "C") {
//     let what = prompt("mời bạn nhập todo mới");
//     todoList.push(what);
//     for (i = 0; i <= todoList.length - 1; i = i + 1) {


//     }
//     console.log(i, todoList);
// }

// ///R — Read:
// // In ra toàn bộ phần tử có trong todoList giống phần C

// else if (yes === "R") {

//     for (i = 0; i <= todoList.length - 1; i = i + 1) {
//     } console.log(i, todoList);

// }

// //U — Update:
// // Hỏi người dùng vị trí phần tử muốn update
// // Hỏi người dùng nội dung muốn update → tiến hành update
// // Sau đó in ra toàn bộ phần tử có trong todoList giống phần C

// else if (yes === "U") {
//     let your = Number(prompt("mời bạn nhập vị trí phần tử muốn update"));
//     let user = prompt("mời bạn nhập nội dung muốn update");
//     todoList[your] = user;
//     for (i = 0; i <= todoList.length - 1; i = i + 1){

//     }    console.log(i, todoList);  
// }
// //D — Delete:
// // Hỏi người dùng vị trí phần tử muốn delete
// // Tiến hành delete
// // Sau đó in ra toàn bộ phần tử có trong todoList giống phần C

// else if(yes === "D"){
//      let no = Number(prompt("nhập vị trí của todo muốn delete"));
//      todoList.splice(no);
//      for(i = 0; i <= todoList.length-1; i = i + 1){
                 
//     }console.log(i, todoList)
// }    

//bài 5:

// let a = prompt('enter a squence of number, separated bay commas (,)').split(',');
// let b = [];
// for(let i = 0; i < a.length; i++) {
//     b.push(Number(a[i]));
// }
// console.log(b);
// let min_val = Math.min.apply(null, b);
// console.log("min= ",min_val);
// // 0,1,2,3,4

             
 // bài 6: Viết một đoạn script cho phép người dùng nhập vào 1 dãy tên ngăn cách nhau bởi dấu phẩy. 
 //Tạo một mảng mới gồm các phần tử con trong mảng được bọc bởi dấu <>. 
 //Sau đó sử dụng alert in ra chuỗi giống như demo bên dưới.

//  let love = prompt("mời bạn nhập 1 dãy tên ngăn cách nhau bởi dấu phẩy").split(",");
//  for(let i = 0; i <= love.length-1; i = i + 1){
//     love[i] = `<${love[i]}>`
//  }
//  alert(love.join(","))


//bài 7: Viết một đoạn script cho người dùng nhập vào một dãy số ngăn cách nhau bởi dấu phẩy. 
//Tạo một mảng mới chỉ chứa những phần tử lẻ có trong dãy số đó. 
//Sau đó sử dụng câu lệnh alert để biểu diễn chuỗi giống trong demo bên dưới

// let nail = prompt("mời bạn nhập 1 dãy số ngăn cách nhau bởi dấu phẩy").split(",");
// let vail = []
// for(let i = 0; i <= nail.length - 1; i = i + 1 ){
//    if (nail[i] % 2 !== 0){
//     vail.push(nail[i])
     
//    }

// } alert(vail);

///bài 8:

// let a = prompt('enter a sequence of names');
// let b = a.split(',');
// let c =[];
// for (let i = 0; i < b.length; i++) {
//     c.push(`<${b[i]}>`);
// }
// console.log(`${b}=>  ${c}`);


//bài 9: Viết một đoạn mã JS cho người dùng nhập vào một chuỗi bất kỳ. 
//In ra chuỗi đảo ngược của chuỗi người dùng nhập vào

// Input: str = “Hello”
// Expected output:
// olleH
 
// let your = prompt("mời bạn nhập chuỗi bất kì");
// let b = String();
//  for(let i = your.length - 1; i >= 0; i = i - 1 ){
//     b = b + your[i];
// }
//     alert(b);

    // BÀI 10: Viết một đoạn mã JS cho người dùng nhập vào một chuỗi bất kỳ. 
    //In ra chuỗi viết hoa toàn bộ ký tự đầu tiên của từng từ trong chuỗi đó.
// Input: str = “hello, My NAme is TOny”
// Expected output:
// Hello, My Name Is Tony


//  let manni = prompt("nhập vào chuỗi bất kì").toLowerCase().split(" ")
// let manny = [];
// for (let i = 0; i <= manni.length - 1; i++){
//     a = manni[i].split("")
//     a[0] = a[0].toUpperCase();
//     a = a.join("");
//     manny.push(a);
// }
// console.log(manny.join(""));

// bài 12
// 
// let tram = ["một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sau trăm", "bảy trăm", "tam trăm", "chín trăm"];
// let chuc = ["mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sau mươi", "bảy mươi", "tam mươi", "chín mươi"];
// let donVi = ["một", "hai", "ba", "bốn", "năm", "sau", "bảy", "tam", "chín"];

// let inPut = prompt('nhap tiem').split('');
// let outPut = [];

// for (i=0; i<tram.length; i++){
//     if(inPut[0]==i){
//         outPut.push(tram[i]);
//     }
// }
// for (i=0; i<chuc.length; i++){
//     if(inPut[1]==i){
//         outPut.push(chuc[i]);
//     }
// }
// for (i=0; i<donVi.length; i++){
//     if(inPut[2]==i){
//         outPut.push(donVi[i]);
//     }
// }
// console.log(outPut.join(' '));






































































