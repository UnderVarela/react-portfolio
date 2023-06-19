import { createBrowserRouter } from 'react-router-dom'
import { ErrorTemplate, MainTemplate } from '../templates'
import { HomePage, LoginPage } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate />,
    errorElement: <ErrorTemplate />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
])
