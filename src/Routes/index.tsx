import { Routes, Route } from 'react-router-dom'

import * as Pages from '../Pages'

export const Paths = {
  home: '/',

  // Auth
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',

  notFound: '/404',
}

export const AuthRoutes = () => (
  <Routes>{/* <Route path={Paths.home} element={<Pages.Home />} /> */}</Routes>
)

export const ROUTES = () => (
  <Routes>
    <Route path={Paths.login} element={<Pages.SignIn />} />
    <Route path={Paths.register} element={<Pages.SignIn />} />
    <Route path={Paths.forgotPassword} element={<Pages.SignIn />} />
  </Routes>
)
