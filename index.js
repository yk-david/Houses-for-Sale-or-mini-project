import { propertyForSaleArr } from "/properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from '/properties/placeholderPropertyObj.js';

function getPropertyHtml(arr = [placeholderPropertyObj]) {
    return arr
        .map((property) => {
            return `
                <section class="card">
                    <img src="/images/${property.image}">
                    <div class="card-right">
                        <h2>${property.propertyLocation}</h2>
                        <h3>${property.priceGBP}</h3>
                        <p>${property.comment}</p>
                        <h3>${property.roomsM2.reduce((total, actualM2) => total + actualM2)} m&sup2;</h3>
                    </div>
                </section> 
            `;
        })
        .join(" ");
}
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr);
