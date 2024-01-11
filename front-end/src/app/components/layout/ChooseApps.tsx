import SectionComponent from '../SectionComponent'
import { Button } from '@/components/ui/button'
import getAppsByGroup from '@/app/actions/getAppsByGroups'
import BundleAppsDisplay from './BundleApps/BundleAppsDisplay';

const ChooseApps = async () => {

  const postItApps = await getAppsByGroup('post-it');
  const coEcritureApps = await getAppsByGroup('co-écriture');
  const biblioApps = await getAppsByGroup('biblio');

  return (
    <SectionComponent>
        <div className='flex flex-col space-y-4 justify-center items-center'>
          <h2 className='lg:text-3xl text-gray-800 font-bold text-center'>Choose your apps</h2>
          <p className='text-center text-gray-600 lg:max-w-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet massa, sed dapibus mauris. Donec aliquet, nibh sed ultrices interdum, nunc nibh ultricies dolor, quis aliquam nunc nisl quis nunc. </p>
        </div>
        <BundleAppsDisplay title="Post-it" appsList={ postItApps } />
        <BundleAppsDisplay title="Co-écriture" appsList={ coEcritureApps } />
        <BundleAppsDisplay title="Bibliothèque" appsList={ biblioApps } />
        <div className="text-center my-6">
          <Button className ="mt-4 bg-gradient-to-r from-[#FF3399] to-[#3B82F6] transition-opacity duration-500 opacity-70 hover:opacity-100">Enregistrer vos choix</Button>
        </div>
    </SectionComponent>
  )
}

export default ChooseApps