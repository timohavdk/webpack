# Документация по Webpack

---

### _1.Проблемы, если его не использовать_

Существуют проблемы с управлением проектами JavaScript, если мы отдельно подключаем все библиотеки:

- Сразу не видно, что скрипт зависит от внешней библиотеки.
- Если зависимость отсутствует или включена в неправильном порядке, приложение не будет работать должным образом.
- Если зависимость включена, но не используется, браузер будет вынужден загрузить ненужный код.

---

### _2.Установка Webpack в проект_

При условии, что [Node.js](https://nodejs.org/ru/) установлена

1. Создание файла package.json ([документация](https://docs.npmjs.com/cli/v8/configuring-npm/package-json))
```cmd
   npm init
```
2. Установка webpack и webpack-cli (--save-dev - для development, --save - для production)
```cmd
   npm install webpack
   npm install webpack webpack-cli --save-dev
```

---

### _3.Первое использование_

Проект version_1

Описание:

В файле src/index.js подключена библиотека lodash*, этот файл собирается в базовой сборке webpack
в файл dist/main.js

*lodash предварительно установлена через npm

---

### _4.Конфигурация_

Проект version_2

Описание:

Добавление файла webpack.config.js в проект и использование его как

```cmd
webpack --config webpack.config.js
```

Добавление скрипта npm для быстрого запуска сборки (production)

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
    "build": "webpack"
},
```

Для дальнейшего использования в cmd

```cmd
npm run build
```

---
