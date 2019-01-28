import './main.css'
import squaresToPage from './squaresToPage';
import Stopwatch from './stopwatch';

squaresToPage();
const stopwatch = new Stopwatch;
stopwatch.start();

setTimeout(() => {
    stopwatch.stop();
}, 3000);