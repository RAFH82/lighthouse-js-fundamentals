const calculateRectangleArea = (length, width) => {
  if (length < 1 || width < 1) {
    return undefined;
  }
  return length * width;
}

console.log(calculateRectangleArea(10,5));

const calculateTriangleArea = (base, height) => {
  if (base < 1 || height < 1) {
    return undefined;
  }
  return (base * 0.5) * height;
}

console.log(calculateTriangleArea(30,3.5));

const calculateCircleArea = radius => {
  if (radius < 1) {
    return undefined;
  }
  return (radius * radius) * Math.PI;
}

console.log(calculateCircleArea(3.5));

