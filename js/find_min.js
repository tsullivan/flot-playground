define(() => {
  return (data) => {
    return data.reduce((prev, curr) => {
      const currMin = curr.reduce((innerPrev, innerCurr) => Math.min(innerCurr[1], innerPrev), 0);
      return Math.min(prev, currMin);
    }, 0);
  };
});

