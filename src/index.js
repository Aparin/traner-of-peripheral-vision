import './main.css'
import squaresToPage from './squaresToPage';
import Stopwatch from './stopwatch';
import logic1Level from './logic1Level';

const startTest = () => {
    squaresToPage();
    const stopwatch = new Stopwatch;
    stopwatch.start();
    return stopwatch;
}

root.innerHTML = `
    <h2>Задание</h2>
    <p>В тесте будет 12 красных квадратов, пронумерованных с 1 до 12, и 13 чёрных квадратов пронумерованных с 1 до 13</p>
    <p>Ваша задача последовательно нажимать на красные квадраты с 1 по 12, а потом на чёрные, с 13 по 1</p>
    <p>Постарайтесь сделать это без ошибок, и как можно быстрее</p>
    <p>С нажатием кнопки 'Начать тренировку' загрузятся квадраты и запустится секундомер. Секундомер остановиться только тогда, когда вы пройдёте до конца</p>
    <button id = "buttonStart">Начать тренировку</button>
`;
buttonStart.onclick = () => {
    const stopwatch = startTest();
    logic1Level(stopwatch);
};