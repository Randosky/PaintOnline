import './Style/App.scss'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Routes/AppRouter";

function App() {

  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  )
}

export default App
