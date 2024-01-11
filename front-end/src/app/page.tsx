import ChooseApps from './components/layout/ChooseApps'
import AppsNameProvider from './components/layout/Context'
import Header from './components/layout/Header'
import AppsNameProvider from './utils/context'

export default function Home() {
  return (
    <>
      <Header />
      <AppsNameProvider>
        <ChooseApps/>
      </AppsNameProvider>
    </>

  )
}
