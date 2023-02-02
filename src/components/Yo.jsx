import { useEffect, useState } from 'react';

const Yo = () => {

  const [sizeColor, setSizeColor] = useState({ width: '50px', height: '50px', backgroundColor: 'white' });
  const [position, setPosition] = useState({ bottom: '0px',left: '0px' });

  useEffect(() => {

    const sizeMin = 30;
    const sizeMax = 100;
    const size = Math.floor(Math.random() * (sizeMax - sizeMin + 1)) + sizeMin;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const bottom = Math.floor(Math.random() * (windowHeight - size + 1));
    const left = Math.floor(Math.random() * (windowWidth - size + 1));

    const colors = ['aqua', 'magenta', 'yellow'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    setSizeColor({ width: `${size}px`, height: `${size}px`, backgroundColor: color });

    setPosition({ top: `${bottom}px`, left: `${left}px` });

    console.log(sizeColor);
    console.log(position);

  }, [position, sizeColor]);

  return (
    <div id='yo-container' style={position}>
      <div id='yo1' style={sizeColor}></div>
    </div>
  );
};

export default Yo;
