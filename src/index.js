/* eslint-disable no-undef */
import './main.css';
import start from './start';

root.innerHTML = `
  <img src="./img1.jpg" />
  <br />
  <div class="blockquote">
  "Умение видеть пространство осуществляется за счет бокового или периферийного зрения, которое в сочетании с технической подготовкой является основой тактического мастерства газодымозащитника"
  </div>
  <button id = "buttonNext">Далее</button>
`;
buttonNext.onclick = () => {
  start();
};
