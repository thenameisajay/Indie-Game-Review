import {Orbitron } from 'next/font/google'; // This is the font we are using in our app and we are importing it here.
import { Exo_2 } from 'next/font/google';
export const orbitron = Orbitron({
    subsets: ['latin'],
    variable:"--font-orbitron"
});

export const exo_2 = Exo_2({
    subsets: ['latin'],
    variable:"--font-exo-2"
});
