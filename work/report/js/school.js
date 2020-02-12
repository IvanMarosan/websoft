"use strict";


function getData(datalabel = "1281.json") {

    let test = fetch(datalabel).then((respone) => {
        return respone.json();}).then((myJson) => {
            console.log(myJson);
            return myJson;
});
    console.log("Data was fetched")
    return test;
}