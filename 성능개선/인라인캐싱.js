(() => {
  const han = { firstname: "Han", lastname: "Solo" };
  const luke = { firstname: "Luke", lastname: "Skywalker" };
  const leia = { firstname: "Leia", lastname: "Organa" };
  const obi = { firstname: "Obi", lastname: "Wan" };
  const yoda = { firstname: "", lastname: "Yoda" };
  const people = [han, luke, leia, obi, yoda, luke, leia, obi];
  const getName = (person) => person.lastname;

  console.time("engine1");
  for (var i = 0; i < 1000 * 1000 * 1000; i++) {
    getName(people[i % 8]);
  }
  console.timeEnd("engine1");
})();

(() => {
  const han = { firstname: "Han", lastname: "Solo", spacecraft: "Falcon" };
  const luke = { firstname: "Luke", lastname: "Skywalker", job: "Jedi" };
  const leia = { firstname: "Leia", lastname: "Organa", gender: "female" };
  const obi = { firstname: "Obi", lastname: "Wan", retired: true };
  const yoda = { lastname: "Yoda" };
  const people = [han, luke, leia, obi, yoda, luke, leia, obi];
  const getName = (person) => person.lastname;

  console.time("engine2");
  for (var i = 0; i < 1000 * 1000 * 1000; i++) {
    getName(people[i % 8]);
  }
  console.timeEnd("engine2");
})();

(() => {
  const han = {
    firstname: "Han",
    lastname: "Solo",
    spacecraft: "Falcon",
    job: "",
    retired: false,
  };
  const luke = {
    firstname: "Luke",
    lastname: "Skywalker",
    job: "Jedi",
    spacecraft: "",
    retired: false,
  };
  const leia = {
    firstname: "Leia",
    lastname: "Organa",
    gender: "female",
    spacecraft: "Falcon",
    job: "",
    retired: false,
  };
  const obi = {
    firstname: "Obi",
    lastname: "Wan",
    retired: true,
    spacecraft: "Falcon",
    job: "",
    retired: false,
  };
  const yoda = {
    firstname: "Yoda",
    lastname: "Wan",
    retired: true,
    spacecraft: "Falcon",
    job: "",
    retired: false,
  };
  const people = [han, luke, leia, obi, yoda, luke, leia, obi];
  const getName = (person) => person.lastname;

  console.time("engine3");
  for (var i = 0; i < 1000 * 1000 * 1000; i++) {
    getName(people[i % 8]);
  }
  console.timeEnd("engine3");
})();

//Inline caching은 반복문 내의 객체 접근 시 ‘조회’작업을 생략하게 함으로써 성능향상을 도모하는 기법이다

// V8엔진의 인라인캐시는 최적화 과정에서 object의 attribute에 접근하는 부분에 실제 메모리 주소를 할당하여 lookup과정을 생략
// 즉 person.lastname의 attribute접근과정에서 해당 object에서 lastname이라는 attribute의 위치를 offset으로 저장하여, static하게 최적화 코드에 넣어버림
// 따라서 object의 구조가 동일해야 object를 구분하는 과정을 생략하고 offset을 적용하여 최적화에 용이하다.
