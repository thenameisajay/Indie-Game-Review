import React from 'react';
import Heading from '@/components/Heading';
export default function HomePage() {
    return (
        <div>
            <Heading>Hollow Knight</Heading>
            <img src="/images/hollow-knight.jpg" alt="Hollow Knight"  className="" style={{height:"200px", width :"200px"}}/>
            <p>
                Hollow Knight is a 2D adventure/ Metroidvania game for PC, Mac, Linux, Nintendo Switch, PlayStation 4 and Xbox One!
            </p>
        </div>
    );
}