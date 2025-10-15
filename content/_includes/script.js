function mapRange(x, y) {
  return (
    (x[1] - x[2]) * y[0] +
    (x[2] - x[0]) * y[1]
  ) /
    (x[1] - x[0]);
}

window.PageContent = class {
  init(_event, el) {
    el.value = 0;
  }

  unicode(event, el) {
    const inValue = parseInt(
      event.target.value,
    );
    const lightness = mapRange(
      [0, 297334, inValue],
      [50, 90],
    );
    const chroma = mapRange(
      [0, 297334, inValue],
      [0.08, 0.18],
    );
    const hue = mapRange(
      [0, 297334, inValue],
      [0, 360],
    );
    this.api.setProp("--lightness", `${lightness}%`);
    this.api.setProp("--chroma", chroma);
    this.api.setProp("--hue", hue);
    el.innerHTML = String.fromCharCode(event.target.value);
  }
};
