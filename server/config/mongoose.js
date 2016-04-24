
var mongoose      = require('mongoose'),

    validators    = require('mongoose-validators'),
/*
*  require file-system so that we can load, read, require all of the model files
*/
    fs            = require('fs'),
/*
*  utilize path for easy dir/file joining
*/
    path          = require('path'),
/*
*  Dir where our models are located
*/
    models_path   = path.join( __dirname, "../models"),
/*
*   Regular expression that checks for .js extension
*/
    reg           = new RegExp( ".js$", "i" ),
/*
*  database information
*/
    dbURI         = 'mongodb://localhost/DoctorsCalendar';           /////////////

/*
* Connect to the database
*/
mongoose.connect( dbURI );

/*
*  CONNECTION EVENTS
*  When successfully connected
*/
mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dbURI }` );
});

/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});

/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});

/*
*  If the Node process ends, close the Mongoose connection
*/
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});

/*
*  read all of the files in the models dir and
*  check if it is a javascript file before requiring it
*/
fs.readdirSync( models_path ).forEach( function( file ) {

  if( reg.test( file ) ) {

    require( path.join( models_path, file ) );

  }
});