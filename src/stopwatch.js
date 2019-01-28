export default class Stopwatch {
    start() {
        const startTime = new Date();
        this.stopwatch = setInterval(() => {
            const currentTime = new Date();
            const gap = (currentTime - startTime);
            let ms = gap % 1000;
            let sec = ((gap - ms) / 1000);

            if (sec < 10) sec = '0' + sec;
            if (ms < 10) {
                ms = '00' + ms;
            } else if (ms < 100) {
                ms = '0' + ms;
            }
            document.getElementById('timer').innerText = `${sec} сек: ${ms} мс`;
        }, 50);
    }
    stop() {
        clearInterval(this.stopwatch);
    }
}