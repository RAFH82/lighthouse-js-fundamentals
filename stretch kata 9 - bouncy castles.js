const sphereVolume = radius => {
  let volume = (4/3) * Math.PI * (Math.pow(radius, 3));
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) => {
  let volume = (1/3) * (Math.PI * Math.pow(radius, 2) * height);
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) => {
  volume = (width * depth) * height;
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = solids => {
  let volume = 0;
  for (element of solids) {
    if (element.type === 'sphere') {
      volume += sphereVolume(element.radius);
    } else if (element.type === 'cone') {
      volume += coneVolume(element.radius, element.height)
    } else {
      volume += prismVolume(element.height, element.width, element.depth)
    }
  }
  return  volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);