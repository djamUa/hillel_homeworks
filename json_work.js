import fs from 'fs-extra';
import fetch from 'node-fetch';
import log4js from 'log4js';

const logger = log4js.getLogger();
logger.level = "debug"

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
        logger.debug("reaquest was send successfuly")

        logger.debug("Got cheese.")
        logger.info("Cheese is Comte");
        logger.warn("chesse is tpp ripe!");
        logger.fatal("Chese was breeding ground for listeria.")

        const dataRStatusCode = await response.status
        const responsed = await response.json()
        logger.debug(dataRStatusCode)
        console.log(dataRStatusCode)
        console.log(responsed)
    } catch(error) {
        console.log(error)
    }
}

createUser(dataUser)