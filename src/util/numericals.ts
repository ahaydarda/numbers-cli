 import {toNumber} from 'lodash';

// export function getNumericalValues2(text:string): number{
//   const values = text.split(" ");
//   const onlyNumericalRegExp =  new RegExp(/^\d+$/);
//   const numericalValues = values.filter(value=> onlyNumericalRegExp.test(value)).map(item=>toNumber(item));
//   let isValid =   numericalValues && numericalValues.length===1;
//   if(!isValid){
//     throw Error("number invalid")
//   }
//   return  numericalValues[0];
// }

 export function getNumericalValues(text:string): number{
   const startOfNumericalValue  = /((^|\D)\s+|^)/;
   const numericalValue = /\d+/;
   const endOfNumericalValue =  /(\s+($|[^.,]\D+)|$|[.]$)/;
   const fullPattern = new RegExp(startOfNumericalValue.source
     + numericalValue.source
     + endOfNumericalValue.source);
   const values = fullPattern.exec(text);

   if(!values || values.length === 0){
     throw Error("number invalid")
   }
   const value = values[0].split(" ").map(value=> {
     const trimmed = value.trim();
     return trimmed.endsWith(".")?  trimmed.slice(0,-1): trimmed;
   }).filter(item=>numericalValue.test(item))
     .map(item=>toNumber(item))[0];
   return value;
 }


