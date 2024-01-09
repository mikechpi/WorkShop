import { Button } from '@/components/ui/button'
import React from 'react'

interface BundleAppsInfosProps {
  title: string,
  apps: {
     name: string
  }[],
}

const BundleAppsInfos = ({title, apps}: BundleAppsInfosProps) => {
  return (
    <div className='flex flex-col mt-8 justify-center items-center'>
        <Button variant="ghost" className="lg:text-2xl text-gray-800 font-bold">{title}</Button>
        {/* <h3 className='lg:text-2xl text-gray-800 font-bold'>Post-it / Kanban / Suivi de chantier / Tempête de cerveaux</h3> */}
        <hr className='w-1/6 border-gray-300  mt-4' />
        <div className='flex space-x-4 mt-6 justify-start items-center'>
          {
            apps.map((app, index) => {
              return (
                  <div className='bg-slate-100 rounded-lg px-4 py-2' key={index}>
                    <p className='text-gray-800 font-bold text-center'>{app.name}</p>
                  </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default BundleAppsInfos