# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Screenshot%20(1).png)


### Links

- Solution URL: [View here](https://your-solution-url.com)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
I mastered and familiarized myself with the process of API calls, and different error codes.

To see how you can add code snippets, see below:


```js
function getAdvice() {
    fetch(url)
        .then(res => res.json())
        .then(data => data.slip)
        .then(data => {
            adviceLine.textContent = data.advice;
            adviceId.textContent = data.id;
        })
// (Cha-Ching!)


}
```

### Continued development
There will be future adaptations of this project using other fronnt-end technologies like reactJs. Possibly, I might interact with the API using Axios.

### Useful resources

- [box Shadow Generator](https://www.example.com) - This helped me to generate box-shadow effects seamlessly for the dice hover efect.

## Author

- Website - [DaraTheDev](https://daraukpong.vercel.app)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/DaraUkpong)
- Twitter - [@darathedev](https://www.twitter.com/darathedev)


## Acknowledgments

Hats Off to Frontend Mentors for this!!!
