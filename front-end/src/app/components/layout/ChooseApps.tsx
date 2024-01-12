"use client"
import SectionComponent from '../SectionComponent'
import { Button } from '@/components/ui/button'
import getAppsByGroup from '@/app/actions/getAppsByGroups'
import Link from 'next/link';
import BundleAppsDisplay from './BundleApps/BundleAppsDisplay';
import { useContext, useEffect, useState } from 'react';
import { AppsInterface } from '@/app/utils/types';
import AppsNameProvider, { AppsNameContext } from './Context';

const ChooseApps = () => {
  const [apps, setApps] = useState<AppsInterface[]>([])
  const {appsName} = useContext(AppsNameContext)
  useEffect(() => {
    fetch(`http://localhost:8000/apps`)
        .then(res => {
            return res.json()
        })
        .then(app => {
            setApps(app as AppsInterface[])
        })
}, [])


  return (
    <SectionComponent>
        <div className='flex flex-col space-y-4 justify-center items-center'>
          <h2 className='lg:text-3xl text-gray-800 font-bold text-center'>Choose your apps</h2>
          <p className='text-center text-gray-600 lg:max-w-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet massa, sed dapibus mauris. Donec aliquet, nibh sed ultrices interdum, nunc nibh ultricies dolor, quis aliquam nunc nisl quis nunc. </p>
        </div>
        <BundleAppsDisplay title="Post-it" appsList={ apps } />
        <div className="text-center my-6">
          <Button onClick={
            () => {
              fetch("http://localhost:8000/install", {method:"post", headers:{"Content-Type":"Application/json"}, body: JSON.stringify({apps: appsName})})
            }
          } className ="mt-4 bg-gradient-to-r from-[#FF3399] to-[#3B82F6] transition-opacity duration-500 opacity-70 hover:opacity-100">Enregistrer vos choix</Button>
        </div>
    </SectionComponent>
  )
}

export default ChooseApps