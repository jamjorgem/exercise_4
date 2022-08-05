import React, { useState } from 'react';

const Component1 = () => {

    let red = 0;
    let green = 0;
    let blue = 0;

    let styles = {
        backgroundColor: `rgb(${red},${green},${blue})`,
        width: '255px',
        height: '255px'
    }

    const [color, setColor] = useState(styles);

    function changecolor() {
        red = Math.floor(Math.random() * 250);
        green = Math.floor(Math.random() * 250);
        blue = Math.floor(Math.random() * 250);

        setColor(
            styles = {
                backgroundColor: `rgb(${red},${green},${blue})`,
                width: '255px',
                height: '255px'
            }
        );
    }



    function MouseEnter() {
        console.log('mouse enter');


        changecolor();
    }

    function mouseleave() {
        console.log('salio mouse');
    }



    return (
        <div>
            <div onMouseEnter={MouseEnter} onMouseLeave={mouseleave} style={color}></div>
        </div >
    );
}

export default Component1;
