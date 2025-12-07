// getter and setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  // Set Balance
  //   addBalance(balance: number) {
  //     this.userBalance = this.userBalance + balance;
  //   }

  // Using Setter
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  // get korbo
  //   getBalance() {
  //     return this.userBalance;
  //   }

  // getter method
  get getBalance() {
    return this.userBalance;
  }
}

const mezbaVaiAccount = new BankAccount(111, "Mezba", 200);

// mezbaVaiAccount.addBalance(30);
// console.log(mezbaVaiAccount.getBalance());

mezbaVaiAccount.addBalance = 100;
console.log(mezbaVaiAccount);
