let userinp = prompt ("enter any string ");
function main (user){
let arr=Array.from(user).reduce ((pre,curr)=>{
  let conver=curr.charCodeAt(0).toString(2).padStart(8,'0');
  return pre+conver+'';
},'').trim()
let finalarr=arr.match(/.{1,8}/g);
console.log("the encoded value is ",finalarr)
// console.log(arr);
};
main(userinp);
