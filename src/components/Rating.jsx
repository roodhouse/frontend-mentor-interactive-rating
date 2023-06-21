import React from 'react'
import Star from '../images/icon-star.svg'



function Rating() {

    function handleSelect(e) {
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

  return (
    <>
          <div id='starContainer' className='w-[40px] h-[40px] bg-darkBlue rounded-[40px] flex justify-center items-center mb-4'>
            <img src={Star} alt='star' className='w-[14px] h-[14px]'/>
          </div>
          <div id='textContainer' className='flex flex-col mb-6'>
            <div id='textHeading' className='text-white font-["Overpass"] font-bold text-2xl mb-[10px]'>
              <h1>How did we do?</h1>
            </div>
            <div id='textBody' className='text-lightGray font-["Overpass"] text-sm leading-[22px]'>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
          </div>
          <div id='numberContainer' className='flex justify-between mb-6'>
            <div id='oneContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center'>
              1
            </div>
            <div id='twoContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center'>
              2
            </div>
            <div id='threeContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center'>
              3
            </div>
            <div id='fourContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center'>
              4
            </div>
            <div id='fiveContainer' onClick={handleSelect} className='number w-[42px] h-[42px] rounded-[42px] bg-darkBlue text-medGray text-sm leading-[24px] font-["Overpass"] font-bold tracking-[0.175px] flex justify-center items-center'>
              5
            </div>
          </div>
          <div id='btnContainer' className='w-full rounded-[22.5px] bg-orange flex items-center justify-center py-3 text-white font-["Overpass"] text-sm font-bold'>
            <button id='submit' className='tracking-[1.867px]'>SUBMIT</button>
          </div>
    </>
  )
}

export default Rating