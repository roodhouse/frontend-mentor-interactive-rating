import React, { useState } from 'react'
import Star from '../images/icon-star.svg'

function Rating({changeRating}) {
    const [numClicked, setNumClicked] = useState('');  
    function handleSelect(e) {
        // set state with the number clicked
        setNumClicked(e.target.innerHTML)
    
        // put all elements with a class of number into an array
        const allNumbers = document.querySelectorAll('.number')
        const numbersArray = Array.from(allNumbers)
        // grab the classlist of the clicked element
        let classList = e.target.classList;
        // create a new array of just the object values from classlist
        const propNames = Object.values(classList)

        // for each of the elements in the numbersArray call them num
        numbersArray.forEach((num) => {
            // again, for each of the elements in the numbersArray call them number
            for (const number of numbersArray) {
                // if number and num are not the same then we know that the element was not clicked
                if (number !== num) {
                    // go through these not clicked elements and make sure they have the correct css
                    num.classList.remove('bg-medGray', 'text-white')
                    num.classList.add('bg-darkBlue', 'text-medGray')
                }
            }
        })
        
        // if the element contains our bg class in the new propNames classlist array replace it with the correct css
        if(propNames.includes('bg-darkBlue')) {
            classList.remove('bg-darkBlue', 'text-medGray');
            classList.add('bg-medGray', 'text-white')
            // Click of a number that has already been selected
        } else if (propNames.includes('bg-medGray')) {
                classList.remove('bg-medGray', 'text-white');
                classList.add('bg-darkBlue', 'text-medGray')
        } else {
            console.log('none')
        }
    }

    function handleSubmit() {
        if(numClicked === '') {
            window.alert('You must select a number to proceed.')
        } else {
            document.getElementById('ratingContainer').style.display = 'none'
            document.getElementById('thankYouContainer').classList.remove('hidden');
            changeRating(numClicked)
        }
    }

  return (
    <>
          <div id='starContainer' className='w-[40px] h-[40px] bg-darkBlue rounded-[40px] flex justify-center items-center mb-4 xl:w-[48px] xl:h-[48px] xl:rounded-[48px] xl:mb-[30px]'>
            <img src={Star} alt='star' className='w-[16px] h-[16px]'/>
          </div>
          <div id='textContainer' className='flex flex-col mb-6'>
            <div id='textHeading' className='text-white font-["Overpass"] font-bold text-2xl mb-[10px] xl:text-[28px]'>
              <h1>How did we do?</h1>
            </div>
            <div id='textBody' className='text-lightGray font-["Overpass"] text-sm leading-[22px] xl:text-[15px] xl:leading-[24px]'>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
          </div>
          <div id='numberContainer' className='flex justify-between mb-6 xl:mb-8'>
            <div id='oneContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center xl:w-[51px] xl:h-[51px] xl:rounded-[51px] xl:text-base xl:leading-[24px] xl:tracking-[0.2px] cursor-pointer hover:bg-orange hover:text-white'>
              1
            </div>
            <div id='twoContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center xl:w-[51px] xl:h-[51px] xl:rounded-[51px] xl:text-base xl:leading-[24px] xl:tracking-[0.2px] cursor-pointer hover:bg-orange hover:text-white'>
              2
            </div>
            <div id='threeContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center xl:w-[51px] xl:h-[51px] xl:rounded-[51px] xl:text-base xl:leading-[24px] xl:tracking-[0.2px] cursor-pointer hover:bg-orange hover:text-white'>
              3
            </div>
            <div id='fourContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center xl:w-[51px] xl:h-[51px] xl:rounded-[51px] xl:text-base xl:leading-[24px] xl:tracking-[0.2px] cursor-pointer hover:bg-orange hover:text-white'>
              4
            </div>
            <div id='fiveContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center xl:w-[51px] xl:h-[51px] xl:rounded-[51px] xl:text-base xl:leading-[24px] xl:tracking-[0.2px] cursor-pointer hover:bg-orange hover:text-white'>
              5
            </div>
          </div>
          <div id='btnContainer' className='w-full rounded-[22.5px] bg-orange flex items-center justify-center text-white font-["Overpass"] text-sm font-bold xl:text-[15px] hover:bg-white hover:text-orange'>
            <button id='submit' onClick={handleSubmit} className='tracking-[1.867px] w-full xl:tracking-[2px] py-3 hover:cursor-pointer'>SUBMIT</button>
          </div>
    </>
  )
}

export default Rating