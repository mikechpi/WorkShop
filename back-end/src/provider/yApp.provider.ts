import fs from "fs"
const appDataJson = require("../data/yApp.json")
fs
export const getAllApp = async () => {
}

export const getOneApp = async (id: string) => {
   /*  try {
        const yApp = await prisma.yApp.findUnique({
            where:{
                id
            }
        })

        if(!yApp) {
            throw new Error("There is no app matching id")
        } else {
            return yApp

        }
    } catch {
        throw new Error("Internal server error")
    } */
}

export const changeInstalledStatusOfApp = async (id: string) => {
    /* try {
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
    } */
}

export const getUrlByAppName = (name: string) => {
    /* prisma.yApp.findFirst({
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
        }) */
}
