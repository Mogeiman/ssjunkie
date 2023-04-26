'use client';

import Image from 'next/image'

const Summary=()=> {
  return (
    <div className='w-full h-16 my-3 landscape:w-full '>
        <div className="w-full md:w-11/12 px:3 md:mx-auto md:px-12">
            <div className="flex item-center">
                 <Image 
                src='/images/alert-circle-outline-colored.svg'
                width={30}
                height={30}
                alt='notice'
            />

            <p className='text-red-600 text-base md:text-lg'>NOTICE: Please consider donating or clicking on the advertisments, so that I can continously keep uploading chapters. Any donation will be much appreciated</p>

            </div>
        </div>
    </div>
  )
}

export default Summary;