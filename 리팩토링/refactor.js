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
    return this._demandValue - this.demandCost; //총 매출 - 수요비용
  }

  get demandValue() {
    //수요 가치 // 총 매출
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
        if (remainingDemand <= 0) {
          return; // 남은 수요가 없으면 더 이상 계산하지 않고 종료
        }
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

//demandCost 로직 해석

// remainingDemand 변수는 초기에 지역의 전체 수요(demand) 값을 가지도록 설정됩니다. 처음에는 아직 충족되지 않은 수요를 나타냅니다.

// result 변수는 초기에 0으로 설정됩니다. 이 변수는 최종적으로 계산된 수요 비용을 저장하는데 사용됩니다.

// 이제 각 생산자(Producer)들에 대해 다음과 같은 과정을 수행합니다.

// this.producers 배열은 .sort() 메서드를 사용하여 cost 속성을 기준으로 오름차순으로 정렬됩니다. 즉, 비용이 낮은 순서로 생산자들이 정렬됩니다.

// .forEach() 메서드를 사용하여 각 producers의 요소를 반복합니다.

// contribution 변수는 현재 생산자(p)의 생산량(p.production)과 남은 수요(remainingDemand) 중 더 작은 값을 가집니다. 즉, 현재 생산자가 충족시킬 수 있는 최대 수요를 의미합니다. 이 contribution은 해당 생산자가 만족시킬 수 있는 수요의 양을 나타냅니다.

// remainingDemand에서 contribution을 빼서 남은 수요를 계산합니다. 이렇게 함으로써 현재 생산자로 인해 이미 만족시킨 수요를 제외하고, 남은 수요를 업데이트합니다. 이는 현재 생산자로 인해 만족되지 못한 수요를 나타냅니다.

// result에 현재 생산자의 cost와 contribution를 곱한 값을 더하여 현재 생산자로 인해 발생한 수요 비용을 계산하고 누적합니다. 이렇게 함으로써 모든 생산자들의 비용을 누적하여 최종적으로 지역에서 수요를 충족시키기 위해 필요한 총 비용을 계산하게 됩니다.

// 모든 생산자를 순회하면서 수요 비용을 누적한 후, 함수가 종료됩니다.
