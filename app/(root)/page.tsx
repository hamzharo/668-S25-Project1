'use client';
import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import { Suspense } from 'react';

const Home = () => {
  const loggedInUser = { firstName: 'Haroun' }; // Replace with actual user data

  const handleRideClick = (type) => console.log(`${type} button clicked`);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox type="greeting" title="Welcome" user={loggedInUser?.firstName || 'Guest'} subtext="Ride Safely" />
          </header>
          
          <div className="ride-buttons">
            {['Share a Ride', 'Request a Ride', 'Update a Ride'].map((text, idx) => (
              <button key={idx} onClick={() => handleRideClick(text)}>{text}</button>
            ))}
          </div>
        </div>
        <RightSidebar user={loggedInUser} onBankAccountAdded={() => console.log("Bank account added!")} />
      </section>
    </Suspense>
  );
};

export default Home;
