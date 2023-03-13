export class SSOGenerator {
  private static CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  constructor() {}
  public static Generate() {
    let totString = "BLAZESSO-";
    new Array(30)
      .fill(0)
      .forEach(
        () =>
          (totString += this.CHARACTERS.at(
            Math.floor(Math.random() * this.CHARACTERS.length)
          ))
      );
    return totString;
  }
}
