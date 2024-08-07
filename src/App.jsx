import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import MentorsPage from './pages/MentorsPage'
import NotFoundPage from './pages/NotFoundPage'
import MentorPage, { mentorDataLoader } from './pages/MentorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/mentors' element={<MentorsPage />} />
      <Route path='/mentor/:id' element={<MentorPage />} loader={mentorDataLoader}/>
      <Route path='*' element={<NotFoundPage />} />

      
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App