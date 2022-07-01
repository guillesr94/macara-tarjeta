let inputNumber = document.getElementById("inputNumber");
let inputDate = document.getElementById("inputDate");
let inputCode = document.getElementById("inputCode");
let numbersAllowed = ["0","1","2","3","4","5","6","7","8","9"];
let  maskNumber=`$$$$-$$$$-$$$$-$$$$`;
let  maskDate=`$$/$$`;
let  maskCode=`$$$`;
let arrNumber=[];
let arrDate=[];
let arrCode=[];

inputNumber.addEventListener("keydown",(e)=>{
  if(e.key=="Backspace"){
    arrNumber.pop()
  }
  if(e.key=="Tab"){
    return
  }
  e.preventDefault()
  handleInput(maskNumber,e.key,arrNumber);
  inputNumber.value = arrNumber.join("")
})


inputDate.addEventListener("keydown",(e)=>{
  if(e.key=="Backspace"){
    arrDate.pop()
  }
  if(e.key=="Tab"){
    return
  }
  e.preventDefault()
    handleInput(maskDate,e.key,arrDate);
    inputDate.value = arrDate.join("")
})

inputCode.addEventListener("keydown",(e)=>{
  if(e.key=="Backspace"){
    arrCode.pop()
  }
  if(e.key=="Tab"){
    return
  }
  e.preventDefault()
  handleInput(maskCode,e.key,arrCode);
  inputCode.value = arrCode.join("")
})

function handleInput(mask,key,arr){
    if(numbersAllowed.includes(key) && arr.length<=mask.length-1){
      if(mask[arr.length]=="/" || mask[arr.length]=="-"){
        arr.push(mask[arr.length])
      }arr.push(key)
    }
}






















// let inputNumber = document.getElementById("inputNumber");
// let inputDate = document.getElementById("inputDate");
// let inputCode = document.getElementById("inputCode");

// let maskNumber = "####-####-####-####";
// let maskDate = "##/##";
// let maskCode = "###";
// let numbersAllowed = ["0","1","2","3","4","5","6","7","8","9"];

// let current = "";
// let cardNumber=[];
// let dateNumber=[];
// let codeNumber=[];

// inputNumber.addEventListener("keydown",(e)=>{
//   if(e.key == "Tab"){
//     return;
//   }
//   if(e.key=="Backspace"){
//     codeNumber.pop()
//   }
//   e.preventDefault();
//   handleInput(maskNumber,e.key,cardNumber);
//   inputNumber.value = cardNumber.join("");
// });

// inputDate.addEventListener("keydown",(e)=>{
//     if(e.key == "Tab"){
//       return;
//     }
//     if(e.key=="Backspace"){
//       dateNumber.pop()
//     }
//     e.preventDefault();
//     handleInput(maskDate,e.key,dateNumber);
//     inputDate.value = dateNumber.join("");
// });

// inputCode.addEventListener("keydown",(e)=>{
//   if(e.key == "Tab"){
//     return;
//   }
//   if(e.key=="Backspace"){
//     codeNumber.pop()
//   }
//   e.preventDefault();
//   handleInput(maskCode,e.key,codeNumber);
//   inputCode.value = codeNumber.join("");
// });

// function handleInput(mask,key,arr){
//   if(numbersAllowed.includes(key) && arr.length<= mask.length-1){
//     if(mask[arr.length]=="-"||mask[arr.length]=="/"){
//       arr.push(mask[arr.length])
//       console.log(mask[arr.length])
//     }else{
//       arr.push(key)
//       console.log(arr)
//     }
//   }
// }










