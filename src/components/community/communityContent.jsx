"use client"
import React, { useState } from 'react';

const Content = () => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${expanded ? 'h-auto' : 'h-full'} md:h-auto`}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum numquam corrupti quasi maiores laboriosam neque repudiandae quibusdam, quam ipsam tempore itaque obcaecati et ratione debitis, unde iusto omnis id unde iusto omnis id omnis id
      </p>
      {!expanded && (
        <a href="#" onClick={handleReadMore} className="text-purple-500 underline underline-offset-4">
          read more
        </a>
      )}
      {expanded && (
        <div>
          <p>Lorem ipsum dolor amet consectetur adipisicing elit. Doloremque illum numquam corrupti quasi maiores laboriosam neque repudiandae quibusdam, quam ipsam tempore itaque obcaecati et ratione debitis, unde iusto omnis id unde iusto omnis id omnis id
            </p>  
            
        </div>
      )}
    </div>
  );
};

export default Content;
