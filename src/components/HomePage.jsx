import React from 'react'
import me from '../assets/MeAgain.jpg'
import '../components/HomePage.css';

 

 function HomePage() {
    
const text = "Explore my projects";
const chars = text.split('');

  return (
    <>
      <div className='w-96 h-screen flex justify-center p-8 flex-1 rounded-lg'>
            <div className=' w-[80%] ml-10  text-white '>
                    <div className='Onload grid place-content-start md:mt-5 mt-0'>
                      <div className='flex text-[#15803d]  justify-center gap-2 border border-[#15803d] rounded-full w-40 h-10'>
                        <svg className=' mt-2 lucide lucide-home' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        <p className='my-auto text-xs font-medium'>INTRODUCE</p>
                      </div>
                    </div>
                    <div className=' Onload text-[70px]  text-white  tracking-widest font-medium mt-16'>
                        <div >
                          Say Hi from <span className='text-[#15803d] '>Icml</span>,
                        </div>
                        <div style={{ margin: 0, padding: 0, lineHeight: '1' }}>
                          Framer Designer and
                        </div>
                        <div style={{ margin: 0, padding: 0, lineHeight: '1' }}>
                          Developer
                        </div>
                    </div>
                    <div className='Onload mt-16 text-gray-400 animate-bounce '>
                        <p>Angular / React.js  developer :) </p>
                    </div>

                    <div className=" grid place-items-end">
                          <div className="Onload circle relative w-48 h-48 rounded-full  flex justify-center items-center">
                            <div className="logo absolute flex justify-center items-center w-36 h-36 bg-transparent rounded-full">
                            <svg width={46} height={46} fill="#15803d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="m13 16.172 5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172Z" />
                            </svg>
                            </div>
                            <div className="text animate-spin-slow absolute w-full h-full">
                              {chars.map((char, i) => (
                                <span className="text-char" key={i} style={{ transform: `rotate(${i * 18.2}deg)` }}>
                                  {char}
                                </span>
                                
                              ))}
                            </div>
                          </div>
                     </div>
                     <div className='Onload text-[70px] flex flex-wrap  gap-20 text-[#15803d] to-blue-400'>
                                <div className='font-medium uppercase tracking-tight'>
                                  <p>12+</p>
                                  <div className='text-gray-400 ml-4 text-lg tracking-normal'>
                                    <p style={{ margin: 0, padding: 0, lineHeight: '1' }}>Months</p>
                                    <p style={{ margin: 0, padding: 0, lineHeight: '1' }}>of Experience</p>
                                  </div>
                                  </div>
                                <div>
                                <div className='font-medium uppercase tracking-tight'>
                                  <p>10+</p>
                                  <div className='text-gray-400 ml-4 text-lg tracking-normal'>
                                    <p style={{ margin: 0, padding: 0, lineHeight: '1' }}>Poject</p>
                                    <p style={{ margin: 0, padding: 0, lineHeight: '1' }}>completed</p>
                                  </div>
                                  </div>
                                </div>     
                     </div>
            </div>
      </div>
    </>
  )
}
export default HomePage;

