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
