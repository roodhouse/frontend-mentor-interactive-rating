import './App.css';
import Rating from './components/Rating';
import Thanks from './components/Thanks';



function App() {
  return (
    <div className="App">
      <div id='contentWrapper' className='bg-veryDarkBlue h-screen flex flex-col justify-center items-center px-6'>
        <div id='ratingContainer' className='rounded-[15px] px-6 pt-6 pb-8'>
          <Rating />
        </div>
        <div id='thankYouContainer' className='hidden rounded-[15px] px-6 pt-[42px] pb-[37px] flex flex-col items-center'>
          <Thanks />
        </div>
      </div>
    </div>
  );
}

export default App;
