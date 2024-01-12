"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import Loader from '../loader/Loader'

const InstalledApps = () => {
    const [isFinished, setIsFinished] = useState<boolean>(false);

  return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 mx-6 lg:mx-10">
            <div className="px-4 py-3 rounded-lg max-w-sm shadow transition-all border-slate-300 duration-300 hover:bg-gray-100">
                <div className="flex justify-between gap-4">
                    <div className="shrink-0">
                        <Image src="/img/calibre-web.png" className="h-12 w-12 rounded-lg object-cover shadow-sm" width={48} height={48} alt="illustration" />
                    </div>
                    <div className='w-full'>
                        <h4 className='lg:text-md text-gray-800 font-bold'>test</h4>
                        <span className="rounded-full px-2.5 py-0.5 font-semibold text-[10px] text-[#3B82F6] bg-[#3B82F6] bg-opacity-10 border border-[#3B82F6]/75">
                            test
                        </span>
                    </div>
                </div>
                <div className="flex w-full mt-4 justify-between">
                    <Button className=" bg-red-500 text-white font-medium text-left lg:text-sm transition-colors duration-300 hover:bg-red-700">Supprimer</Button>
                </div>
            </div>
    </div>
  )
}

export default InstalledApps