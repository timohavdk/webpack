const path = require('path'); //Path - библиотека использующая системный модуль путей, для адресации к файлам

module.exports = {
    entry: './src/index.js', //Входная точка для сборки всего проекта (Файл, в котором собираются все модули проекта)
    output: {
        filename: 'main.js', //Выходной/итоговый файл проекта в зависимости от целей production/development
        path: path.resolve(__dirname, 'dist'), //Путь к выходному/итоговому файлу
    },
};
