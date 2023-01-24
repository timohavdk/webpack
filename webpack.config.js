const path = require('path'); //Path - библиотека использующая системный модуль путей, для адресации к файлам
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'production',
    entry: {
        firstApp: './src/first-app/index.js',
        secondApp: './src/second-app/index.js',
    }, // Входная точка для сборки всего проекта (Файл, в котором собираются все модули проекта)
    output: {
        filename: '[name]/[name].js', // Выходной/итоговый файл проекта в зависимости от целей production/development
        path: path.resolve(__dirname, 'dist'), // Путь к выходному/итоговому файлу
        clean: true, // Для очистки директории после пересборки
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                /* Регулярное выражение, показывающее тип файла к которому применяется loader/...
                (Между /.../ - искомое значение $ - символ конца строки, i - флаг игнорирующий регистр) */
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                /* Используемые модули порядок выполнения слева -> направо или снизу -> вверх,
                следующий модуль получает результаты предыдущего */
            },
        ],
    },
};
