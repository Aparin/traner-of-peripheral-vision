import level1Result from './level1Result';

export default function logic1Level(stopwatch) {

    let
        red = 1,
        black = 13,
        error = 0;
    root.onclick = (e) => {
        if (e.target.id === 'buttonStart') return;

        if (red !== 13 && e.target.id === `red${red}`) {
            red++;
        } else if (black !== 0 && e.target.id === `black${black}`) {
            black--;
            if (red === 13 && black === 0) {
                stopwatch.stop();
                level1Result(timer.innerText, +mistake.innerText);
            }
        } else {
            error++;
            mistake.innerText = error;
        }

    }
}