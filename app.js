
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

// ler arquivo CSV no array
var instream = fs.createReadStream('./routes.csv');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

var arr = [];

rl.on('line', function(line) {
  // process line here
  var content = line.toString().replace(/\t/g, ' ').split('\r\n');
  arr.push(content);
});

rl.on('close', function() {
  // do something on finish here
  //console.log('arr', arr);
});

var obj;
fs.readFile('airportList.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log('leu arquivo');

  obj.regions.forEach(function(region) {

    region.locations.forEach(function(location) {
      console.log(location.code);
      console.log(location.applicableFlows);
    });
    
    //console.log(region);
  });
  

  //console.log(obj.regions.locations);
});



/* const Xray = require('x-ray');
const makeDriver = require('request-x-ray');

const options = {
	method: "GET", 						//Set HTTP method
	jar: true, 							//Enable cookies
	headers: {							//Set headers
		"User-Agent": "Firefox/48.0"
	}
};

const driver = makeDriver(options);		//Create driver
const x = Xray();

x.driver(driver);						//Set driver
 */

/* x("http://www.google.com", "title")(function(err, res) {
	console.log("Page retrieved with request!")
}); */

/*x('https://www.pontofrio.com.br/', '.navsub-list inline expanded@html', [{
  title: 'title',
  //link: '.article-title@href'
}])
  //.paginate('.nav-previous a@href')
  .limit(1)
  .write('results.json')*/

/* x('http://www.pontofrio.com.br', 'title')(function(err, title) {
	console.log("Page retrieved with request!")
  //console.log(title) // Google
})
 */
