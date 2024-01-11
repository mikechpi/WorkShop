"use client";
import React, { useEffect, useState } from 'react'
import SectionComponent from '../SectionComponent'
import { BundleAppsData } from '@/app/utils/constants/BundleAppsInfos'
import { Button } from '@/components/ui/button'
import BundleAppsDisplay from './BundleApps/BundleAppsDisplay'
import getApps from '@/app/actions/getApps'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { AppType } from 'next/app';
import { AppsInterface } from '@/app/utils/types';


const ChooseApps = () => {
  const [appsList, setAppsList] = useState<AppsInterface[]>([])

  useEffect(() => {
    getApps()
      .then(response => {
        return response
      })
      .then(data => {
        console.log(data)
        setAppsList(data as AppsInterface[])
      })
  }, [])

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
                  <BundleAppsDisplay key={index} title={title} apps={ appsList } />
              )
          })
        }
        <div className="text-center my-6">
          <Button className ="mt-4 bg-gradient-to-r from-[#FF3399] to-[#3B82F6] transition-opacity duration-500 opacity-70 hover:opacity-100">Enregistrer vos modifications</Button>
        </div>
    </SectionComponent>
  )
}

export default ChooseApps