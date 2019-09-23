#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

// tell express that the view engine is hbs
app.set('view engine', 'hbs');


// -------------- variable definition -------------- //
var visitorCount = 0; 


// -------------- express 'get' handlers -------------- //

app.get('/', function(req, res){

    // increment the number of visitors
    visitorCount++;     
    
    // render the page
    res.render('index', { numVisitors : visitorCount} );

});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});