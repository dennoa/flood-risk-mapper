export class RiskCode {
  private code: string;
  
  constructor(code: string) {
    this.code = code;
  }

  public static None = new RiskCode('N');
  public static Low = new RiskCode('L');
  public static Medium = new RiskCode('M');
  public static High = new RiskCode('H');
  
  private static map = {
    N: RiskCode.None,
    L: RiskCode.Low,
    M: RiskCode.Medium,
    H: RiskCode.High
  };

  public static toRiskCode(code: string): RiskCode {
    return this.map[code];
  }

}