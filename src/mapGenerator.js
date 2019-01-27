export default function mapGenerator() {
  let arr = [];

  for (let red = 1; red <= 12; red++) {
    arr.push(`<div id="red${red}" class="red">${red}</div>`);
  }
  for (let green = 1; green <= 13; green++) {
    arr.push(`<div id="green${green}" class="green">${green}</div>`);
  }

  return arr;
}
