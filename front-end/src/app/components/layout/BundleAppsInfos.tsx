import Image from 'next/image'
import React from 'react'

interface BundleAppsInfosProps {
  title: string,
  apps: {
     name: string,
     image: string,
  }[],
}

const BundleAppsInfos = ({title, apps}: BundleAppsInfosProps) => {
  return (
    <div className='flex flex-col mt-8 justify-center items-center'>
        <h3 className='lg:text-2xl text-gray-800 font-bold'>{title}</h3>
        <hr className='w-1/6 border-gray-300 mt-4 mb-8' />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {
            apps.map((app, index) => {
              return (
                <div className="px-4 py-3 rounded-lg shadow transition-all duration-300 hover:bg-gray-100" key={index}>
                  <div className="flex justify-between gap-4">
                    <div className="shrink-0">
                      <Image src={app.image} className="h-12 w-12 rounded-lg object-cover shadow-sm" width={48} height={48} alt="illustration" />
                    </div>
                    <div className='w-full'>
                      <h4 className='lg:text-md text-gray-800 font-bold'>{app.name}</h4>
                      <span className="rounded-full px-2.5 py-0.5 text-[10px]  border text-emerald-600 border-emerald-400">
                        Lecture
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default BundleAppsInfos