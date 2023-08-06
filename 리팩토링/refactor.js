class Province {
  constructor(doc) {
    this.name = doc.name;
    this.producers = []; // 데이터를 담을 배열
    this.totalProduction = 0; // 총 생산량
    this.demand = doc.demand;
    this.price = doc.price;

    doc.producers.forEach((x) => {
      this.addProducer(new Producer(this, x));
    });
  }

  addProducer(arg) {
    this.producers.push(arg);
    this.totalProduction += arg.production;
  }

  get shortfall() {
    return this._demand - this.demandCost;
  }

  get profit() {
    return this._demandValue - this.demandCost;
  }

  get demandValue() {
    //수요 가치
    return this.staisfiedDemand * this.price; // 충족된 수요 * price
  }

  get staisfiedDemand() {
    //충족된 수요
    return Math.min(this._demand, this.totalProduction); // 수요와 전체 생산량중 더 작은 숫자 return
  }

  get demandCost() {
    //수요 비용
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production); // 작은 숫자 구하기
        remainingDemand -= contribution; // 구한 숫자 빼고
        result += contribution * p.cost; // result에 작은숫자, 현재 값 곱한 수 대입
      });

    return result;
  }
}

function sampleProvincData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}

class Producer {
  //this, x
  constructor(aProvince, data) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this.production = data.production || 0;
  }

  get name() {
    return this._name;
  }
  get cost() {
    return this._cost;
  }
}
