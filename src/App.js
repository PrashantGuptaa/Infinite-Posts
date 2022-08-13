import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Story from './Story';
const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/story' element={<Story />} />
        </Routes>
     );
}
 
export default App;