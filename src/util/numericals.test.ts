import {getNumericalValues} from './numericals';

test('finds numerical value in a text', async () => {
    expect(getNumericalValues("5678900")).toEqual(5678900);
    expect(getNumericalValues("   567400 ")).toEqual(567400);
    expect(getNumericalValues("32000.")).toEqual(32000);
    expect(getNumericalValues("The pump is 536 deep underground.")).toEqual(536);
    expect(getNumericalValues("45893 is the highest mountain in here")).toEqual(45893);
    expect(getNumericalValues("The lottery was for 5000000")).toEqual(5000000);
    expect(getNumericalValues("lets win 100 quid")).toEqual(100);
    expect(getNumericalValues("can get end of line number 123.")).toEqual(123);

})


 test('it throws number invalid error if there is no valid number in text', async () => {
      expect(()=>getNumericalValues(" I received 23 456,9 KGs.")).toThrow("number invalid");
      expect(()=>getNumericalValues(" ")).toThrow("number invalid");
      expect(()=>getNumericalValues("there is no number in here")).toThrow("number invalid");
      expect(()=>getNumericalValues("Variables reported as having missing type #65678.")).toThrow("number invalid");;
      expect(()=>getNumericalValues("test number 2,4563 ")).toThrow("number invalid");
      expect(()=>getNumericalValues("it was 2/3 of the city")).toThrow("number invalid");expect(()=>getNumericalValues("100% true")).toThrow("number invalid");
      expect(()=>getNumericalValues(".1234")).toThrow("number invalid");
      expect(()=>getNumericalValues("when there is space between numbers 1234 34")).toThrow("number invalid");
      expect(()=>getNumericalValues("when there is stop between numbers 1234.123")).toThrow("number invalid");
      expect(()=>getNumericalValues("when there is comma between numbers 1234,123 KG")).toThrow("number invalid");
      expect(()=>getNumericalValues("when there is a special symbol 1234%34")).toThrow("number invalid");
      expect(()=>getNumericalValues("can work when there is large gap 123 34221")).toThrow("number invalid");
 })

