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
  a = 1;
  constructor(math, english, korean, science) {
    super(math, english, korean, Student.a);
    this.science = science;
  }

  avg() {
    //super.sum()을 통해 부모 클래스의
    //메소드 접근
    const sum = super.sum() + this.science;
    console.log("평균 점수 (4과목): " + sum / 4);
  }
}

const stu = new Student(90, 90, 100, 100);
console.log(stu);
stu.avg();
