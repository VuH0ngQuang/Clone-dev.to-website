import React from 'react';

const Header = () => {
  return (
      <div className="bg-blue-200 border-b border-gray-200 fixed w-full">
        <header className="container max-w-screen-xl bg-blue-400 mx-auto flex justify-between">
          <div className="flex items-center">
            <div>
              <img src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png' style={{ width: '50px', height: '40px' }}></img>
            </div>
            <div className="ml-2">
              <input type="text" placeholder="Search..."/>
            </div>
          </div>
          <div>
            Login & sign up
          </div>
        </header>
      </div>
  );
}

export default Header;
