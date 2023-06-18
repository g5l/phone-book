import './App.css'
import Header from "../components/Header/Header.tsx";

function Main() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto">
      <div className="max-w-2xl bg-gray-200 rounded-md p-8 mx-auto mt-10">
        <h1 className="text-center text-2xl mb-10">Phone Book App</h1>
        <Header/>
      </div>
    </div>
  )
}

export default Main
