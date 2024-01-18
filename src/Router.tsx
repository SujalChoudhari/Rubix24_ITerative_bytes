import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Complaints from './pages/Complaints';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import TractComplaints from './pages/TrackComplaints';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import VideoCall from './pages/VideoCall';
import RoomPage from './pages/RoomPage';
import Admin from './pages/Admin';

import { Protected } from "./pages/Protected";
import { RequireAuth } from "./components/RequireAuth";

import { PocketProvider } from "./contexts/PocketContext";
import CommunityPage from './pages/CommunityPage';
const RoutesConfig = () => {
  return (
    <PocketProvider>
      <Routes>
        {/* <Route index element={<SignUp />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<RequireAuth />}>
          {/* <Route path="/protected" element={<Protected />} /> */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/track" element={<TractComplaints />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/videoCall" element={<VideoCall />} />
          <Route path="/room/:roomId" element={<RoomPage />} />

          <Route path="/admin_grofers" element={<Admin company='Grofers' />} />
          <Route path="/admin_bigbasket" element={<Admin company='BigBasket' />} />
          <Route path="/admin_flipkart" element={<Admin company='Flipkart Fresh' />} />
          <Route path="/admin" element={<Admin company='Other' />} />
          
        </Route>
      </Routes>
    </PocketProvider>
  );
};

export default RoutesConfig;
