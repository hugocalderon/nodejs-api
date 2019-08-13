const express = require('express');
const app = express();
path = require('path');
bodyParser = require('body-parser');
cors = require('cors');

let articleRoute = require('./Routes/article');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use(cors());

app.use(function(err, req, res, next) {
//return res.send({ "statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG });
    return res.send({ "statusCode": 1, "statusMessage": 1 });
});

app.use('/article', articleRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next();
});

/*first API to check if server is running*/
/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../server2/client/dist/index.html'));
});*/


app.listen(3000,function(){
    console.log('appl listening on port: 3000');
});
