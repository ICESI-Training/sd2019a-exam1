'use strict';

// URL to the endpoint where the data is stored
const url = '{{load_balancer_ip}}'
const endpoint = `http://${url}/api/dinosaurs`;
let dinosaurs = [];
/**
 * Asynchronous method that call the endpoint and get the data 
 * @param {empty} 
 * @returns {void}
 */
(async function () {
    dinosaurs = await fetch(endpoint)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Error:', error.message);
            return {};
        })
    printAllInformation();
})();

/**
 * Method that print in the browser all the information required 
 * @param {empty} 
 * @returns {void}
 */
function printAllInformation() {
    let list = document.getElementsByClassName('list')[0];
    dinosaurs.forEach(item =>{
        list.appendChild(printData(item));
    })
}

/**
 * Method that emulate the console.log but in the html
 * @param {string} data 
 * @returns {void}
 */
const printData = (data) => {
    let element = document.createElement("LI"); 
    element.appendChild(document.createTextNode(`${data.name} is ${data.type}`)); 
    return element;
}