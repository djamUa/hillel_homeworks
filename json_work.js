import fs from 'fs-extra'
import fetch from 'node-fetch';

const dataUser = {
    "username": "Frank",
    "email": "frank@mail.com",
    "password": "54Tr90i30o3o@"
}

async function createUser(data) {
    try {
        const response = await fetch('https://reqres.in/api/user/register', 
        {method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
        })

        const dataRStatusCode = await response.status
        const responsed = await response.json()
        console.log(dataRStatusCode)
        console.log(responsed)
    } catch(error) {
        console.log(error)
    }
}

createUser(dataUser)