var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.get('/', (req, res) => {
res.send(`
<html>
    <body>
        <h1>El Cambio</h1>
    </body>
</html>
`)
})


