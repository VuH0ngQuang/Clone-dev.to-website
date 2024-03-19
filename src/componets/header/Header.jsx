import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className=" border-b bg-white border-gray-200 fixed w-full h-14">
        <header className="container max-w-screen-xl mx-auto flex justify-between items-center h-full">
          <div className="flex justify-center items-center">
            <Link to={'/'}>
              <img src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png' style={{ width: '50px', height: '40px' }} alt="dev-logo"></img>
            </Link>
            <div className="ml-2 relative">
              <input type="text" placeholder="Search..." style={{width: '420px', height: '40px'}}/>
              <button className="absolute right-0 bottom-0 p-1.5 bg-white rounded-md hover:bg-blue-200" >
                <IoIosSearch className="w-7 h-7"/>
              </button>
            </div>
          </div>
          <div>
            <Link to={'/enter'} className="h-10 w-20 bg-white mr-2 rounded-md hover:bg-blue-100 hover:underline hover:text-blue-700">
              Log in
            </Link>
            <Link to={'/signup'} className=" h-10 w-20 bg-white font-medium rounded-md border-solid border-blue-700 border text-blue-700 hover:bg-blue-700 hover:text-white hover:underline" >
              Create account
            </Link>
          </div>
        </header>
      </div>
  );
}

export default Header;
