'use client';

import React, {useState} from 'react';
export default function ShareLinkButton(){
    const [clicked, setClicked] = useState(false);

function handleClick(){
    navigator.clipboard.writeText(window.location.href); // copy the current URL to the clipboard
  setClicked(true);
  setTimeout(() => setClicked(false), 2000);
};

    return(
        <button
        className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
        onClick={handleClick}

        >
         {clicked ? 'Copied!' : 'Share Link'}
        </button>
    );
}