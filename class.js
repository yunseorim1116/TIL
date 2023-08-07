class Score {
  constructor(math, english, korean) {
    this.math = math;
    this.english = english;
    this.korean = korean;
  }

  sum() {
    return this.math + this.english + this.korean;
  }

  avg() {
    const sum = this.sum();
    console.log("평균 점수 (3과목) : " + sum / 3);
  }
}

//자식 클래스
class Student extends Score {
  constructor(math, english, korean) {
    super(math, english, korean, Student.a);
    this.a = 1;
  }

  avg() {
    //super.sum()을 통해 부모 클래스의
    //메소드 접근
    const sum = super.sum() + this.a;
    console.log("평균 점수 (4과목): " + sum / 4);
  }
}

const stu = new Student(90, 90, 100, 100);
console.log(stu);
stu.avg();

// 클래스 데이터 접근 예제
// class Person {
//   constructor() {
//     this._name = "KIM";
//   }

//   static get name() {
//     return this._name;
//   }
// }

// // 1. 정적 메서드를 이용해 클래스 데이터 가져오기 - 실패
// console.log(Person.name); // undefined

// // 2. 클래스 인스턴스를 선언해 클래스 데이터 가져오기 - 실패
// const person = new Person();
// console.log(person.name); // undefined

// class MyMath {
//   static PI = 22 / 7; // static field
//   static #num = 10; // static private
//   static increment() {
//     //static method
//     return ++MyMath.#num;
//   }
// }

// const a = new MyMath();
// console.log(a);
