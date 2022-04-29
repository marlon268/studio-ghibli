import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Starter } from '../components/UI/organismos/AnimationBanners/Starter'

const starter = () => {
    
  const [starter, setStarter] = useState(true);
  const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setStarter(false);
        }, 2500);
    }, []);

    const goHome = () => {
        router.push('/home');
    }


  return (
    <React.Fragment>
      {
        starter ? (<Starter />) : (goHome())
      }
    </React.Fragment>
  )
}

export default starter