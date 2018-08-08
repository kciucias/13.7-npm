var fs = require('fs');


fs.readdir('./', {}, function(err, files) {
    if (err) throw err;

    fs.writeFile('results.txt', files.join(','), function(err) {
        if (err) throw err;

        console.log('Zapisano wynik do pliku!');
    });
});