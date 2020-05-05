const func = () =>{
    console.log('Hello after 4 seconds');
};
setTimeout(func,4*1000);
// setTimeout( // is a req not comment
//     ()=>console.log("hello after 0.5 sec,Maybe!"),500
// );
// for(let i=0;i<ie10;i++){
//     //block node synchronously
// }