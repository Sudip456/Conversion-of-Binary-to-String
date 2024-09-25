let userinp = prompt ("enter any string ");
// it convert string into ASCII and then into Binary
function main (user){
let arr=Array.from(user).reduce ((pre,curr)=>{
  let conver=curr.charCodeAt(0).toString(2).padStart(8,'0');
  return pre+conver+'';
},'').trim()
  // it split the code into group of 8 bit and returns an array
let finalarr=arr.match(/.{1,8}/g);
console.log("the encoded value is ",finalarr)
  // it generally returns only code
// console.log(arr);
};
main(userinp);
