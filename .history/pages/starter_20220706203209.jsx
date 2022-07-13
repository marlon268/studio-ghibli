import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { StarterAnimation } from '../components/UI/organismos/AnimationBanners/StarterAnimation'

const Starter = () => {
    
  const [starter, setStarter] = useState(true);
  const router = useRouter();
    
  const goHome = () => {
    router.push('/home');
    }

    useEffect(() => {
        setTimeout(() => {
            setStarter(false);
        }, 2500);
    }, []);

   


  return (
    <React.Fragment>
      {
        starter ? (<StarterAnimation />) : (goHome())
      }
    </React.Fragment>
  )
}

export default Starter