'use strict';

console.log(document.querySelector('.message').textContent)
/* DOM manipulation => making js interact with the webpage. DOM stands for document object model. It is basically a structured representation of html documents. DOM allows javascript to access html elements and styles in order to manipulate them.
   ie we will be able to change text, html attributes and even css styles from our javascript. DOm is basically a connection point between html documents and js code. DOM is automatically created by the browser when html loads. And it is stored
   in a tree like structure. In this tree each html element is one object. DOM always start with the document object. A document is a special object that is the entry point to the DOM. Because we need it to select elements Eg: document.querySelector()
   first child element of document object is html. It has two child elements head, body. DOM and DOM methods are part of web API's.
*/