/* eslint-disable no-undef */
import level1Result from './level1Result';

const resMess = document.getElementById('resultMessage');
describe('levelResult', () => {
  level1Result(null, 1);
  it('Проверка на ошибки, уровень 1', () => {
    assert(resMess.innerText, 'К сожалению вы прошли тренировку с ошибками, попробуйте снова');
  });
  setTimeout(() => {
    level1Result(null, 0);
  }, 30);

  it('Проверка на отсутствие ошибок, уровень 1', () => {
    assert(resMess.innerText, null);
  });

  level1Result('50 сек 195 мс', 0);
  it('Проверка вывода сообщения об успехе', () => {
    assert(resMess.innerText, 'Поздравляем, . Вы прошли тренировку без ошибок. Ваше время: 50 сек 195 м');
  });
  setTimeout(() => {
    resMess.innerHTML = null;
  }, 30);
});
