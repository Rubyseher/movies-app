import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
function App() {

  return (
    <div>
    <MovieCard url={'something'} title="movie name"/>
    <Home/>
    </div>
  )
}

export default App
