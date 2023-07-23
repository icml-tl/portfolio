import './App.css';
import me from './assets/SmallMe.jpg'
import React, { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   const text = document.querySelector('.text p');
  //   text.innerHTML = text.innerText.split('').map((char, i) => (
  //     <span className="text-char" key={i} style={{ transform: `rotate(${i * 8.2}deg)` }}>
  //       {char}
  //     </span>
  //   ));
  // }, []);

  return (
   <div className='w-full flex  overflow-hidden flex-wrap h-screen bg-[#1c1917]'>
      <div className='w-[500px] h-screen rounded-lg'>
            <div className='m-3  rounded-3xl border h-[98%]'>
                  <div className='w-full text-white p-10 flex justify-between'>
                        <div>
                          <p className='text-3xl relative P-1 font-bold '>ISMAIL<sup className='text-medium font-thin absolute top-0'>Ⓣ</sup></p>
                        </div>
                        <div className='font-bold text-sm'>
                            <p>Front-End developer</p>
                        </div>
                  </div>  
                  <div className='w-full  p-10 flex justify-center items-center'>
                      <img className='rounded-3xl bg-cover w-80 h-80 object-cover' src={me} alt="" />
                  </div>
                  <div className='flex text-2xl text-slate-50 font-medium text-ellipsis  justify-center w-full'>
                        <div className='text-center'>
                          <h3 className=' underline'>Ismailstudies5@gmail.com</h3>
                          <p>Casablanca-Morocco</p>
                        </div>
                  </div>
                  <div className='w-full gap-2 flex justify-center mt-16'>
                                <div className='w-16 h-16 border rounded-full grid place-items-center hover:animate-bounce '><svg className=' animate-bounce hover:animate-none text-purple-500 lucide lucide-instagram' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
                                <div className='w-16 h-16 border rounded-full grid place-items-center hover:animate-bounce ' ><svg className='animate-bounce hover:animate-none' width={25} height={25} fill="#833abe" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1Zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1Zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2h13.782Zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-5.173-.988c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452.88.172 1.783.176 2.664.01a6.664 6.664 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85h-.001Z" /></svg></div>
                                <div className='w-16 h-16 border rounded-full grid place-items-center hover:animate-bounce'><svg className='animate-bounce hover:animate-none text-purple-500 lucide lucide-github' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></div>
                                <div className='w-16 h-16 border rounded-full grid place-items-center hover:animate-bounce '><svg className=' animate-bounce hover:animate-none text-purple-500 lucide lucide-linkedin' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
                  </div>

                  <div className='w-full grid place-items-center mt-10'>
                        <button className='flex justify-center items-center w-80 bg-purple-700 h-12 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                              Contact Me
                        </button>
                  </div>
            </div>
      </div>
      <div className='w-96 h-screen flex justify-center p-8 flex-1  rounded-lg'>
            <div className=' w-[80%]  text-white '>
                    <div className='grid place-content-start md:mt-5 mt-0'>
                      <div className='flex  justify-center gap-2 border rounded-full w-40 h-10'>
                        <svg className='hover:text-purple-500 mt-2 lucide lucide-home' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        <p className='my-auto text-xs font-medium'>INTRODUCE</p>
                      </div>
                    </div>
                    <div className='text-[65px]  text-white  tracking-widest font-medium mt-16'>
                        <div >
                          Say Hi from <span className='text-purple-500 '>Icml</span>,
                        </div>
                        <div style={{ margin: 0, padding: 0, lineHeight: '1' }}>
                          Framer Designer and
                        </div>
                        <div style={{ margin: 0, padding: 0, lineHeight: '1' }}>
                          Developer
                        </div>
                    </div>
                    <div className='mt-16 text-gray-400 animate-bounce '>
                        <p>Angular / React.js  developer :) </p>
                    </div>

                          <div className="bg-red-400 grid place-items-end">
                              <div className="circle relative w-48 h-48 rounded-full bg-red-300 flex justify-center items-center">
                                <div className="logo absolute w-36 h-36 bg-blue-50 rounded-full"></div>
                                <div className="text animate-spin absolute w-full h-full">
                                  <p>Explore my projects</p>
                                </div>
                              </div>
                            </div>
                    















            </div>
      </div>
      <div className='w-24 h-screen  grid place-items-center  rounded-lg'>
          <div className='text-gray-500  border  space-y-10 rounded-full p-4'>
              <div><svg className='hover:text-purple-500 lucide lucide-home' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <div><svg className='hover:text-purple-500 lucide lucide-user' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <div><svg className='hover:text-purple-500 lucide lucide-briefcase' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
              <div><svg className='hover:text-purple-500 lucide lucide-framer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"/></svg></div>
              <div><svg className='hover:text-purple-500 lucide lucide-mails' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/><path d="M2 8v11c0 1.1.9 2 2 2h14"/></svg></div>
          </div>        
      </div>
   </div>
  );
}


export default App;
