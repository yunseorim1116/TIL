class Province {
  constructor(doc) {
    this.name = doc.name;
    this.producers = []; //데이터를 담을 배열
    this.totalProduction = 0;
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
  constructor(aProvince, data) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this.production = data.production || 0;
  }

  get name() {
    return this._name;
  }
  get cost() {}
}
