'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import e2eLogo from '@/public/E2E_Logo.png'
import FullScreenComponent from '@/app/ui/fullscreen';

interface Card {
  id: number;
  category: string;
  description: string;
  move: number;
}


export default function Game() {

  return (
    <div className='flex fle-col h-screen'>
      <div className='portrait:hidden my-8 mx-8 flex flex-col items-center w-full max-w-4xl'>
        <div className='flex items-center w-full mb-4 justify-between'>
          <div className='flex items-center '>
            <Image
              src={e2eLogo}
              alt="E2E Logo"

              style={
                {
                  height: 'auto',
                  width: 150,
                }
              }
              priority
            />
            <h1 className=' mx-4 text-xl font-bold text-white'>E2E Solution Architecture Game</h1>
            <div className='flex'>
              <FullScreenComponent />
            </div>
          </div>

        </div>


        <div className='flex w-full'>

          <div className='flex flex-col items-center justify-center w-1/6'>
            <Dice />
          </div>
          <div className='flex w-5/6 justify justify-evenly'>


            <div className='border-4 border-e2e-blue rounded-lg  flex-grow w-1/3'>
              <CardComponent category='Architecture' />
            </div>
            <div className=' border-4 border-e2e-green mx-2 w-1/3 rounded-lg'>
              <CardComponent category='Project Management' />

            </div>
            <div className='border-4 border-e2e-lila w-1/3 rounded-lg'>
              <CardComponent category='Software Engineering' />
            </div>
          </div>
        </div>
      </div>

      <div className='landscape:hidden '>
        <p>Please rotate your phone!</p>
      </div>
    </div>

  )
}

function Dice() {

  const [diceOne, setDiceOne] = useState(0)
  const [diceTwo, setDiceTwo] = useState(0)
  const rollDice = () => {
    let faceOne = Math.floor(Math.random() * 6) + 1
    console.log(faceOne)
    setDiceOne(faceOne)
    let faceTwo = Math.floor(Math.random() * 6) + 1
    console.log(faceTwo)
    setDiceTwo(faceTwo)
  }

  return (
    <>
      <div className='border-2 border-black w-16 h-16 rounded-lg bg-white'>{
        diceOne != 0 ?
          <p className=' border-black'>{diceOne}</p>
          : <p>Placeholder</p>
      }
      </div>


      <div className='border-2 border-black b w-16 h-16 rounded-lg my-4 bg-white'>{
        diceTwo != 0 ?
          <p className=' border-black'>{diceTwo}</p> : <p>Placeholder</p>}

      </div>
      <button className='border-2 border-black w-16 h-16 rounded-lg bg-e2e-yellow' onClick={rollDice}>Roll</button>
    </>
  )
}


function CardComponent({ category }: { category: string }) {
  const [cards, setCards] = useState<Card[]>([])
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const [showDescription, setShowDescription] = useState<boolean>(false)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCards(data.filter((card: Card) => card.category === category)))
  }, [category])

  if (cards.length === 0) {
    return <div>Loading...</div>
  }
  // const arch = cards.filter(card => card.category === "Architecture")
  // const pm = cards.filter(card => card.category === "Project Management")
  // const se = cards.filter(card => card.category === "Software Engineering")


  const pickCard = () => {
    //console.log(Math.floor(Math.random() * 25) + 1)
    console.log(Math.floor(Math.random() * cards.length))
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }


  const showCard = () => {
    if (!showDescription) {
      const card = pickCard()
      console.log(card)
      console.log(card.id)
      console.log(card.description)
      setSelectedCard(card)
    }

    setShowDescription(prevShow => !prevShow)
  }

  return (
    <>
      <button onClick={showCard} className='h-full w-full'>

        <div className=''>
          {
            !showDescription ? (
              <h1>{category}</h1>
            ) : (
              selectedCard && (
                <p>{selectedCard.description}</p>
              )
            )
          }
        </div>
      </button>
    </>
  )

}

