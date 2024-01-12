import getAppDetails from '@/app/actions/getAppDetails'
import { AppDetailsInterface } from '@/app/utils/types'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Info } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface ModalProps {
    name: string
}

const Modal =  ({name}: ModalProps) => {
    const [appDetails, setAppDetails] = useState<AppDetailsInterface>()

    useEffect(() => {
        fetch(`http://localhost:8000/scrap?appName=${name}`)
            .then(res => {
                return res.json()
            })
            .then(app => {
                setAppDetails(app as AppDetailsInterface)
            })
    }, [name])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Info className="text-[#3B82F6] h-5 w-5 float-right cursor-pointer" size={24} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle> { appDetails?.name } </DialogTitle>
                        <DialogDescription>
                            { appDetails?.description }
                        </DialogDescription>
                    </DialogHeader>
            </DialogContent>
        </Dialog>
  )
}

export default Modal