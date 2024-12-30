// animated favicon!
setInterval(() => {
  const animation = ["🌍", "🌏", "🌎"];
  window.animationStep = (window.animationStep || 0) % animation.length;

  document.querySelector(
    "link[rel='icon']"
  ).href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
    animation[window.animationStep++]
  }</text></svg>`;
}, 1000);

// randomise the title on an interval
setInterval(() => {
  const titles = ["Hi there!", "Welcome to my site!", "Have a nice day!"];
  window.titleStep = (window.titleStep || 0) % titles.length;

  document.title = titles[window.titleStep++];
}, 1000);
