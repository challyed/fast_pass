
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , print = require('./routes/print')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , lessMiddleware = require('less-middleware');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(lessMiddleware({
    src: __dirname + '/views/stylesheets',
    dest: __dirname + '/public/stylesheets',
    prefix: '/stylesheets',
    once: true,
    compress: true,
    debug: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/print', print.view);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});