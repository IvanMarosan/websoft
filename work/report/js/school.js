(function () {
    'use strict';

    let url;

    url = "data/1281.json";
    fetch(url).then((respone) => {
        return respone.json();
    }).then((myJson) => {
    console.log(myJson);
    });

    console.log("Console is ready");
})();