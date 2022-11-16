
import { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TitleFrame from './frames/TitleFrame'
import  IntroFrame  from './frames/IntroFrame'
import  SecondFrame  from './frames/SecondFrame'
import FirsthFrame from './frames/FirsthFrame'
import  ThirdFrame  from './frames/ThirdFrame'
import  FourthFrame  from './frames/FourthFrame'
import  FifthFrame  from './frames/FifthFrame'
import  SixthFrame  from './frames/SixthFrame'
import SeventhFrame from './frames/SeventhFrame'
import EighthFrame  from './frames/EightFrame'
import Opacity from './springs/Opacity'
import {Waypoint} from 'react-waypoint'


const App = () => {
  const [inView, setInview] = useState(false);


  return (
  
<Parallax
      pages={5}
      style={{ top: '0', left: '0', backgroundColor: '#002A4E' }}
    >
{/* Page 1 */}
{/* Intro text only */}
      <ParallaxLayer
        offset={0}
        speed={1}
        className='flex flex-col text-center justify-center items-center '
        style={{  height: '80vh' }}
      >
<TitleFrame />

      </ParallaxLayer>
      
{/* Page 2 */}
{/* Evolving to offer the best of both worlds */}
      <ParallaxLayer
        offset={0.5}
        speed={0}
        className='flex flex-col text-center justify-start items-center'
        style={{ height: '100vh' }}  
      >
<IntroFrame />

<FirsthFrame  />

      </ParallaxLayer>
{/* Page 3 */}
{/* Two distinct offerings - text and animation */}
      <ParallaxLayer
        offset={1}
        speed={0}
        className='flex justify-center items-center  sm:-mt-40 md:mt-20 lg:mt-80 xl:mt-120  2xl:mt-120  3xl:mt-96   4xl:mt-40   
                                                   '
        style={{ height: '60vh' }} 
      >

<SecondFrame />

      </ParallaxLayer> 
{/* Page 4
{/* Another way to invest with Brookfield - text and animation */}
      <ParallaxLayer
            offset={1.5}
            speed={0}
        className='flex flex-col justify-center items-center md:mt-120 lg:mt-180 xl:mt-180 2xl:mt-160  3xl:mt-140   4xl:mt-40   '
        // sticky={{ start: 3, end: 4 }}
         style={{ height: '55vh' }} 
      >

<ThirdFrame />

          
       
      </ParallaxLayer>
{/* Page 5 */}
{/* Brookfield corporation - animation and text */}
      <ParallaxLayer
            offset={2}
        //  offset={0.1}
            speed={0}
        className='flex  text-center justify-center items-center  lg:mt-180 bg-lightBlue  xl:mt-200 2xl:mt-180  3xl:mt-150 4xl:mt-40 md:mt-120 md:p-10'
        style={{ height: '50vh' }}
      >

<FourthFrame />
        
      </ParallaxLayer>  
{/* Page 6 */}
{/* Brookfield Asset management - animation and text - iconrow animation */}

      <ParallaxLayer
        offset={2.2}
        speed={0}
        style={{ height: '50vh' }}
         className='flex  text-center justify-center items-center  -mt-20 md:mt-96 lg:mt-180 xl:mt-210  2xl:mt-160   3xl:mt-160 4xl:mt-20 '
      >
                      <Waypoint
                        onEnter={() => setInview(true)}
                        bottomOffset={'550px'}
                        topOffset={'-400px'}
                        onLeave={() => setInview(false)}
                      />
{inView ?
<FifthFrame /> : null}
        
      </ParallaxLayer>
{/* Page 7 */}
{/* Proven strategy - animation and text - hand animation */}
        <ParallaxLayer
          offset={2.8}
          speed={0}
        className='flex flex-col text-center justify-center items-center mb-0 mt-0 md:mt-120 lg:mt-220 xl:mt-240  2xl:mt-200  3xl:mt-200 4xl:mt-40 '
         style={{ height: '30vh' }}
      >

<SixthFrame />
   
      </ParallaxLayer>
{/* Page 8 */}
{/* Footer */}
      <ParallaxLayer
          offset={3.4}
        speed={0}
         className=' 4xl:mt-10  3xl:mt-210 2xl:mt-200  xl:mt-250 lg:mt-240 md:mt-130'
      >

<SeventhFrame />

      </ParallaxLayer>
</Parallax>
  
  )
}

export default App;





