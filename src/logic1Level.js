    export default function logic1Level(stopwatch) {
        /*
          setTimeout(() => {
              stopwatch.stop();
          }, 3000)
        */
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

                }
            } else {
                error++;
                mistake.innerText = error;
            }

        }
    }