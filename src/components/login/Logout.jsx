import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
    
    const navigate = useNavigate();

    useEffect(() => {
        onLogout();
        navigate('/');
    }, 
    // Only re-run the effect if onLogout or navigate functions change (which they shouldn't)
    [onLogout, navigate]);

    return null;
}

export default Logout;
