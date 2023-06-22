import React, { useState } from "react"
import './App.css';
import Rating from './components/Rating';
import Thanks from './components/Thanks';


function App() {
  // declare state for entire app
  const [numClicked, setNumClicked] = useState('');  
  // define function to pass to child that will update the state for the entire app
  const changeRating = (newRating) => {
    setNumClicked(newRating);
  }
  return (
    <div className="App">
      <div id='contentWrapper' className='bg-veryDarkBlue h-screen flex flex-col justify-center items-center px-6'>
        <div id='ratingContainer' className='rounded-[15px] px-6 pt-6 pb-8 xl:pt-8 xl:pl-8 xl:pb-8 xl:pr-10'>
          <Rating changeRating={changeRating}/>
        </div>
        <div id='thankYouContainer' className='hidden rounded-[15px] px-6 pt-[42px] pb-[37px] flex flex-col items-center xl:py-[45px] xl:pl-8 xl:pr-10'>
          {/* pass overall state value to other component */}
          <Thanks numClicked={numClicked} />
        </div>
      </div>
    </div>
  );
}

export default App;
