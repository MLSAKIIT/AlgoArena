"use client"
import React, { useState } from 'react';
import Image from "next/image";
import CommunityPosts from "./communityPosts";
import { PiFunnel } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { VscTriangleUp } from "react-icons/vsc";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import Link from 'next/link';

const Community = () => {

    const buttonNames = ["Popularity", "Recent", "Upvotes", "Domain"];

    const buttonElements = buttonNames.map((name, index) => (
    <button
        key={index}
        className="w-22 h-10 md:w-24 ml-2 md:ml-4 text-center bg-white text-purple-500 
        border-white border font-bold rounded-full shadow-[0_0_1rem_0px_#9d5ae3]
        hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white"
    >
        {name}
    </button>
    ));

    const dropdownContent = (
      <div className="dropdown-content">
        {buttonNames.map((name, index) => (
          <a key={index} href="#" className="block px-4 py-2 border rounded-sm text-white bg-purple-500 hover:bg-white hover:text-purple-500 active:bg-white active:text-purple-500">
            {name}
          </a>
        ))}
      </div>
    );

    const [isOpen, setIsOpen] = useState(false);

    return (
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 m-4 md:m-8">
          <div className='flex'>
            <div className='flex w-10/12 h-10 mb-8 mr-6 bg-purple-500 text-white
            border-white border font-bold rounded-lg shadow-[0_0_1rem_0px_#9d5ae3]'>
              <Image 
                src="/search.png"
                alt='searchImg'
                width={25}
                height={25}
                className='m-2 ml-6'
                />
                <p className='m-2'>Search for..</p>
                
            </div>
            <div className='w-24 h-10 mb-8 flex justify-center items-center bg-purple-500 text-white border-white border font-bold rounded-lg shadow-[0_0_1rem_0px_#9d5ae3]'>
              <PiFunnel className='text-3xl '/>
            </div>
          </div>

        <div>   
              
          <div className="relative inline-block text-left md:hidden">
            <div>
              <button onClick={() => setIsOpen((prev) => !prev)} 
                    className='flex items-center justify-center p-4 w-[150px] h-[40px] font-bold border-2 border-purple-500 text-white rounded-lg absolute bottom-0'>
                      SORT BY
                {!isOpen ? (
                  <RxCaretDown className='h-14 text-4xl' />
                ) : (
                  <RxCaretUp className='h-14 text-4xl'/>
                )}
              </button>
            {isOpen && (
              <div className='absolute w-[150px]'>
                {dropdownContent}
              </div>
            )}
            </div>
          </div>

          <div className="p-4 h-20 mb-4 border-solid border-purple-500 rounded-lg border-2 hidden md:flex items-center justify-center">
           <div className='flex'>
            <div className="font-bold text-white py-1">
              SORT BY:
              {buttonElements}
            </div>
           </div>
          </div>
       
        </div>
          
          
            <CommunityPosts />
            <CommunityPosts />
            <CommunityPosts />

          
      </div>
        


        <div className="w-full md:w-5/12 m-4 md:m-8">
          <div class="w-656 h-300 p-4 border-solid border-purple-500 rounded-lg border-2">
            <p className="font-bold text-white">Welcome, tech enthusiast!</p>

            <p className="text-white">Glad you&apos;ve found a way to our community page. It&apos;s a vibrant space filled with passionate
                people just like you, all eager to discuss, learn, and share about their latest tech trends, gadgets, and ideas.
            </p>

            <hr class="mt-4 border-t border-purple-500"></hr>

            <div className="mt-4 py-2 text-center bg-purple-500 text-white border-white border font-bold rounded-full shadow-[0_0_1rem_0px_#9d5ae3]">
            <Link href="/create-post">Create Post</Link>
            </div>
                    
            <div
              className="mt-4 py-2 text-center bg-white text-purple-500 border-white border font-bold rounded-full shadow-[0_0_1rem_0px_#9d5ae3]">
                Create Community
            </div>
          </div>

          <div class="w-656 h-300 p-4 mt-8 border-solid border-purple-500 rounded-lg border-2">
            <p className="text-white text-3xl font-bold">Recently Viewed Posts</p>

            <p className="text-white font-bold pt-4">Heading of recent post</p>

            <p className="text-white">Glad you&apos;ve found a way to our community page. It&apos;s a vibrant space filled with passionate
              people just like you, all eager to discuss, learn, and share about their latest tech trends, gadgets, and ideas.
            </p>

            <div className='flex mt-4'>
              <CgProfile className='mr-2 mt-1'/>
              <p>XX views</p>
              <VscTriangleUp className='ml-4 mr-2 text-2xl'/>
              <p>XX upvotes</p>
            </div>

          </div>
        </div>
      </section>
    );
  };
  
  export default Community;
  