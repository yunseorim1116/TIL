class Website {
  constructor(private url: string) {}

  getUsername() {
    return this.url;
  }
}

const a = new Website("aa");
console.log(a); // 이제 프로퍼티에 접근하는 것은 가능하지만, url 프로퍼티에 직접 접근할 수 없습니다.
