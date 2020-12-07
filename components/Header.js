// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
//                  -instantiate-
const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const classSpan = document.createElement('span');

//                  -appendChild-
headerDiv.appendChild(dateSpan);
headerDiv.appendChild(h1);
headerDiv.appendChild(classSpan);

//                  -classList-
headerDiv.classList.add('header');
dateSpan.classList.add('date');
classSpan.classList.add('temp');

//                  -textContent-
dateSpan.textContent = 'MARCH 28, 2020';
h1.textContent = 'Lambda Times';
classSpan.textContent = '98°'

return headerDiv;
}

//                  -append to Dom- ('.header-container')
const headerData = Header();
document.querySelector('.header-container').appendChild(headerData);