import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import { PublicRoute } from './routes/PublicRoute';
function App() {


  const Home = lazy(() => import('./pages/home/Home'));



  return (
    <BrowserRouter>
      <Suspense fallback={<div><Loading /></div>}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
