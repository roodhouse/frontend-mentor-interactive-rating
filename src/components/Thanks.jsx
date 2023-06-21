import React from 'react'
import ThanksImg from '../images/illustration-thank-you.svg'

function Thanks({numClicked}) {
    // console.log(`from in thanks ${changeRating}`)
  return (
    <>
          <div id='imageContainer' className='mb-6'>
            <img src={ThanksImg} alt='thanks'/>
          </div>
          <div id='resultContainer' className='bg-darkBlue py-[5px] px-3 rounded-[22.5px] text-orange mb-6'>
            <p>You selected <span id='theChoice'>{numClicked}</span> out of 5</p>
          </div>
          <div id='thankYouTextContainer' className='text-center'>
            <div id='thankHeading' className='font-["Overpass"] text-white font-bold text-2xl mb-[10px]'>
              <h1>Thank you!</h1>
            </div>
            <div id='thankBody' className='font-["Overpass"] text-lightGray text-sm leading-[22px]'>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
          </div>
    </>
  )
}

export default Thanks