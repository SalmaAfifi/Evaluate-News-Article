// TODO declare a function to check the url ..
//  The question now how can i do it. I understand you are very busy mate so here's some hints pick the one you like
/* HINTS
    1. https://gist.github.com/franciskim/41a959f8e3989254ef5d
    2. https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
    3. https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
    4. https://www.codegrepper.com/code-examples/javascript/javascript+validate+url
    5. https://stackoverflow.com/a/5717133/6483379
    6. https://www.npmjs.com/package/valid-url
 */

function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);

    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
        '(\\#[-a-z\\d_]*)?$','i'); 
    return !!pattern.test(inputText);    //this was inspired from https://tutorial.eyehunts.com/js/url-validation-regex-javascript-example-code/
}

export { checkForURL }