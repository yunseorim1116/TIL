class User {
  private username: string;
  constructor(username: string) {
    this.username = username;
  }
  getUserName() {
    return this.username;
  }
}

class BlogPost {
  constructor(private author: User, id: string) {}
  //   private getAuthor() {
  //     return this.author;
  //   }
  //원래 여기서 this.author 을 get 했는데

  getAuthorName() {
    return this.author.getUserName();
  }
  //인자로 받아온 author 에서 데이터를 get 하게 변경
}

//Account 로직

// class Acount {
//   private deposit(to: string, amount: number) {
//     let accountId = database.find(to);
//     database.update(accountId, { $inc: { balance: amount } });
//   }

//   transfer(amount: number, from: string, to: string) {
//     this.deposit(from, -amount);
//     this.deposit(to, amount);
//   }
// }

class Transfer {
  constructor(from: string, amount: number) {
    this.depositHelper(from, -amount);
  }

  private depositHelper(to: string, amount: number) {
    let accountId = database.find(to);
    database.updateOne(accountId, { $inc: { balance: amount } });
  }

  deposit() {
    this.depositHelper(to, this.amount);
  }
}

//출금 없이 입금 될 수 없음을 보증
//수취인(to) 를 인자로 deposit 호출을 잊어버리면 돈이 그냥 사라질 수 있다.
//따라서 입금도 반드시 발생하도록 이 클래스를 다른 클래스로 감쌀 수도 있다.
