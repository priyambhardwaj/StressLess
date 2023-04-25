import React from 'react';
import Navbar from './navbar';

function AuthLayout(props) {
  const { children } = props;
  const currentPath = window.location.pathname;

  if (currentPath === '/login' || currentPath === '/signup') {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default AuthLayout;



//for removing navbar from login and sign up