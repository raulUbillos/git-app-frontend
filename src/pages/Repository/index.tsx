import Commit from 'components/Commit';
import NavigablePage from 'layouts/NavigablePage'
import IProps from "./IProps";

const MOCKED_COMMITS = [
  {
      "dateAuthored": "2022-06-12T01:58:40Z",
      "dateCommited": "2022-06-12T01:58:40Z",
      "author": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/69400901?v=4",
          "id": 69400901,
          "login": "raulUbillos",
          "email": "69400901+raulUbillos@users.noreply.github.com",
          "name": "raulUbillos"
      },
      "committer": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/19864447?v=4",
          "id": 19864447,
          "login": "web-flow",
          "email": "noreply@github.com",
          "name": "GitHub"
      },
      "code": "cb28a5d1cb83501248ded22394d3cccdb2f57261",
      "message": "Added commit endpoint and unit tests (#4)"
  },
  {
      "dateAuthored": "2022-06-11T02:40:05Z",
      "dateCommited": "2022-06-11T02:40:05Z",
      "author": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/69400901?v=4",
          "id": 69400901,
          "login": "raulUbillos",
          "email": "69400901+raulUbillos@users.noreply.github.com",
          "name": "raulUbillos"
      },
      "committer": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/19864447?v=4",
          "id": 19864447,
          "login": "web-flow",
          "email": "noreply@github.com",
          "name": "GitHub"
      },
      "code": "31ccf9a5e9791ff5c9fa9bbaa0ebe7e9f17ac56f",
      "message": "Added commit history endpoint with unit tests (#3)"
  },
  {
      "dateAuthored": "2022-06-08T12:50:39Z",
      "dateCommited": "2022-06-08T12:50:39Z",
      "author": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/69400901?v=4",
          "id": 69400901,
          "login": "raulUbillos",
          "email": "69400901+raulUbillos@users.noreply.github.com",
          "name": "raulUbillos"
      },
      "committer": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/19864447?v=4",
          "id": 19864447,
          "login": "web-flow",
          "email": "noreply@github.com",
          "name": "GitHub"
      },
      "code": "3ee689ad898686a0fa76ace5ecb7b5d10effe117",
      "message": "Dotenv (#2)\n\n* Added environment variables and httpmodule\r\n\r\n* Removed unsused console.log"
  },
  {
      "dateAuthored": "2022-06-08T02:03:10Z",
      "dateCommited": "2022-06-08T02:03:10Z",
      "author": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/69400901?v=4",
          "id": 69400901,
          "login": "raulUbillos",
          "email": "69400901+raulUbillos@users.noreply.github.com",
          "name": "raulUbillos"
      },
      "committer": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/19864447?v=4",
          "id": 19864447,
          "login": "web-flow",
          "email": "noreply@github.com",
          "name": "GitHub"
      },
      "code": "1c090413552f5ef3db973612006310ac3e5afe57",
      "message": "Renamed history controller to commits (#1)"
  },
  {
      "dateAuthored": "2022-06-08T01:53:07Z",
      "dateCommited": "2022-06-08T01:53:07Z",
      "author": {
          "email": "raul.ubillos@sameskyhealth.com",
          "name": "raul"
      },
      "committer": {
          "email": "raul.ubillos@sameskyhealth.com",
          "name": "raul"
      },
      "code": "5f536b6ba595baab237e65c0246b7535cc62ef2b",
      "message": "Merge branch 'boilerplate' into main"
  },
  {
      "dateAuthored": "2022-06-08T01:48:24Z",
      "dateCommited": "2022-06-08T01:48:24Z",
      "author": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/69400901?v=4",
          "id": 69400901,
          "login": "raulUbillos",
          "email": "raulubillos@gmail.com",
          "name": "raulUbillos"
      },
      "committer": {
          "avatarUrl": "https://avatars.githubusercontent.com/u/69400901?v=4",
          "id": 69400901,
          "login": "raulUbillos",
          "email": "raulubillos@gmail.com",
          "name": "raulUbillos"
      },
      "code": "676daf83ff9e5d9adb006301cae97a086ed055e8",
      "message": "Added boilerplate code"
  },
  {
      "dateAuthored": "2022-06-08T01:11:29Z",
      "dateCommited": "2022-06-08T01:11:29Z",
      "author": {
          "email": "raul.ubillos@sameskyhealth.com",
          "name": "raulubillos-santex"
      },
      "committer": {
          "email": "raul.ubillos@sameskyhealth.com",
          "name": "raulubillos-santex"
      },
      "code": "21c756ffb90f0234e97d2c218e69e1a34f1b9fe1",
      "message": "first commit"
  }
]

const Repository = ({name,owner,repository}:IProps): JSX.Element => {
  return (
    <>
      <NavigablePage>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          </div>
        </header>
        <main>
          <div className="max-w bg-gray-200 overflow-auto mx-auto py-6 sm:px-6 lg:px-8">
            {
              MOCKED_COMMITS.map((item) => {
                return <div key={item.code} className='mb-6'>
                        <Commit {...item}/>
                       </div>
              })
            }
          </div>
        </main>
      </NavigablePage>
    </>
  )
}
export default Repository;