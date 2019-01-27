export default function mapGenerator() {
  let green = 0, red = 0;
  let arr = [];

  for (let i = 1; i < 26; i++) {
    const rand = Math.random();

    if (green === 13) {
      red++;
      arr.push('red');
      continue;
    }

    if (red === 12) {
      green++;
      arr.push('green');
      continue;
    }

    if (rand >= 0.5) {
      green++;
      arr.push('green');
    }
    else {
      red++;
      arr.push('red');
    }
  }
  return [red, green, arr];
}
