import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './components/Form/Form'
import Genre from './components/Genre/Genre'
import Info from './components/Info/Info'
import Movies from './components/Movies/Movies'
import NotFound from './components/NotFound/NotFound'
/* import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary' */


function App() {

  return (
    <>
    {/* <ErrorBoundary> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path='/genre' element={<Genre/>}></Route>
          <Route path='/info' element={<Info/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


/*

(1) Movies API:
https://rapidapi.com/jakash1997/api/advanced-movie-search/playground/apiendpoint_f83228d8-386b-4c4d-8872-8ee7b2601202

(2) Weather API:
[working]
https://rapidapi.com/apishub/api/yahoo-weather5/playground/apiendpoint_540a0d00-838e-4c48-92f6-cb8672867f00

(3) News API:
https://rapidapi.com/bfd-id/api/google-news13/playground/apiendpoint_7a387229-24a0-4185-9be2-ce2791df0d78
[Google news api]

*/