import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, BedDouble, Users, Calendar, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';

function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return (
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">Hostel Management System</span>
            </Link>
            
            <div className="flex space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-indigo-600">
                Login
              </Link>
              <Link to="/signup" className="text-gray-600 hover:text-indigo-600">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Hostel Management System</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/rooms" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <BedDouble className="h-5 w-5" />
              <span>Rooms</span>
            </Link>
            <Link to="/students" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Users className="h-5 w-5" />
              <span>Students</span>
            </Link>
            <Link to="/bookings" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Calendar className="h-5 w-5" />
              <span>Bookings</span>
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-1 text-gray-600 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;