import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Home = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div> Cargando ...</div>;
        
    }

    return (
        isAuthenticated && (
            <div>
                <h3>{user.name}</h3>
            </div>
        )
    );


}

export default Home