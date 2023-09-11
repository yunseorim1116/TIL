interface SizeValue {}

class SmallValue implements SizeValue {}
class MidiumValue implements SizeValue {}
class LargeValue implements SizeValue {}

class TShirtSize {
  static readonly SMALL = new TShirtSize(new SmallValue());
  static readonly MEDIUM = new TShirtSize();
  static readonly LARGE = new TShirtSize();
}

console.log(TShirtSize.SMALL);
