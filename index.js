const express = require('express');
const bodyParser = require('body-parser'); // Добавили middleware для парсинга данных тела запроса
const app = express();

app.set('view engine', 'ejs');
app.set('views', './templates');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // Используем middleware bodyParser

app.get('/', (req, res) => {
    res.render('index', { name: 'Alex', id: 4 });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contacts', (req, res) => {
    res.render('contacts');
});

app.get('/newpage', (req, res) => {
    res.render('newpage');
});

// Обрабатываем POST-запрос для URL /update
app.post('/update', (req, res) => {
    const updatedName = req.body.name;
    const updatedId = req.body.id;
    
    // Передаем обновленные данные на страницу update.ejs
    res.render('update', { name: updatedName, id: updatedId });
});

let port = 3003;
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
});

