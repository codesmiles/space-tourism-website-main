# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Space tourism website solution](#frontend-mentor---space-tourism-website-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](\Capture.PNG)

### Links

 Live Site URL:- [CLICK HERE](https://space-tourism-website-main-black.vercel.app/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- Mobile-first workflow
- Vanilla Javascript

### What I learned

The first major thing i learned was how to make a navigation bar using bootstrap then, tho the upper nav was supposed to be a side navbar based on what the design gave so will be having some update later

Then also the complexity of how your HTML tags are to be positioned is of important cos there'll be a situation where the where your contents on the different location on desktop view tablet view and mobile view

Lastly and most satisfyingly is extensive use of the fetch method and other javascript logics i used for interactiveness i was basically learning on the go.
the one below gave me joy

```js

 for (var i = 0; i < arrOfLinks.length; i++) {
      arrOfLinks[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-subnavv");
        current[0].className = current[0].className.replace(
          " active-subnavv",
          ""
        );
        this.className += " active-subnavv";
      });
    }
```

### Continued development

I will later update the navbar to side navbar and also have to work on my logic building so as it goes I'll get better

### Useful resources

- GOOGLE has been my guide all through, its been my friend
- Refeshed my memories on fetch API using this - click the link [Asynchronous JavaScript Tutorial #9 - The Fetch API](https://www.youtube.com/watch?v=drK6mdA9d_M)

## Author

- Frontend Mentor - [@codesmiles](https://www.frontendmentor.io/profile/codesmiles)
- Twitter - [@codesmiles](https://www.twitter.com/ccodesmiles)
- Facebook - [Nwogu Michael](https://www.facebook.com/codesmiles)
- LinkedIn - [Nwogu Michael](https://www.linkedin.com/in/michael-nwogu-974547150/)
- Instagram -[@codesmiles](https://www.instagram.com/codesmiles)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Many thanks to my bosses that helped me, guided me, gingered me and also supported my progress, people like Mr bolu(aka mastercraft), BossIsaac kelvin, Mr gifted, my SLN mums and dads etc.

I'll also like to acknowledge my dev accountability group even if they dont know it they've been my greatest motivation.
