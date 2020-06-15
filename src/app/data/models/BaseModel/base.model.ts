export abstract class BaseModel {
  /**
   * func to convert param value
   * to rupee by / 100
   * @param paise 100 p = Rs. 1
   * @return {number}
   */
  convertToRupee(paise) {
    return paise / 100;
  }

  /**
   * func to convert param
   * value to pasie by * 100
   * @param rupee Rs. 1 = 100 pasie
   * @return {number}
   */
  convertToPaise(rupee) {
    return rupee * 100;
  }
}
