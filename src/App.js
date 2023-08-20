
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './components/login/Login';
import Pageview from './components/Pageview';

import Gallerypage from './components/gallerypage/Gallerypage';
import Trainingpage from './components/gallerypage/Trainingpage';
import Reviewpage from './components/gallerypage/Reviewpage';
import Contactuspage from './components/gallerypage/Contactuspage';
function App () {
  // function Login() {
  //   let navigate = useNavigate();
  
  //   // Rest of the component code
  // }
  return (
  
 
 
    <Router>
      <Routes>
        <Route path="/" element={<Pageview />} />
    
        
        <Route path="/gallerypage" element={<Gallerypage />}/>
        <Route path='/trainingpage' element={<Trainingpage/>}/>
        <Route path='/reviewpage' element={<Reviewpage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/contactuspage' element={<Contactuspage/>}/>
        {/* Other routes */}
      </Routes>
    </Router>
  );
}





export default App;
