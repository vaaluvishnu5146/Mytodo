// Memoization or Dynamic programming
function addModule() {
  const memoizedData = {};
  return (a, b) => {
    if (memoizedData[`${a}, ${b}`]) {
      console.log("Memorized data found");
      return memoizedData[`${a}, ${b}`];
    }
    for (let x = 0; x < 5; x++) {
      console.log("Running");
    }
    const result = a + b;
    memoizedData[`${a}, ${b}`] = result;
    return result;
  };
}

const add = addModule();
add(10, 20);
add(20, 30);
add(10, 20);
add(20, 30);
