

export default async function getApps() {
    const response = await fetch('http://localhost:8000/apps')
    const apps = await response.json()
    console.log(apps)
    return apps    
}