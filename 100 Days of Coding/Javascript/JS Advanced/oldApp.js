// document.body.children[1].children[0].href = "https://google.com";
/* select DOM elements through nest */

document.getElementById("paragraph");
/* select DOM elements through querying for id or class */

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";
/* This sets the varaible to the document selector when querying the DOM  */

anchorElemnt = document.querySelector("p a");
/* Alternative querying method which requires CSS selector
Element Type, Tag, Class, or ID selectors are compatiable. */
anchorElement.href = "https://academind.com";
/* querySelectorAll is required to access every instance of anchors
within paragraphs throughout HTML document. */

//MANIPULATING HTML ELEMENTS VIA JAVASCRIPT
let newAnchor = document.createElement("a"); 
    /* creates a new anchor element */
newAnchor.href = "https://google.com";
    /* assings destination for anchor */
newAnchor.textContent = " This leads to Google.com";
    /* creates text for anchor */
let firstParagragh = document.querySelector("p");
    /* gets access to location of where the new element will go */
firstParagragh.append(newAnchor);
    /* append adds new elements after current elements */

//DELETEING ELEMENTS
let firstElement = document.querySelector("h1");
firstElement.remove();

//MOVE ELEMENTS
firstParagragh.parentElement.append(firstParagragh);

// innerHTML
console.log(firstParagragh.innerHTML);
firstParagragh.innerHTML = "Hi! This is <strong>important!</strong>.";