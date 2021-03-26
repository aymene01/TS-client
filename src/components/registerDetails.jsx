import React, { useState, useEffect } from 'react';

export function retgisterDetails(){
        async function createuser(firstname, lastname, email, password, confirmpassword) {
        const response = await fetch('http://localhost:....', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password, confirmpassword })
        })

        const { data } = await response.json()

    
    }
    return(
        <View>
            
        </View>
    )
}
