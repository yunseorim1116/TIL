class Engine {
  public EngineType: string;

  constructor(type: string) {
    this.EngineType = type;
  }
}

const a = new Engine("엔진 테스트");

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  public drive(): void {
    console.log(`${this.engine.EngineType}엔진으로 드라이브~`);
  }

  public breaks(): void {
    console.log(`${this.engine.EngineType}엔진으로 브레이크~`);
  }
}

const dieselEngine = new Engine("디젤");
const dieselCar = new Car(dieselEngine);
console.log(dieselCar);
dieselCar.drive(); // 디젤엔진으로 드라이브~

const electricEngine = new Engine("전기");
const electricCar = new Car(electricEngine);
electricCar.drive(); // 전기엔진으로 드라이브~
