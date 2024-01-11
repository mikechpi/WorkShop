import { AppDetailsInterface } from "../utils/types"

export default  async function getAppDetails(name: string) {
    const res = await fetch(`http://localhost:8000/scrap?appName=${name}`)
    const appDetail: AppDetailsInterface = await res.json()
    return appDetail
}