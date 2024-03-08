"use client"
import React, { useState } from 'react';
import Image from "next/image";

const MyComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`${clicked ? 'h-auto w-full' : 'h-full'}`}>
        {!clicked && (
        <button 
          onClick={handleClick}
          className={`w-64 mt-4 py-2 text-center bg-purple-500 text-white border-white border font-bold rounded-full shadow-[0_0_1rem_0px_#9d5ae3] ${clicked ? 'animate-wiggle' : ''}`}
        >
            Comment
        </button>
        )}

        {clicked && (
            <div>
              <hr class="mt-14 border-1 border-purple-500" />
              <p>
                <div className='flex mt-4 mb-2'>
                  <div className="mr-6 mt-1 h-10 w-10 border-2 border-slate-500 bg-slate-500 rounded-full">
                    <Image alt='user_img'/>
                  </div>
                  <p className='mt-3 mr-2 font-bold'>[Username]</p>
                  <p className='mt-3'>x days ago</p>
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum numquam 
                    corrupti quasi maiores laboriosam neque repudiandae quibusdam, quam ipsam tempore 
                    itaque obcaecati et ratione debitis, unde iusto omnis id unde iusto omnis id omnis id
                    itaque obcaecati et ratione debitis, unde iusto omnis id unde iusto omnis id omnis id
                    omnis id unde iusto omnis id omnis id
                    </p>
                </div>

                <div className='ml-8 pl-4 pb-6 border-purple-500 rounded-bl-3xl border-l-2 border-b-2'>
                    <div className='flex mt-4 mb-2'>
                      <div className="mr-6 mt-1 h-10 w-10 border-2 border-slate-500 bg-slate-500 rounded-full">
                        <Image alt='user_img'/>
                      </div>
                      <p className='mt-3 mr-2 font-bold'>[Username]</p>
                      <p className='mt-3'>x days ago</p>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum nquam 
                        corrupti quasi maiores laboriosam neque repudiandae quibusdam, quam ipsam tempore 
                        itaque obcaecati et ratione debitis, unde iusto omnis id unde iusto omnis id omnis id
                        itaque obcaecati et ratione debitis, unde iusto omnis id unde iusto omnis id omnis id
                        omnis id unde iusto omnis id omnis id
                      </p>
                    </div>
                </div>
              </p>
         
            </div>
            
        )}
    </div>
    
  );
};

export default MyComponent;

