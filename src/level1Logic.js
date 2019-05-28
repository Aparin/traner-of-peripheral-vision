/* eslint-disable no-undef */
import level1Result from './level1Result';

export default function logic1Level(stopwatch) {
  let
    red = 1;
  let black = 13;
  let error = 0;

  root.onclick = (e) => {
    if (e.target.id === 'buttonStart') return;

    if (red !== 13 && e.target.id === `red${red}`) {
      red += 1;
    } else if (black !== 0 && e.target.id === `black${black}`) {
      black -= 1;
      if (red === 13 && black === 0) {
        stopwatch.stop();
        level1Result(timer.innerText, +mistake.innerText);
      }
    } else {
      error += 1;
      mistake.innerText = error;
    }
  };
}
