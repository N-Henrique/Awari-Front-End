function nPrimo(n) {
  let divisor = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisor++;
    }
  }

  if (divisor === 2) {
    return true;
  } else {
    return false;
  }
}

for (let i = 1; i <= 100; i++) {
  if (nPrimo(i)) {
    console.log(i);
  }
}
