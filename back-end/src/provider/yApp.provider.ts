import { YApp } from "@prisma/client";
import prisma from "../service/prisma";

export const getAllApp = async () => {
    prisma.yApp.findFirst()
        .then((appList) => {
            return appList
        })
        .catch((error) => {
            throw new Error(error)
        })
}

export const getOneApp = async (id: string) => {
    prisma.yApp.findUnique({
        where:{
            id
        }
    })
        .then((yApp) => {
            return yApp
        })
        .catch((error) => {
            throw new Error(error)
        })
}

export const changeInstalledStatusOfApp = async (id: string) => {
    prisma.yApp.findUnique({
        where:{
            id
        }
    })
        .then((yApp) => {
            prisma.yApp.update({
                where:{
                    id
                },
                data:{
                    isInstalled: yApp?.isInstalled!
                }
            })
        })
        .catch( error => {
            throw new Error(error)
        } )
}
