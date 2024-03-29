"use client"
import React, { useState } from 'react'
import Loader from '../loader/Loader'
import SectionComponent from '../../SectionComponent'
import InstalledApps from './InstalledApps'

const ApplicationsPageContent = () => {
    const [isFinished, setIsFinished] = useState<boolean>(false);
  return (
    <>
    {
        !isFinished ? <Loader /> : <SectionComponent>
        <div className='flex flex-col space-y-4 justify-center items-center'>
            <h2 className='lg:text-3xl text-gray-800 font-bold text-center'>Apps to be installed</h2>
            <p className='text-center text-gray-600 lg:max-w-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet massa, sed dapibus mauris. Donec aliquet, nibh sed ultrices interdum, nunc nibh ultricies dolor, quis aliquam nunc nisl quis nunc. </p>
        </div>
        <div className="w-full text-center flex justify-center items-center">
            <hr className='w-1/6 border-gray-300 mt-4 mb-8' />
        </div>
        <InstalledApps />
    </SectionComponent>
    }  
    </>  
  )
}

export default ApplicationsPageContent