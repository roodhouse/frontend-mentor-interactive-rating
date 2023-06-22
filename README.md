# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

#### Screen on load

![](/src/images/ss01.png)

#### Selected and hover state

![](/src/images/ss02.png)

#### Thank you screen

![](/src/images/ss03.png)

### Links

- Solution URL: [solution URL](https://github.com/roodhouse/frontend-mentor-interactive-rating)
- Live Site URL: [ive site URL](https://rating.rugh.us)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

Using React useState, I was able to pass data between components. This was one of the first practical times I have had to utilize props and it helped me to understand the concept by putting it into practice. 

I declare a state and a function in the parent.

```js
// declare state for entire app
  const [numClicked, setNumClicked] = useState('');  
  // define function to pass to child that will update the state for the entire app
  const changeRating = (newRating) => {
    setNumClicked(newRating);
  }
```

Next I pass the changeRating function to the child component where the rating change happens:

```js
        <div id='ratingContainer' className='rounded-[15px] px-6 pt-6 pb-8 xl:pt-8 xl:pl-8 xl:pb-8 xl:pr-10'>
          <Rating changeRating={changeRating}/>
        </div>
```

In the Rating component the changeRating is destructured from the parent, state is defined and a function is built to set the state:

```js
function Rating({changeRating}) {
    const [numClicked, setNumClicked] = useState('');  
    function handleSelect(e) {
        // set state with the number clicked
        setNumClicked(e.target.innerHTML)
```

On click of any of the numbers then the handleSelect function is called:

```js
<div id='oneContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center xl:w-[51px] xl:h-[51px] xl:rounded-[51px] xl:text-base xl:leading-[24px] xl:tracking-[0.2px] cursor-pointer hover:bg-orange hover:text-white'>              1
</div>
```

On submit the handleSubmit function takes the current state and passes it back to the parent component:

```js
function handleSubmit() {
        if(numClicked === '') {
            window.alert('You must select a number to proceed.')
        } else {
            document.getElementById('ratingContainer').style.display = 'none'
            document.getElementById('thankYouContainer').classList.remove('hidden');
            changeRating(numClicked)
        }
    }
```

Back in the parent component the state is updated and the Thanks child component is passed the state:

```js
<div id='thankYouContainer' className='hidden rounded-[15px] px-6 pt-[42px] pb-[37px] flex flex-col items-center xl:py-[45px] xl:pl-8 xl:pr-10'>
          {/* pass overall state value to other component */}
          <Thanks numClicked={numClicked} />
</div>
```

The Thanks component destructures the numClicked and then calls on the value in the text:

```js
<div id='resultContainer' className='bg-darkBlue py-[5px] px-3 rounded-[22.5px] text-orange font-["Overpass"] mb-6 text-[14px] leading-[22px] xl:mb-9 xl:text-[15px] xl:leading-[24px]'>
            <p>You selected <span id='theChoice'>{numClicked}</span> out of 5</p>
</div>
```

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)