// it asks user to input binary code 
const userinp=prompt("Enter any encoded binary code");
function Result1(resu,userinp){
  // it checks whether user has given data or not
    if (userinp===""){        
        console.log("No input is given");
    }
    else{
        console.log("The encoded data is:",resu);
    };
//      };
// it converts binary code into ASCII and then into string and finally passes data to Result1
function main(user){
    let result=user.match(/.{1,8}/g);
    console.log(result);
    let finalresult=result.map(sut=>{
     let text=String.fromCharCode(parseInt(sut,2))
     return text;
    }).join('');
   console.log(finalresult);
   Result1(finalresult,userinp);
};
 main(userinp);
