import React from 'react';
import AboutUs from './about';
import HomePage from './Home';
import Navbar from './navbar';
import SQuiz from './stressquiz';
import Footer from './footer';
import Services from './Services';
import Subscription from './SubscriptionPlans';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import CommunityPage from './community';
import Techniques from './techniques';
import ScheduleVideoCall from './schedulevc';
import AuthLayout from './authlayout';
import VideoCall from './videocall';
import NewVC from './newvc';
import RoomPage from './room';
import KommunicateChat from './kommunicate';
import ExpertGuidance from './expertGuidance';
import HomePageExpert from './HomeExpert';
import Animation from './animation';
import Preloader from './preloader';
import { useState, useEffect } from 'react';
import Games from './games';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<AuthLayout><HomePage /></AuthLayout>} />
              <Route path="/about" element={<AuthLayout><AboutUs /></AuthLayout>} />
              <Route path="/stressquiz" element={<AuthLayout><SQuiz /></AuthLayout>} />
              <Route path="/Services" element={<AuthLayout><Services /></AuthLayout>} />
              <Route path="/community" element={<AuthLayout><CommunityPage /></AuthLayout>} />
              <Route path="/Profile" element={<AuthLayout><Profile /></AuthLayout>} />
              <Route path="/Subscription" element={<AuthLayout><Subscription /></AuthLayout>} />
              <Route path="/techniques" element={<AuthLayout><Techniques /></AuthLayout>} />
              <Route path="/schedulevc" element={<AuthLayout><ScheduleVideoCall /></AuthLayout>} />
              <Route path="/videocall" element={<AuthLayout><VideoCall /></AuthLayout>} />
              <Route path="/newvc" element={<AuthLayout><NewVC /></AuthLayout>} />
              <Route path="/expertGuidance" element={<AuthLayout><ExpertGuidance /></AuthLayout>} />
              <Route path="/HomeExpert" element={<AuthLayout><HomePageExpert /></AuthLayout>} />
              <Route path="/games" element={<AuthLayout><Games /></AuthLayout>} />
              <Route path="/room/:roomId" element={<RoomPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <KommunicateChat />
            {window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === "/room/:roomId" ? null : <Footer />}
            {window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === "/room/:roomId" ? null : <Animation />}
          </Router>
        </>
      )}
    </>
  );
}

export default App;