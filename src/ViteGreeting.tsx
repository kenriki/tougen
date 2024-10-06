import React, { useState, useEffect } from 'react';
import viteLogo from '/momo2.jpg';
import img01 from '/top.jpg';
import img02 from '/001.jpg';
import img03 from '/002.jpg';
import img04 from '/tougen_master.png';
import { Image } from "@unpic/react";

const img = [img01, img02, img03,img04];

export const ViteGreeting = () => {
  const [currentImg, setCurrentImg] = useState(img[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg(prevImg => {
        const currentIndex = img.indexOf(prevImg);
        const nextIndex = (currentIndex + 1) % img.length;
        return img[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <Image
          src={viteLogo}
          layout="constrained"
          width={400}
          height={100}
          alt="チャイナレストラン桃源"
        />
      </div>
      <div id="header" className="text-white text-lg">
        <h1 className="title">チャイナレストラン<span>桃源</span><span id="headerSub">(とうげん)</span></h1>
        <h2 className="subtitle">０３-３９１１-３７１９／０３-３９１２-２５８３</h2>
        <img src={currentImg} id="sample" width="500" height="550" className="align:center;float:left;" alt="Sample" />
      </div>
    </>
  );
};
