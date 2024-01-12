"use client"
import { Progress } from '@/components/ui/progress';
import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [progress, setProgress] = useState<number>(13);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])

  return (
    <Progress value={progress} className="w-[90%] text-center my-16 mx-14 bg-emerald-200" />
  )
}

export default Loader