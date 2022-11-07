import './style.sass'

let block = document.getElementById('block');
let input = document.getElementById('worth');
let input_c = document.getElementById('container');
let body = document.querySelector('body');
let percent = document.getElementById('percent');

function voblerHandler(event) { //Обработчик клика по блоку воблера
    if (event.target.tagName !== 'TEXTAREA') { //Клик не по воблеру
        if (block.classList.contains('active')) { //Проверка выбран ли воблер
            if (input.value !== "") { //Если есть содержимое в input
                input.blur(); // Отвод фокуса
                return;
            }
            percent.classList.remove('add-percent'); //Снимаем индикацию процента
            block.classList.remove('active'); //Возвращаем блок в обычное состояние
            input.removeAttribute('style'); //Убираем атрибут стиля с высотой
            input_c.removeAttribute('style'); //Убираем атрибут стиля с высотой
            input.blur(); // Отвод фокуса
            return;
        }
        return;
    }
    block.classList.add('active');
    input.removeAttribute('disabled');
    input.focus();
}

function inputHandler(event) { //Обработчик ввода в форму
    input.style.height = `96px`; //Устанавливаем начальное значение высоты input
    input_c.style.height = `96px`; //Устанавливаем начальное значение высоты input-container
    let scHeight = event.target.scrollHeight; //Получаем текущее значение высоты input
    input.style.height = `${scHeight}px`; //Устанавливаем значение
    input_c.style.height = `${scHeight}px`; //Устанавливаем значение
    percent.classList.add('add-percent'); //Меняем индикацию процента
}

body.addEventListener('click', voblerHandler);
input.addEventListener('keyup', inputHandler);

