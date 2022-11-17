import {Animation3} from '../Animations'
import Opacity from '../springs/Opacity'


export const SecondFrame = () => {
  return (
    // mobil:w-3/4
    <div className='flex flex-col text-center justify-center items-center w-full md:w-auto '>
     {/* mobil:text-base  mobil:w-3/7 mobil:ml-40 */}
          <div className='flex flex-col gap-3 w-full md:w-auto items-center'>
              <div className='flex text-white text-base md:text-2xl lg:text-3xl max-w-9775 text-center font-semibold font-opensans leading-6 lg:leading-8 sm:text-xl px-8 mb-5'>
                      We believe our business has greater potential for even more growth with the creation of a new listed pure-pay alternative asset manager.
              </div>
            
              <div className='items-center  flex gap-3 w-full justify-center'>
                  <div className='mr-72 md:mt-10'>
                    <svg width="268" height="168" viewBox="0 0 268 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="264.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
                          <line x1="264.5" y1="4" x2="264.5" y2="54" stroke="#F5F5F5"/>
                          <line x1="264.5" y1="4" x2="264.5" y2="84" stroke="#F5F5F5" className="md:visible invisible"/>
                          <line x1="0.5" y1="168" x2="0.5" y2="83" stroke="#F5F5F5" className="md:visible invisible"/>
                          <line x1="1" y1="83.5" x2="265" y2="83.5" stroke="#F5F5F5" className="md:visible invisible"/>
                          </svg>
                  </div>
              </div>
          </div>

          <div className='flex w-full flex-col-reverse md:flex-row justify-center items-center md:gap-10 gap-0 -mt-52 md:py-8 md:-mb-6 lg:-mt-22 md:px-2 '>
              <div className='flex flex-col   w-full  justify-center text-center md:text-left gap-3  -mt-0 md:mt-0 '>
                  <div className='text-white md:text-3xl lg:text-4.75xl  lg:font-mediumplus text-xl  font-semibold  font-playfair md:w-full '>
                    Two entities, distinct offerings
                  </div>
                  <div className='text-white md:text-base text-xs font-semibold px-10 lg:px-0  md:px-0 '>
                    Each with day-to-day operations preserved and the focus of a dedicated management team.
                  </div>
              </div>
              
              <div className=' min-w-40 sm:max-w-40 mt-10 '>
                <Opacity bottomOffset='400px' topOffset='-400px'>
                    <Animation3 />
                </Opacity>
              </div>
          
        
          </div>

          <div className='-mt-12 md:-mt-24  '>
                <svg width="554" height="139" viewBox="0 0 554 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="100" stroke="#F5F5F5" className="md:visible invisible"/>
                <line x1="553.5" y1="139" x2="553.5" y2="99" stroke="#F5F5F5" className="md:visible invisible"/>
                <line x1="1" y1="99.5" x2="554" y2="99.5" stroke="#F5F5F5" className="md:visible invisible"/>
                <line x1="264.5" y1="139" x2="264.5" y2="70" stroke="#F5F5F5" className="md:invisible"/>
                </svg>


          </div>
    </div>
  )
}

export default SecondFrame