import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Footer from './Footer'
import Routes from './Routes'

/**fraquemente 
 * <> </> fraquemente!
 * 
 * 
*/
function App() {
  return (
    <>  
     <Routes/>
     <ToastContainer/>
     <Footer/>
    </>
  )
}

export default App
