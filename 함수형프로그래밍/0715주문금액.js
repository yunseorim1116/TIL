
// orders : 주문 배열
// products: 상품 배열
// productId: 상품 번호
// price: 상품 금액
// 주문 금액: quantity * price

const orders = [
  { id: 1, productId: 1, quantity: 2 },
  { id: 2, productId: 2, quantity: 1 },
  { id: 3, productId: 3, quantity: 5 },
  { id: 4, productId: 2, quantity: 3 },
  { id: 5, productId: 1, quantity: 4 },
  { id: 6, productId: 3, quantity: 2 },
  { id: 7, productId: 4, quantity: 1 },
  { id: 8, productId: 2, quantity: 2 },
  { id: 9, productId: 3, quantity: 3 },
  { id: 10, productId: 1, quantity: 1 }
];

const products = [
  { id: 1, name: 'Apple', price: 1000 },
  { id: 2, name: 'Banana', price: 500 },
  { id: 3, name: 'Orange', price: 800 },
  { id: 4, name: 'Grapes', price: 1500 }
];

const x = orders.reduce((acc,cur)=> {
  const price = products.find(product => product.id === cur.productId).price
  acc += price *  cur.quantity
 return acc
},0)

// 고민의 흐름

// - find 메소드를 통해 힌트를 얻었다.
// - “총 합” 을 구해야한다 ⇒ 누적 값을 구해야 한다. ⇒ reduce를 써볼까?
// - productId의 price를 알아야 되겠다. ⇒ 힌트로 얹어주신 find메소드를 사용해 가격을 찾아보자!