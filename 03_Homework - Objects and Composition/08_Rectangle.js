function rectangle(width, height, color) {
  return {
    width: Number(width),
    height: Number(height),
    color: color[0].toUpperCase() + color.slice(1),
    calcArea() {
      return this.height * this.width;
    },
  };
}
