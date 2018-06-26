const timerIds = [];

export const setInterval = (...args) => {
  timerIds.push(window.setInterval(...args));
};

export const setTimeout = (...args) => {
  timerIds.push(window.setTimeout(...args));
};

export const cleanUp = () => {
  timerIds.forEach(x => {
    clearInterval(x);
    clearTimeout(x);
  });

  timerIds.splice(0, timerIds.length);
};
