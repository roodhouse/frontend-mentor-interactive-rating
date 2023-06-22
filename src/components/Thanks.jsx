import React from 'react'
import ThanksImg from '../images/illustration-thank-you.svg'

function Thanks({numClicked}) {
  return (
    <>
          <div id='imageContainer' className='mb-6 xl:mb-8'>
            <img src={ThanksImg} alt='thanks'/>
          </div>
          <div id='resultContainer' className='bg-darkBlue py-[5px] px-3 rounded-[22.5px] text-orange font-["Overpass"] mb-6 text-[14px] leading-[22px] xl:mb-9 xl:text-[15px] xl:leading-[24px]'>
            <p>You selected <span id='theChoice'>{numClicked}</span> out of 5</p>
          </div>
          <div id='thankYouTextContainer' className='text-center'>
            <div id='thankHeading' className='font-["Overpass"] text-white font-bold text-2xl mb-[10px] xl:text-[28px]'>
              <h1>Thank you!</h1>
            </div>
            <div id='thankBody' className='font-["Overpass"] text-lightGray text-sm leading-[22px] xl:text-[15px] xl:leading-[24px]'>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
          </div>
    </>
  )
}

export default Thanks