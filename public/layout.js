// animated tab
setInterval(() => {
  const animation = [
    {
      emoji: "🌍",
      title: "AROUND the world",
    },
    {
      emoji: "🌏",
      title: "around THE world",
    },
    {
      emoji: "🌎",
      title: "around the WORLD",
    },
  ];

  window.tabAnimationStep = (window.tabAnimationStep || 0) % animation.length;

  document.querySelector(
    "link[rel='icon']"
  ).href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
    animation[window.tabAnimationStep].emoji
  }</text></svg>`;

  document.title = animation[window.tabAnimationStep].title;

  window.tabAnimationStep++;
}, 1000);
