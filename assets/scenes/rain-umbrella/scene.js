(() => {
  const root = document.documentElement;
  const speed = (Math.random() * 0.6 + 0.8).toFixed(2);
  root.style.setProperty('--rain-speed', `${speed}s`);
})();
