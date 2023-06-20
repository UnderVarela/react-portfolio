import { createBrowserRouter } from 'react-router-dom'
import { ErrorTemplate, MainTemplate } from '../templates'
import { HomePage, LoginPage } from '../pages'
import { getDocuments } from '../helpers/cloud-firestore'

async function getExperiences () {
  const docs = await getDocuments('workExperience')
  return {
    docs
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate />,
    errorElement: <ErrorTemplate />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: getExperiences
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'workexperiences',
        element: <div>Experiencias</div>
      }
    ]
  }
])
