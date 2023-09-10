//1. 인터페이스 생성
interface SumProcessor {
  processElement(e: number): void;
  getAccumulator(): number;
}

//2. 구현
class TmpName implements SumProcessor {
  private accumulator: number = 0;
  processElement(e: number) {
    // Implement the logic to process the element and update the accumulator
    this.accumulator += e; // For example, adding the element to the accumulator
  }

  getAccumulator() {
    return this.accumulator;
  }
}

class ArraySum {
  private processor: SumProcessor;

  constructor(accumulator: number) {
    this.processor = new TmpName(accumulator);
  }
}

//변경후 최종 코드
class BatchProcessor {
  constructor(private processor: SumProcessor) {}

  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      this.processor.processElement(arr[i]);
    }
    return this.processor.getAccumulator();
  }
}

interface ElementProcessor {
  processElement(e: number): void;
  getAccumulator(): number;
}

class MinimumProcessor implements ElementProcessor {
  constructor(private accumulator: number) {}

  getAccumulator() {
    return this.accumulator;
  }

  processElement(e: number) {
    if (this.accumulator > e) {
      this.accumulator = e;
    }
  }
}
