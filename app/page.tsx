'use client'
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import e2eLogo from '@/public/E2E_Logo.png';
import FullScreenComponent from '@/app/ui/fullscreen';
import dice1 from '@/public/images/Dice1.png'
import dice2 from '@/public/images/Dice2.png'
import dice3 from '@/public/images/Dice3.png'
import dice4 from '@/public/images/Dice4.png'
import dice5 from '@/public/images/Dice5.png'
import dice6 from '@/public/images/Dice6.png'




interface Card {
  id: number;
  category: string;
  description: string;
  move: number;
}

export default function Game() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This will only run on the client-side
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-full overflow-y-auto'>
      <div className='portrait:hidden my-8 mx-8 flex flex-col items-center  w-full max-w-4xl'>
        <div className='flex items-center w-full mb-4 justify-between'>
          <div className='flex items-center'>
            <Image
              src={e2eLogo}
              alt="E2E Logo"
              style={{ height: 'auto', width: 150 }}
              priority
            />
            <h1 className='mx-4 text-xl font-bold'>E2E Solution Architecture Game</h1>
            {isMobile && <FullScreenComponent />}
          </div>
        </div>

        <div className='flex w-full'>
          <div className='flex flex-col items-center justify-center w-1/6'>
            <Dice />
          </div>
          <div className='flex w-5/6 justify-evenly'>
            <div className='border-8 border-e2e-blue rounded-lg flex-grow w-1/3 bg-white'>
              <CardComponent category='Project Management' />
            </div>
            <div className='border-8 border-e2e-green mx-2 w-1/3 rounded-lg bg-white'>
              <CardComponent category='Software Engineering' />
            </div>
            <div className='border-8 border-e2e-lila w-1/3 rounded-lg bg-white'>
              <CardComponent category='Architecture' />
            </div>
          </div>
        </div>
      </div>

      <div className='landscape:hidden flex flex-col items-center justify-center h-full'>
        <p className='font-bold'>Rotate your phone!</p>
        <div>

          <Image
            src={e2eLogo}
            alt="E2E Logo"
            style={{ height: 'auto', width: 150 }}
            priority
          />
        </div>

      </div>
    </div>
  );
}

function Dice() {
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
      <div className='relative overflow-hidden border-2 border-black w-16 h-16 rounded-lg my-4 bg-white'>
        {diceOne !== 0 ? (
          <Image
            src={diceImages[diceOne]}
            alt={`Dice with ${diceOne} pips`}
            quality={100}
            fill={true}
            style={{ objectFit: "contain" }}
            sizes='100px'
          />
        ) :
          (<Image
            src={diceImages[1]}
            alt={`Dice with ${diceOne} pips`}
            quality={100}
            fill={true}
            style={{ objectFit: "contain" }}
            sizes='100px'
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

function CardComponent({ category }: { category: string }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const triangleSVG = (
    <svg width="100" height="100" viewBox="0 0 24 24">
      <path d="M12 2l9 18h-18z" fill="none" stroke="#1F3864" strokeWidth="1.5" />
    </svg>
  );

  const squareSVG = (
    <svg width="100" height="100" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" fill="none" stroke="#385723" strokeWidth="1.5" />
    </svg>
  );

  const circleSVG = (
    <svg width="100" height="100" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#7030A0" strokeWidth="1.5" />
    </svg>
  );

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCards(data.filter((card: Card) => card.category === category)));
  }, [category]);

  if (cards.length === 0) {
    //render icon and category instead of loading. category is passed as prop
    return <div>Loading...</div>;
  }

  const pickCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  };

  const showCard = () => {
    if (!showDescription) {
      const card = pickCard();
      setSelectedCard(card);
    }
    setShowDescription(prevShow => !prevShow);
  };

  const renderIcon = () => {
    switch (category) {
      case 'Architecture':
        return circleSVG
      case 'Project Management':
        return triangleSVG
      case 'Software Engineering':
        return squareSVG
      default:
        return null
    }
  }



  return (
    <button onClick={showCard} className='h-full w-full'>
      <div className='relative flex items-center justify-center h-full'>
        {!showDescription && renderIcon()}
        {!showDescription ? (
          <h1 className='absolute text-center bg-white'>{category}</h1>
        ) : (
          selectedCard && <p>{selectedCard.description}</p>
        )}
      </div>
    </button>
  );
}
