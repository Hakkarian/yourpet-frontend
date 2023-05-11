import { useState } from 'react';
import { Link } from 'react-router-dom';

import moblogo from '../../../images/moblogo1x.png'
import tablogo from '../../../images/tablogo1x.png';
import logo from '../../../images/logo1x.png';



const AdaptiveLogo = () => {
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);

    console.log(window.innerWidth)
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmall(true);
      } else {
          setIsSmall(false)
      }
    if (window.innerWidth < 1280) {
        setIsMedium(true);
      } else {
        setIsMedium(false)
      }
    };

    window.addEventListener('resize', handleResize);
  return (
    <Link to="/main">
      <img
        src={
          isSmall
            ? moblogo : isMedium ? '../../../images/tablogo1x.png' : '../../../images/logo1x.png'
        }
        alt="Logo"
      />
    </Link>
  );
}

export default AdaptiveLogo