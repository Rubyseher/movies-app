import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
function App() {

  const handelSubmit=()=>{

  }
  return (
    <div>
    <MovieCard url={'something'} title="movie name"/>
    <Home/>
    <form onSubmit={()=> handelSubmit()} >
      <input type="text" ></input>
    </form>
    </div>
  )
}

export default App
