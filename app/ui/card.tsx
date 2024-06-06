'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Card } from '@/app/types/card';
import projectManagement from '@/public/images/ProjectManagement.png'
import softwareEngineering from '@/public/images/SoftwareEngineerung.png'
import architecture from '@/public/images/Architecture.png'
import forwards from '@/public/images/forwards.png'
import backwards from '@/public/images/backwards.png'
import jump from '@/public/images/jump.png'
import archIcon from '@/public/images/arch-icon.png'
import seIcon from '@/public/images/se-icon.png'
import pmIcon from '@/public/images/pm-icon.png'

export default function CardComponent({ category }: { category: string }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showDescription, setShowDescription] = useState<boolean>(false);

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

  const renderActionIcon = () => {
    if (!selectedCard) {
      return null
    }

    if (selectedCard?.move < 0) {
      return (
        <Image
          src={backwards}
          alt={`Backwards card background`}
          quality={100}
          fill
          style={{ objectFit: "contain" }}
          sizes='400px'
          priority
        />
      )
    } else if (selectedCard?.move > 0) {
      return (
        <Image
          src={forwards}
          alt={`Fordwards card background`}
          quality={100}
          fill
          style={{ objectFit: "contain" }}
          sizes='400px'
          priority
        />

      )

    } else {
      return (
        <Image
          src={jump}
          alt={`Jump card background`}
          quality={100}
          fill
          style={{ objectFit: "contain" }}
          sizes='400px'
          priority
        />

      )

    }
  }

  const renderCardDeck = () => {
    switch (category) {
      case 'Architecture':
        return (
          <Image
            src={architecture}
            alt={`${category} card deck`}
            quality={100}
            fill
            sizes='400px'
            style={{ objectFit: "cover" }}
            priority
          />
        )
      case 'Project Management':
        return (
          <Image
            src={projectManagement}
            alt={`${category} card deck`}
            quality={100}
            fill
            style={{ objectFit: "cover" }}
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
            fill
            style={{ objectFit: "cover" }}
            sizes='400px'
            priority
          />
        )
      default:
        return null
    }
  }

  // const renderIcon = () => {
  //   switch (category) {
  //     case 'Architecture':
  //       return (
  //         <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
  //           <Image
  //             src={archIcon}
  //             alt={`${category} icon`}
  //             quality={100}
  //             width={50}
  //             height={50}
  //             priority
  //           />
  //         </div>
  //       );
  //     case 'Project Management':
  //       return (
  //         <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
  //           <Image
  //             src={pmIcon}
  //             alt={`${category} icon`}
  //             quality={100}
  //             width={50}
  //             height={50}
  //             priority
  //           />
  //         </div>
  //       );
  //     case 'Software Engineering':
  //       return (
  //         <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
  //           <Image
  //             src={seIcon}
  //             alt={`${category} icon`}
  //             quality={100}
  //             width={50}
  //             height={50}
  //             priority
  //           />
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };



  return (
    <button onClick={showCard} className='w-full h-full  rounded-lg overflow-hidden'>
      <div className='relative flex flex-col items-center justify-center h-full overflow-hidden '>

        {
          !showDescription ? (
            <div className='relative overflow-hidden h-full w-full'>
              {renderCardDeck()}
            </div>
          ) : (
            selectedCard && (
              <div className='h-full flex flex-col items-center justify-center'>
                {/* {renderIcon()} */}
                <p className='text-black text-xs m-2 z-20'>{selectedCard.context}</p>
                <p className='text-black text-xs m-2 z-20'>{selectedCard.action}</p>
                {renderActionIcon()}
              </div>
            )
          )
        }
      </div >
    </button >
  );
}
