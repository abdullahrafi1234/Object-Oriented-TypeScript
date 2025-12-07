// access ==> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  //   private userBalance: number;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this.userBalance = this.userBalance;
  }
}

const mezbaVaiAccount = new BankAccount(111, "Mezba", 200);

// mezbaVaiAccount.userId = 222 // readonly

mezbaVaiAccount.addBalance(100);
mezbaVaiAccount.addBalance(30);
console.log(mezbaVaiAccount);
