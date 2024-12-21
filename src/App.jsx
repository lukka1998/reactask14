import React, { useState, useEffect } from 'react';
import image from "../src/assets/bg-stars.svg"
const calculateCountdown = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

function App() {
  const targetDate = new Date('2024-12-31T23:59:59').getTime(); // Replace with your desired target date

  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className='flex justify-between items-center flex-col h-[100vh]  bg-cover bg-center bg-no-repeat bg-fixed bg-hero bg-brand'  >
      <h2 className='mt-[150px] text-white text-center font-bold font-red-hat-text text-2xl tracking-widest uppercase'>We're Launching Soon</h2>
      <div className='flex gap-4 '>
        <div className='flex flex-col justify-center items-center'>
        <svg  xmlns="http://www.w3.org/2000/svg" width="148" height="150" viewBox="0 0 148 150" fill="none">
        <rect width="148" height="150" rx="8" fill="#191A23"/>
        <rect width="148" height="140" rx="8" fill="#343650"/>
        
        <text x="50%" y="85" textAnchor="middle" fontWeight={700}   fill="#FB5E84" className="text-6xl font-bold leading-tight tracking-tighter"style={{ fontFamily: '"Red Hat Text"' }} >{countdown.days}</text>
        <svg x="0" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
     <circle  cy="6" r="6" fill="#191A23"/>
      </svg>
      <svg x="142" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
  <circle cx="6" cy="6" r="6" transform="matrix(-1 0 0 1 12 0)" fill="#191A23"/>
</svg>
      </svg>
          <div className='text-gray-600 text-center font-bold font-sans text-sm tracking-widest'>DAYS</div>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <svg  xmlns="http://www.w3.org/2000/svg" width="148" height="150" viewBox="0 0 148 150" fill="none">
        <rect width="148" height="150" rx="8" fill="#191A23"/>
        <rect width="148" height="140" rx="8" fill="#343650"/>
        
        <text x="50%" y="85" textAnchor="middle" fontWeight={700}   fill="#FB5E84" className="text-6xl font-bold leading-tight tracking-tighter"style={{ fontFamily: '"Red Hat Text"' }} >{countdown.hours}</text>
        <svg x="0" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
     <circle  cy="6" r="6" fill="#191A23"/>
      </svg>
      <svg x="142" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
  <circle cx="6" cy="6" r="6" transform="matrix(-1 0 0 1 12 0)" fill="#191A23"/>
</svg>
      </svg>
          <div className='text-gray-600 text-center font-bold font-sans text-sm tracking-widest' >HOURS</div>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <svg  xmlns="http://www.w3.org/2000/svg" width="148" height="150" viewBox="0 0 148 150" fill="none">
        <rect width="148" height="150" rx="8" fill="#191A23"/>
        <rect width="148" height="140" rx="8" fill="#343650"/>
        
        <text x="50%" y="85" textAnchor="middle" fontWeight={700}   fill="#FB5E84" className="text-6xl font-bold leading-tight tracking-tighter"style={{ fontFamily: '"Red Hat Text"' }} >{countdown.minutes}</text>
        <svg x="0" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
     <circle  cy="6" r="6" fill="#191A23"/>
      </svg>
      <svg x="142" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
  <circle cx="6" cy="6" r="6" transform="matrix(-1 0 0 1 12 0)" fill="#191A23"/>
</svg>
      </svg>
          <div className='text-gray-600 text-center font-bold font-sans text-sm tracking-widest'>MINUTES</div>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <svg  xmlns="http://www.w3.org/2000/svg" width="148" height="150" viewBox="0 0 148 150" fill="none">
        <rect width="148" height="150" rx="8" fill="#191A23"/>
        <rect width="148" height="140" rx="8" fill="#343650"/>
        
        <text x="50%" y="85" textAnchor="middle" fontWeight={700}   fill="#FB5E84" className="text-6xl font-bold leading-tight tracking-tighter"style={{ fontFamily: '"Red Hat Text"' }} >{countdown.seconds}</text>
        <svg x="0" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
     <circle  cy="6" r="6" fill="#191A23"/>
      </svg>
      <svg x="142" y="47%" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
  <circle cx="6" cy="6" r="6" transform="matrix(-1 0 0 1 12 0)" fill="#191A23"/>
</svg>
      </svg>
          <div className='text-gray-600 text-center font-bold font-sans text-sm tracking-widest'>SECONDS</div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="265" viewBox="0 0 1440 196" fill="black">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 83.1514L351.496 0L490.331 83.1514L562 41.5757L884 0L1041.47 83.1514L1137.28 41.5757L1188.61 69.3355L1394.3 0L1440 29.3171V265H0V83.1514Z" fill="#2F2439"/>
  <svg   x="50%" y="50%" xmlns="http://www.w3.org/2000/svg" width="136" height="24" viewBox="0 0 136 24" fill="none">
  <path className=' hover:fill-[#FB5E84] cursor-pointer' d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="#8385A9"/>
  <path className=' hover:fill-[#FB5E84] cursor-pointer' fill-rule="evenodd" clip-rule="evenodd" d="M124 0C120.741 0 120.333 0.014 119.053 0.072C114.695 0.272 112.273 2.69 112.073 7.052C112.014 8.333 112 8.741 112 12C112 15.259 112.014 15.668 112.072 16.948C112.272 21.306 114.69 23.728 119.052 23.928C120.333 23.986 120.741 24 124 24C127.259 24 127.668 23.986 128.948 23.928C133.302 23.728 135.73 21.31 135.927 16.948C135.986 15.668 136 15.259 136 12C136 8.741 135.986 8.333 135.928 7.053C135.732 2.699 133.311 0.273 128.949 0.073C127.668 0.014 127.259 0 124 0ZM124 2.163C127.204 2.163 127.584 2.175 128.85 2.233C132.102 2.381 133.621 3.924 133.769 7.152C133.827 8.417 133.838 8.797 133.838 12.001C133.838 15.206 133.826 15.585 133.769 16.85C133.62 20.075 132.105 21.621 128.85 21.769C127.584 21.827 127.206 21.839 124 21.839C120.796 21.839 120.416 21.827 119.151 21.769C115.891 21.62 114.38 20.07 114.232 16.849C114.174 15.584 114.162 15.205 114.162 12C114.162 8.796 114.175 8.417 114.232 7.151C114.381 3.924 115.896 2.38 119.151 2.232C120.417 2.175 120.796 2.163 124 2.163ZM117.838 12C117.838 8.597 120.597 5.838 124 5.838C127.403 5.838 130.162 8.597 130.162 12C130.162 15.404 127.403 18.163 124 18.163C120.597 18.163 117.838 15.403 117.838 12ZM124 16C121.791 16 120 14.21 120 12C120 9.791 121.791 8 124 8C126.209 8 128 9.791 128 12C128 14.21 126.209 16 124 16ZM128.965 5.595C128.965 4.8 129.61 4.155 130.406 4.155C131.201 4.155 131.845 4.8 131.845 5.595C131.845 6.39 131.201 7.035 130.406 7.035C129.61 7.035 128.965 6.39 128.965 5.595Z" fill="#8385A9"/>
  <path className=' hover:fill-[#FB5E84] cursor-pointer' d="M68 0C61.373 0 56 5.372 56 12C56 17.084 59.163 21.426 63.627 23.174C63.522 22.225 63.427 20.769 63.669 19.733C63.887 18.796 65.076 13.768 65.076 13.768C65.076 13.768 64.717 13.049 64.717 11.986C64.717 10.318 65.684 9.072 66.888 9.072C67.911 9.072 68.406 9.841 68.406 10.762C68.406 11.791 67.751 13.33 67.412 14.757C67.129 15.951 68.011 16.926 69.189 16.926C71.322 16.926 72.961 14.677 72.961 11.431C72.961 8.558 70.897 6.549 67.949 6.549C64.535 6.549 62.531 9.11 62.531 11.756C62.531 12.787 62.928 13.894 63.424 14.494C63.522 14.613 63.536 14.718 63.507 14.839L63.174 16.199C63.121 16.419 63 16.466 62.772 16.36C61.273 15.662 60.336 13.471 60.336 11.711C60.336 7.926 63.086 4.449 68.265 4.449C72.428 4.449 75.663 7.416 75.663 11.38C75.663 15.516 73.056 18.844 69.436 18.844C68.22 18.844 67.077 18.213 66.686 17.466L65.938 20.319C65.667 21.362 64.936 22.669 64.446 23.465C65.57 23.812 66.763 24 68 24C74.627 24 80 18.627 80 12C80 5.372 74.627 0 68 0Z" fill="#8385A9"/>
</svg>
</svg>
    
    </div>
    
  );
}

export default App;