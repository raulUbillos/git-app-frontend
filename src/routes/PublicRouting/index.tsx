import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Repository from '../../pages/Repository'

const PublicRouting = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='git-app-backend' element={<Repository name='Backend' owner='raulUbillos' repository='git-app-backend'/>}/>
            <Route path='git-app-frontend' element={<Repository name='Frontend' owner='raulUbillos' repository='git-app-frontend'/>}/>
            <Route path='*' element={<Navigate to={'/git-app-backend'} replace/>}/>
        </Routes>
    </BrowserRouter>
}

export default PublicRouting