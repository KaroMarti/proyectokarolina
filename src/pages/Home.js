import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    const key = 'YI5N/XtqOtRlREc63OktNg==Pd5fI84y8YQtlYjx';
    const headers = { 
        'X-Api-Key': key

    }
    
    const url='https://api.api-ninjas.com/v1/celebrity?name='+'Michael Jordan'

    useEffect ( ()=>{
        Axios.get (url)
        .then(resp=>{console.log(resp.data)})
        .catch(error=>{console.log(error)})
    },[]

    )

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