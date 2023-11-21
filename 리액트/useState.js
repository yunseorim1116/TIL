const useState = (initialValue) => {
  let value = initialValue;

  const state = () => value;

  const setState = (newValue) => {
    value = newValue;
  };

  return [state, setState];
};

const [counter, setCounter] = useState(0);

console.log(counter()); // 0
setCounter(1);
console.log(counter()); // 1
