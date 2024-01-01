import {Router} from 'express';

export const getServerLifeCheck = Router();

getServerLifeCheck.get('/', (req,res) =>{
    res.send({message:'Server is up!'});
});

