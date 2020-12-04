// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker(info){

//              -instantiate-
const cardDiv = document.createElement('div');
    const headDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('div');
            const img = document.createElement('img');
        const span = document.createElement('span');

//               -appendChild-
cardDiv.appendChild(headDiv);
cardDiv.appendChild(authorDiv);
authorDiv.appendChild(imgContainer);
imgContainer.appendChild(img);
authorDiv.appendChild(span);
document.querySelector('.cards-container').appendChild(cardDiv)
//              -classList-
cardDiv.classList.add('card');
headDiv.classList.add('headline');
authorDiv.classList.add('author');
img.classList.add('img-container');

//              -textContent-
headDiv.textContent = info.headline;
span.textContent = info.authorName;

//              -imgSrc-
img.src = info.authorPhoto;

//              -eventListener-
cardDiv.addEventListener('click', () => {
    console.log(headDiv);
})
// console.log(cardDiv)
//              -return-
return cardDiv;
}

axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((resolve) => {
    const bootstrap = resolve.data.articles.bootstrap;
    const javascript = resolve.data.articles.javascript;
    const jquery = resolve.data.articles.jquery;
    const node = resolve.data.articles.node;
    const technology = resolve.data.articles.technology;
    const topicArray = [bootstrap,javascript, jquery, node,technology, topicArray];
    topicArray.forEach((topic) => {
        // console.log(topic)
        topic.forEach((article) => {
            console.log(article)
            cardMaker(article)
        })
    })
})