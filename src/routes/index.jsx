import { createBrowserRouter } from 'react-router-dom'
import { ErrorTemplate, MainTemplate } from '../templates'
import { ExperiencePage, HomePage, LoginPage } from '../pages'
import { getDocuments } from '../helpers/cloud-firestore'
import { PrivateRoute } from '../components'

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
        element: <PrivateRoute><ExperiencePage /></PrivateRoute>
      }
    ]
  }
])
