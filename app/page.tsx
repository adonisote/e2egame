'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import e2eLogo from '@/public/E2E_Logo.png';
import FullScreenComponent from '@/app/ui/fullscreen';
import CardComponent from '@/app/ui/card';
import Dice from '@/app/ui/dice';

export default function Game() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This will only run on the client-side
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-full overflow-y-auto'>
      <div className='portrait:hidden my-4 mx-8 flex flex-col items-center  w-full max-w-2xl'>
        <div className='flex items-center w-full mb-4 justify-between'>
          <div className='flex items-center'>
            <Image
              src={e2eLogo}
              alt="E2E Logo"
              style={{ height: 'auto', width: 80 }}
              priority
            />
            <h1 className='mx-4 text-xl font-bold'>E2E Solution Architecture Game</h1>
            {isMobile && <FullScreenComponent />}
          </div>
        </div>

        <div className='flex w-full'>

          <div className='flex w-5/6 justify-evenly'>
            <div className='border-4 border-e2e-blue rounded-lg flex-grow w-1/3 bg-white'>
              <CardComponent category='Project Management' />
            </div>
            <div className='border-4 border-e2e-green mx-2 w-1/3 rounded-lg bg-white'>
              <CardComponent category='Software Engineering' />
            </div>
            <div className='border-4 border-e2e-lila w-1/3 rounded-lg bg-white'>
              <CardComponent category='Architecture' />
            </div>
          </div>
          <div className='flex flex-col items-center justify-between w-1/6'>
            <Dice />
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

