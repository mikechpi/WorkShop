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
    <div className="px-4 py-3 rounded-lg shadow transition-all border-slate-300 duration-300 hover:bg-gray-100">
      <div className="flex justify-between gap-4">
        <div className="shrink-0">
          <Image src={app.image} className="h-12 w-12 rounded-lg object-cover shadow-sm" width={48} height={48} alt="illustration" />
        </div>
        <div className='w-full'>
          <h4 className='lg:text-md text-gray-800 font-bold'>{app.name}</h4>
          <span className="rounded-full px-2.5 py-0.5 font-semibold text-[10px] text-[#3B82F6] bg-[#3B82F6] bg-opacity-10 border border-[#3B82F6]/75">
            Lecture
          </span>
        </div>
      </div>
    </div>
  )
}

export default BundleAppsList