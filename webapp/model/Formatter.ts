
export default class Formatter{
    /*
    * Convert the currency
    */
    public convertCurrency(value: string, fixedLength = 2): string {
        let converted = parseFloat(value);
        let result = converted.toFixed(fixedLength);
        return result;
    }
 

}