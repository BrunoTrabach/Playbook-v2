function getAsset(key) {
  if (!key) return "assets/avatares/" + ASSET_MAP.default;

  const file = ASSET_MAP[key] || ASSET_MAP.default;

  return "assets/avatares/" + file;
}

function applyAssets() {
  const elements = document.querySelectorAll("[data-avatar]");

  elements.forEach(el => {
    const key = el.getAttribute("data-avatar");
    el.src = getAsset(key);

    el.onerror = () => {
      el.src = "assets/avatares/" + ASSET_MAP.default;
    };
  });
}
