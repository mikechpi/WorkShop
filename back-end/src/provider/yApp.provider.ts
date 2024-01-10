import { YApp } from "@prisma/client";
import prisma from "../service/prisma";

export const getAllApp = async () => {
    try {
        prisma.yApp.findMany()
    } catch{
        throw new Error("Internal server error")
    }
}

export const getOneApp = async (id: string) => {
    try {
        const yApp = await prisma.yApp.findUnique({
            where:{
                id
            }
        })

        return yApp
    } catch {
        throw new Error("Internal server error")
    }
}

export const changeInstalledStatusOfApp = async (id: string) => {
    try {
        const yApp = await prisma.yApp.findUnique({
            where:{
                id
            }
        })

        if(!yApp) {
            throw new Error("There is no app matching id")
        } else {
            prisma.yApp.update({
                where:{
                    id
                },
                data:{
                    isInstalled: yApp?.isInstalled!
                }
            })
        }
    } catch (error) {
        throw new Error("Internal server error")
    }
}

export const getUrlByAppName = (name: string) => {
    prisma.yApp.findFirst({
        where:{
            name:{
                contains: name,
                mode: "insensitive"
            }
        },
        select:{
            url: true
        }
    })
        .then(url => {
            return url
        })
        .catch(error => {
            throw new Error(error)
        })
}
