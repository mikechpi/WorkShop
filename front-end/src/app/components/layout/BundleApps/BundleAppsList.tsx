import Image from 'next/image'
import React from 'react'

interface BundleAppsListProps {
  app: {
    name: string,
    image: string,
  }
}

const BundleAppsList = ({app}: BundleAppsListProps) => {
  return (
    <div className="px-4 py-3 rounded-lg shadow transition-all duration-300 hover:bg-gray-100">
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
}

export default BundleAppsList