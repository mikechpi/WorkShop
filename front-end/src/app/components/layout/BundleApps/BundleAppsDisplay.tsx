import React from 'react'
import BundleAppsList from './BundleAppsList'
import { AppsInterface } from '@/app/utils/types'

interface BundleAppsDisplayProps {
  title: string,
  appsList: AppsInterface[]
}

const BundleAppsDisplay = ({title, appsList}: BundleAppsDisplayProps) => {
  let apps = appsList;

  return (
    <div className='flex flex-col mt-8 justify-center items-center'>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {
            apps?.map((app, index) => {
              return (
                <BundleAppsList key={index} app={app} />
              )
            })
          }
        </div>
    </div>
  )
}

export default BundleAppsDisplay