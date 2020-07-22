import {extractNumberInAText} from './numericals';

test('finds numerical value in a text', async () => {
    expect(extractNumberInAText("5678900")).toEqual(5678900);
    expect(extractNumberInAText("   567400 ")).toEqual(567400);
    expect(extractNumberInAText("32000.")).toEqual(32000);
    expect(extractNumberInAText("The pump is 536 deep underground.")).toEqual(536);
    expect(extractNumberInAText("45893 is the highest mountain in here")).toEqual(45893);
    expect(extractNumberInAText("The lottery was for 5000000")).toEqual(5000000);
    expect(extractNumberInAText("lets win 100 quid")).toEqual(100);
    expect(extractNumberInAText("can get end of line number 123.")).toEqual(123);

})


 test('it throws number invalid error if there is no valid number in text', async () => {
      expect(()=>extractNumberInAText(null)).toThrow("number invalid");
      expect(()=>extractNumberInAText(" I received 23 456,9 KGs.")).toThrow("number invalid");
      expect(()=>extractNumberInAText(" ")).toThrow("number invalid");
      expect(()=>extractNumberInAText("there is no number in here")).toThrow("number invalid");
      expect(()=>extractNumberInAText("Variables reported as having missing type #65678.")).toThrow("number invalid");;
      expect(()=>extractNumberInAText("test number 2,4563 ")).toThrow("number invalid");
      expect(()=>extractNumberInAText("it was 2/3 of the city")).toThrow("number invalid");expect(()=>extractNumberInAText("100% true")).toThrow("number invalid");
      expect(()=>extractNumberInAText(".1234")).toThrow("number invalid");
      expect(()=>extractNumberInAText("when there is space between numbers 1234 34")).toThrow("number invalid");
      expect(()=>extractNumberInAText("when there is stop between numbers 1234.123")).toThrow("number invalid");
      expect(()=>extractNumberInAText("when there is comma between numbers 1234,123 KG")).toThrow("number invalid");
      expect(()=>extractNumberInAText("when there is a special symbol 1234%34")).toThrow("number invalid");
      expect(()=>extractNumberInAText("not valid when there is large gap 123 34221 between numbers ")).toThrow("number invalid");
 })

