import { AppInitialProps } from "next/app"

export default  async function getAppDetails(name: string) {
    const res = await fetch(`http://localhost:8000/scrap?appName=${name}`)
    const appDetail: AppInitialProps = await res.json()

    return appDetail
}