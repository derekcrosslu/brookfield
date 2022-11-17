
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
import useTWMediaQueriesTemplate from './utils/getTWMediaQueriesTemplate'
import useMediaQueries from './utils/getMediaQueries';
import useWindowDimensions from './utils/getWindowDimensions';

const App = () => {
  const [inView, setInview] = useState(false);
  const { screenSize, screenSizeH } = useMediaQueries();
  const { width, height } = useWindowDimensions();
  // const [numPages, setNumPages] = useState(5);
  const  twStyles  = useTWMediaQueriesTemplate
  const mobileVersion  = width < 900  
  
  
  // const numPages = mobileVersion ? 5.2 : 5
  
  
  const numPages = screenSizeH === 'mobileH3' ? 5.2 :
  screenSizeH === '2xlH2' ? 4.6 :
  screenSizeH === '3xlH2' ? 4.6 :
  screenSizeH === '4xlH3' ? 4.6 : 5
  
  console.log('numPages: ', numPages);
  // useEffect(() => {
  //   console.log('screenSizeH',screenSizeH);
    
  //   switch (screenSizeH) {
  //   case 'mobileH3':
  //     console.log('mobileH3');
  //     setNumPages(5)
  //     break;
  //   case 'sm':
  //     console.log('sm');
  //     break;
  //   case 'mdH3':
  //     console.log('mdH3');
  //     setNumPages(5.2)
  //     break;
  //   case 'lg':
  //     console.log('lg');
  //     break;
  //   case 'xl':
  //     console.log('xl');
  //     break;
  //   case '2xlH2':
  //     console.log('2xlH2');
  //     setNumPages(4.6)
  //     break;
  //   case '3xlH2':
  //     console.log('3xlH2');
  //     setNumPages(5)
  //     break;
  //   case '4xlH3':
  //     console.log('4xlH3');
  //     setNumPages(5)
  //     break;
  //   default:
  //     break;
  //   }
  // }, [screenSizeH]);


  return (
  
<Parallax
      pages={14}
      style={{ top: '0', left: '0', backgroundColor: '#002A4E', display:'flex' }}
    >
{/* Page 1 */}
{/* Intro text only */}
      <ParallaxLayer
        offset={0}
        speed={1}
        className='flex flex-col text-center justify-center items-center px-2'
        style={{  height: '80vh' }}
      >
<TitleFrame />

      </ParallaxLayer>
      
{/* Page 2 */}
{/* Evolving to offer the best of both worlds */}
      <ParallaxLayer
        offset={0.5}
        speed={0}
        className='flex flex-col text-center justify-start items-center px-2'
        style={{ height: 'fit-content' }}
      >
<IntroFrame />

<FirsthFrame  />

      </ParallaxLayer>
{/* Page 3 */}
{/* Two distinct offerings - text and animation */}
      <ParallaxLayer
        offset={1}
        speed={0}
        // className='flex justify-center items-center mt-80 md:mt-40 md:mt-60 lg:mt-80 xl:mt-120  2xl:mt-120  3xl:mt-96   4xl:mt-40 px-2'
        className={twStyles('App','page3').plusHeight}
       style={{ height: 'fit-content' }}
      >

<SecondFrame />

      </ParallaxLayer> 
{/* Page 4
{/* Another way to invest with Brookfield - text and animation */}
      <ParallaxLayer
            offset={1.5}
            speed={0}
        // className='flex flex-col justify-center items-center mt-100 md:mt-120 lg:mt-140 xl:mt-180 2xl:mt-180  3xl:mt-140   4xl:mt-40 px-2'
        className={twStyles('App','page4').plusHeight}
        // sticky={{ start: 3, end: 4 }}
     style={{ height: 'fit-content' }}
      >

<ThirdFrame />

          
       
      </ParallaxLayer>
{/* Page 5 */}
{/* Brookfield corporation - animation and text */}
      <ParallaxLayer
            offset={2}
        //  offset={0.1}
            speed={0}
        // className='flex  text-center justify-center items-center mt-130 md:mt-120 lg:mt-160 bg-blue-300  xl:mt-200 2xl:mt-200  3xl:mt-150 4xl:mt-40 px-2'
        className={twStyles('App','page5').plusHeight}
        style={{ height: 'fit-content' }}
      >

        <FourthFrame mobileVersion={mobileVersion} />
        
      </ParallaxLayer>  
{/* Page 6 */}
{/* Brookfield Asset management - animation and text - iconrow animation */}

      <ParallaxLayer
        offset={2.2}
        speed={0}
      style={{ height: 'fit-content' }}
        // className='flex  text-center justify-center items-center mt-80 md:mt-100 lg:mt-140 xl:mt-210  2xl:mt-200   3xl:mt-160 4xl:mt-20'
        className={twStyles('App','page6').plusHeight}
      >
                      <Waypoint
                        onEnter={() => setInview(true)}
                        bottomOffset={'550px'}
                        topOffset={'-400px'}
                        onLeave={() => setInview(false)}
                      />
        

{ mobileVersion?
<FifthFrame mobileVersion={mobileVersion} />:
inView ? 
<FifthFrame mobileVersion={mobileVersion} /> :null }

        

      </ParallaxLayer>
{/* Page 7 */}
{/* Proven strategy - animation and text - hand animation */}
        <ParallaxLayer
          offset={2.8}
          speed={0}
        // className='flex flex-col text-center justify-center items-center mb-0  mt-100 md:mt-120  lg:mt-160 xl:mt-240  2xl:mt-250  3xl:mt-200 4xl:mt-40 px-2'
        className={twStyles('App','page7').plusHeight}
       style={{ height: 'fit-content' }}
      >

<SixthFrame />
   
      </ParallaxLayer>
{/* Page 8 */}
{/* Footer */}
      <ParallaxLayer
          offset={3.4}
        speed={0}
        style={{ height: 'fit-content' }}
        //  className=' mt-200 md:mt-200  4xl:mt-10  3xl:mt-210 2xl:mt-260  xl:mt-250 lg:mt-180'
                className={twStyles('App','page8').plusHeight}
      >

<SeventhFrame />

      </ParallaxLayer>
</Parallax>
  
  )
}

export default App;





