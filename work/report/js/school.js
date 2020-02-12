(function () {
    'use strict';

    let url;
    
    url = "data/1281.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
    console.log('Console is ready!');
})();