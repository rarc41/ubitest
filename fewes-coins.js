const fewestCoins = (change, coins) => {
  let minCoins = [];

  for (let i = coins.length - 1; i >= 0; i--) {
    while (change >= coins[i]) {
      change -= coins[i];
      minCoins.push(coins[i]);
    }
  }

  return minCoins;
};

console.log(fewestCoins(27, [1,2,4,10, 100]));