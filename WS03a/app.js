const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

const customheader = (req, res, next) => {
    const header2 = req.headers['x-custom-header'];
    if (!header2) {
        return res.status(400).json({
            error: 'X-Custom-Header missing.',
        });
    }
    next();
};

app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/services', (req, res) => {
    res.send('Services Page');
});

app.post('/submit', (req, res) => {
    res.json({
        data: req.body,
    });
});

app.get('/header', customheader, (req, res) => {
    res.json({
        message: 'Access granted.',
        header2: req.headers['x-custom-header'],
    });
});

app.get('/list', (req, res) => {
    const filepath = path.join(__dirname, 'text.txt');
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(`<p>${data}<p>`)
    })
})

app.get('/json', (req, res) => {
    const filepath2 = path.join(__dirname, 'data.json');
    fs.readFile(filepath2, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        const parse = JSON.parse(data);
        let html = '<table border="1">';
        html += '<tr><th>Name</th><th>Age</th></tr>';
        parse.forEach(user => {
            html += `<tr><td>${user.name}</td><td>${user.age}</td>`
        })
        html += '</table>';
        res.send(html);
    })
})

app.post('/add', (req, res) => {
    const filepath3 = path.join(__dirname, 'data.json');
    const newuser = req.body;
    
    fs.readFile(filepath3, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        const parse = JSON.parse(data);
        parse.push(newuser);

        fs.writeFile(filepath3, JSON.stringify(parse, null, 2), (err) => {
            if (err) {
                console.log(err)
            }
            res.json({message: 'User added.', user: newuser});
        });
    });
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});