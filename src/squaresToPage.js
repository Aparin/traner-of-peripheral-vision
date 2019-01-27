import mapGenerator from './mapGenerator';

export default function squaresToPage() {
  const arr = mapGenerator();
  let html = '';

  while (arr.length !=0) {
    const position = Math.round(arr.length * Math.random());
    html += arr.splice(position, 1);
  }

  document.getElementById('root').innerHTML = html;
}