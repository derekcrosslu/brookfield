import { Animation4 } from '../Animations'
import Opacity from '../springs/Opacity'
import { useState, useEffect } from 'react';
import { log } from 'console';

function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
return { width, height};
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



export const ThirdFrame = () => {
  const { width, height } = useWindowDimensions();

  console.log(width, height);
  
  
  return (
    <div className='flex flex-col md:flex-row w-full md:w-auto items-center'>
      <Opacity  twstyles=' mt-10 md:-mt-28  md:mr-10 min-w-40  md:min-w-9777 sm:max-w-40'  bottomOffset='400px' topOffset='-400px'>
      <Animation4 />
      </Opacity>
      <div className='flex flex-col -mt-10 md:mt-0  md:w-97 w-full'>
        <div className={'flex flex-col w-full md:w-97 justify-center text-center md:text-left gap-3 mb-20 md:mb-10 md:mt-0'}>
                  <div className='text-white md:text-3xl lg:text-4.75xl lg:font-mediumplus text-xl font-bold font-playfair px-10 lg:px-0 md:px-0'>
                    Another way to invest with Brookfield
                  </div>
                  <div className='text-white md:text-base text-xs  font-semibold px-5 lg:px-0 md:px-0'>
                    Investors looking for a pure-play asset manager to invest in-one with the backing of a company with over [50] years of investing experience and a strong track record of delivering returns to shareholders
                    </div>
              </div>
        <div className='md:mb-0 -mt-10 md:-mt-4 flex justify-center md:justify-start '>
          <svg width="333" height="168" viewBox="0 0 333 168" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3.5" cy="164.5" r="3.5" transform="rotate(-180 3.5 164.5)" fill="#F5F5F5" className="md:visible invisible"/>
              <line x1="3.5" y1="164" x2="3.5" y2="84" stroke="#F5F5F5" className="md:visible invisible"/>
              <line x1="332.5" y1="85" x2="332.5" stroke="#F5F5F5" className="md:visible invisible"/>
              <line x1="3" y1="84.5" x2="333" y2="84.5" stroke="#F5F5F5" className="md:visible invisible"/>
              <line x1="166.5" y1="80" x2="166.5" y2="0" stroke="#F5F5F5" className="md:invisible"/>
              <circle cx="166.5" cy="80" r="3.5" fill="#F5F5F5" className="md:invisible"/>
              </svg>




        </div>
      </div>
      
    </div>
  )
}

export default ThirdFrame