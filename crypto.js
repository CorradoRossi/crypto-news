const app = document.getElementById('root');

/*const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = 'google.png';*/

const title = document.createElement('h2');
title.setAttribute('class', 'title');
title.textContent = `Just Another Crypto Site`;

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(title);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=def910e214e14cc0b32ec52d0d2f04e1', true);
request.onload = function () {

    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = article.title;

      const urltoimg = document.createElement('img');
      urltoimg.src = article.urlToImage;

      const p = document.createElement('p');
      article.description = article.description.substring(0, 300);
      p.textContent = `${article.description}`;

      /*const h3 = document.createElement('h3');
      h3.textContent = 'Link to article';*/

      const a = document.createElement('a');
      const linkText = document.createTextNode('Link to article');
      a.appendChild(linkText);
      a.href = `${article.url}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(urltoimg);
      card.appendChild(p);
      card.appendChild(a);
    });
  } else {
    const errorMessage = document.createElement('h1');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
