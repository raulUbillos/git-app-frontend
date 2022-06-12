import Head from "../../layouts/Head";
import IProps from "./IProps";


const navigation = [
  { name: 'Backend Repo', action: ()=> {},current:() => true },
  { name: 'Frontend Repo', action: ()=> {},current:() => false }
]

const Repository = ({name,owner,repository}:IProps): JSX.Element => {
  return (
    <>
      <Head repositories={navigation}/>
      <div className="min-h-full">

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
export default Repository;