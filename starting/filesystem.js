// /* file system documentation read krna and  write file */

// const fs=require('fs');

// fs.writeFile("hii.txt","hellow how are you ",function(err)
// {
//      if(err)  console.error(err);
//      else console.log("done");

// })

// /* appened file --> add in file  */

// fs.appendFile("hii.txt","i m fine ",function(err)
// {
//      if(err)  console.error(err);
//      else console.log("done");


// })

// /* rename file  */

// fs.rename("hii.txt"," hello.txt",function(err)
// {
//      if(err)  console.error(err);
//      else console.log("done");


// })
// /* copy file  */


// /* copy file */
// // fs.copyFile("hello.txt", "./copy/kk.txt", function(err) {
// //     if (err) console.error(err);
// //     else console.log("done");
// // });

// /*  unlink --> file ko delete krna  */
// fs.unlink("hii.txt",function(err)
// {
//      if(err) console.error(err)
//      else console.log("done")
// });
const fs=require('fs');
/* rmdir--> delte empty folders  */

fs.rmdir("./copy",function(err)
{
     if(err) console.error(err);
     else console.log("removed");
});

