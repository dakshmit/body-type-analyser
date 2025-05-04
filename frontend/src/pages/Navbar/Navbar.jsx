import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/account-service';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const result = await logoutUser();
    
            if (result.ok)
                navigate('/login');
            else
                console.error(`Logout Failed: ${result.message || 'Unknown Error'}`);
        } catch (error) {
            console.error('Network Error : ${error.message}');
        }
    };

    return (
        <nav className='bg-gray-800 text-white shadow-md relative'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center'>
                <Link to='/' className='text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700'>Home</Link>
                <div 
                    onClick={ () => setIsOpen(!isOpen) } 
                    className='cursor-pointer px-3 py-2 rounded-md hover:bg-gray-700'
                    type='button'
                >
                    { isOpen ? '▲' : '▼'}
                </div>
            </div>

            { isOpen && (
                <div className='absolute right-0 top-16 mt-1 w-48 bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50'>
                    <Link 
                        to='/Layout/dashboard' 
                        onClick={ () => setIsOpen(false)} 
                        className='block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white rounded-md'
                    >
                        Dashboard
                    </Link>
                    <Link 
                        to='/Layout/Start' 
                        onClick={ () => setIsOpen(false)} 
                        className='block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white rounded-md'
                    >
                        Test Prakriti
                    </Link>
                    <div 
                        onClick={ () => handleLogout() } 
                        className='block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white rounded-md cursor-pointer'
                        type='button'
                    >
                        Logout
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;