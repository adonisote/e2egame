'use client'
import { useEffect, useState } from 'react';
import { Card } from '@/app/types/card';
import projectManagement from '@/public/images/ProjectManagement.png'
import softwareEngineering from '@/public/images/SoftwareEngineerung.png'
import architecture from '@/public/images/Architecture.png'
import Image from 'next/image';



export default function CardComponent({ category }: { category: string }) {
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
  console.log(cards)

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
        return (
          <Image
            src={architecture}
            alt={`${category} card deck`}
            quality={100}
            sizes='400px'
            priority
          />
        )
      case 'Project Management':
        return (
          <Image
            src={projectManagement}
            alt={`${category} card deck`}
            quality={100}
            sizes='400px'
            priority
          />
        )
      case 'Software Engineering':
        return (
          <Image
            src={softwareEngineering}
            alt={`${category} card deck`}
            quality={100}
            sizes='400px'
            priority
          />
        )
      default:
        return null
    }
  }



  return (
    <button onClick={showCard} className='w-full h-full  rounded-lg overflow-hidden'>
      <div className='relative flex flex-col items-center justify-center h-full '>
        {!showDescription && renderIcon()}
        {
          !showDescription ? (
            <h1 className='absolute text-center font-bold'></h1>
          ) : (
            selectedCard && (
              <>
                <p className='text-black text-xs m-2'>{selectedCard.context}</p>
                <p className='text-black text-xs m-2'>{selectedCard.action}</p>
              </>
            )
          )
        }
      </div >
    </button >
  );
}
