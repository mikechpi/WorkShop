import getAppDetails from '@/app/actions/getAppDetails'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Info } from 'lucide-react'
import React from 'react'

interface ModalProps {
    name: string
}

const Modal = async ({name}: ModalProps) => {
    const appDetails =await getAppDetails(name)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Info className="text-[#3B82F6] h-5 w-5 float-right cursor-pointer" size={24} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle> { appDetails.name } </DialogTitle>
                        <DialogDescription>
                            { appDetails.description }
                        </DialogDescription>
                    </DialogHeader>
            </DialogContent>
        </Dialog>
  )
}

export default Modal