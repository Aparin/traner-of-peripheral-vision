export default function mapGenerator() {
  const arr = [];

  for (let red = 1; red <= 12; red += 1) {
    arr.push(`<div id="red${red}" class="red">${red}</div>`);
  }
  for (let black = 1; black <= 13; black += 1) {
    arr.push(`<div id="black${black}" class="black">${black}</div>`);
  }

  return arr;
}
