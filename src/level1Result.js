/* eslint-disable no-undef */
import { currentUser } from './state';

const level1Result = (time, mistakes) => {
  if (mistakes > 0) {
    resultMessage.innerHTML = `<h3>Увы, ${currentUser.getName()}!</h3>
        К сожалению вы прошли тренировку с ошибками, попробуйте снова...`;
  } else resultMessage.innerText = '';
  if (mistakes === 0) {
    resultMessage.innerHTML = `<h3>Поздравляем, ${currentUser.getName()}!</h3>
            Вы прошли тренировку без ошибок.<br> Ваше время: ${time}`;
  }
};
export default level1Result;
