"use client"
import React, { useState } from 'react';
import Image from "next/image";
import CommunityContent from "./communityContent";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { FaShare } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import CommunityComment from "./communityComment";

const CommunityPosts = () => {
   
    const posts = [
      {
        category: "Web Development",
        user: "User [xxxx]",
        date: "DD/MM/YY",
        title: "Some Article about WebDev",
      },
    ];
  
    const postElements = posts.map((post, index) => (
        <div>
            <div key={index} className=" border-solid border-purple-500 rounded-lg border-2 p-4 text-white">
              <div className='flex'>
                <div className="mr-6 mt-1 h-10 w-10 border-2 border-slate-500 bg-slate-500 rounded-full">
                  <Image/>
                </div>
                <div>
                  <p className="font-bold">From: {post.category}</p>
                  <p>User {post.user} Posted on {post.date}</p>
                </div>
              </div>
              <p className="font-bold text-3xl my-4">{post.title}</p>
              <div>
                <CommunityContent />
              </div>
              <div className='flex justify-between'>
                <div className='flex'>
                  <VscTriangleDown className='mr-2 text-5xl' />  
                  <p className='pt-3'>XX.X</p>
                </div>

                <div className='flex'>
                  <VscTriangleUp className='mr-2 text-5xl'/>  
                  <p className='pt-3'>XX.X</p>
                </div>

                <div className='flex pt-3'>
                  <FaShare className='mr-2 text-3xl'/>  
                  <p>XX.X</p>
                </div>

                <div className='flex pt-3'>
                  <TfiCommentAlt className='mr-2 text-3xl'/>  
                  <p>XX.X</p>
                </div>
              </div>
            </div>

            <div className='flex justify-end'>
                <CommunityComment />
            </div>
        </div>
      

    ));
  
    return (
      <section className="flex">
        <div className="my-4">
          {postElements}
        </div>
      </section>
    );
  };
  
  export default CommunityPosts;
  