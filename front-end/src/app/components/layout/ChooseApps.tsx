import React from 'react'
import SectionComponent from '../SectionComponent'
import BundleAppsInfos from './BundleAppsInfos'
import { BundleAppsData } from '@/app/constants/BundleAppsInfos'
import { Button } from '@/components/ui/button'

const ChooseApps = () => {
  return (
    <SectionComponent>
        <div className='flex flex-col space-y-4 justify-center items-center'>
          <h2 className='lg:text-3xl text-gray-800 font-bold text-center'>Choose your apps</h2>
          <p className='text-center text-gray-600 lg:max-w-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet massa, sed dapibus mauris. Donec aliquet, nibh sed ultrices interdum, nunc nibh ultricies dolor, quis aliquam nunc nisl quis nunc. </p>
        </div>
        {
          BundleAppsData.map((infos, index) => {
              const { title, apps } = infos;
              return (
                  <BundleAppsInfos key={index} title={title} apps={apps} />
              )
          })
        }
        <div className="text-center my-6">
          <Button className="mt-4 bg-gradient-to-r from-[#FF3399] to-[#3B82F6] transition-opacity duration-500 opacity-70 hover:opacity-100">Enregistrer vos modifications</Button>
        </div>
    </SectionComponent>
  )
}

export default ChooseApps