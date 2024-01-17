import { Route, Routes } from 'react-router-dom'; 
import Homepage from './pages/Homepage';
import Complaints from './pages/Complaints';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import TrackOrders from './pages/TrackOrders';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import VideoCall from './pages/VideoCall';
import RoomPage from './pages/RoomPage';
const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/inventory" element={<Inventory/>} />
      <Route path="/track" element={<TrackOrders/>} />
      <Route path="/complaints" element={<Complaints/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/videoCall" element={<VideoCall />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
};

export default RoutesConfig;
