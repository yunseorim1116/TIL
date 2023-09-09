function loop() {
  let a = [() => {}];
  a[0] = () => a[0]();
  a[0]();
}

loop();
