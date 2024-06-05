'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import dice1 from '@/public/images/Dice1.png'
import dice2 from '@/public/images/Dice2.png'
import dice3 from '@/public/images/Dice3.png'
import dice4 from '@/public/images/Dice4.png'
import dice5 from '@/public/images/Dice5.png'
import dice6 from '@/public/images/Dice6.png'

export default function Dice() {
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(0);

  const diceImages: { [key: number]: StaticImageData } = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
  }

  const rollDice = () => {
    let faceOne = Math.floor(Math.random() * 6) + 1;
    console.log(faceOne);
    setDiceOne(faceOne);

    let faceTwo = Math.floor(Math.random() * 6) + 1;
    console.log(faceTwo);
    setDiceTwo(faceTwo);
  };

  return (
    <>
      <div className='relative overflow-hidden border-2 border-black w-16 h-16 rounded-lg bg-white'>
        {diceOne !== 0 ? (
          <Image
            src={diceImages[diceOne]}
            alt={`Dice with ${diceOne} pips`}
            quality={100}
            fill={true}
            style={{ objectFit: "contain" }}
            sizes='100px'
            priority
          />
        ) :
          (<Image
            src={diceImages[1]}
            alt={`Dice with ${diceOne} pips`}
            quality={100}
            fill={true}
            style={{ objectFit: "contain" }}
            sizes='100px'
            priority
          />
          )}
      </div >
      <div className='relative overflow-hidden border-2 border-black w-16 h-16 rounded-lg my-4 bg-white'>
        {diceOne !== 0 ? (
          <Image
            src={diceImages[diceTwo]}
            alt={`Dice with ${diceTwo} pips`}
            quality={100}
            fill={true}
            style={{ objectFit: "contain" }}
            sizes='100px'
            priority

          />
        ) : (<Image
          src={diceImages[1]}
          alt={`Dice with ${diceOne} pips`}
          quality={100}
          fill={true}
          style={{ objectFit: "contain" }}
          sizes='100px'
          priority
        />
        )}
      </div >

      <button className='border-2 border-black w-16 h-16 rounded-lg bg-e2e-yellow' onClick={rollDice}>Roll</button>
    </>
  );
}
