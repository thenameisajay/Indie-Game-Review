import React from 'react';
import Heading from '@/components/Heading'; // Using alias for components folder.

// Next js uses file system routing. So, we can create a folder in app folder and add a page.jsx file in it.
export default function HomePage() {
    return (
        <div>
        <Heading>
            Home Page
        </Heading>
  <p>
    Only the best indie games, reviewed for you.
  </p>        
       
        </div>
    )   ;
};