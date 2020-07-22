 import {toNumber} from 'lodash';


 export function extractNumberInAText(text:string): number{
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
   const numberText = values[0];
   const removeFullStop = val=>(val.endsWith(".")? val.slice(0,-1): val);
   const isNumber = val => numericalValue.test(val);
   const numberString  = numberText.split(" ")
                                  .map(value=>removeFullStop(value.trim()))
                                  .find(isNumber);
   return toNumber(numberString);

 }


