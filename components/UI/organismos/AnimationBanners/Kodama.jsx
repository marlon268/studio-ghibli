import React, { useState, useEffect} from 'react'

export const Kodama = () => {
    function toggleText(element, texts, delay) {
        let i = 0;
        
        const work = () => {
          element.innerHTML = texts[i].text;
          
          setTimeout(work, (texts[i].delay * 1000))
      
          i = (i < texts.length - 1) ? i + 1 : 0;
        }
        
        setTimeout(work, (delay * 1000))
      }

      useEffect(() => {
        toggleText(document.querySelector(".js-dialog"), [
            {
              text: '— *Crrr...*',
              delay: 1.6
            },
            {
              text: '— *Tk tk tk tk tk tk.*',
              delay: 2.4
            }
          ], 2);
      } , [])
      

  return (
      
    <div className="KodamaContainer">
        <div className="wrapper">
     <div className="kodama">
        <div className="body">
        <div className="legs" />
        </div>
        <div className="head">
        <div className="mouth" />
        </div>
    </div>
    <h1 className="dialog js-dialog">— ...</h1>
        </div>
    </div>
  )
}
