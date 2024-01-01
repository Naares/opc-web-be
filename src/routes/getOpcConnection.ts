import { Router } from "express";
import { OpcConnectionManger } from "../opc_module/ConnectionManager";

export const getOpcConnection = Router();

getOpcConnection.get('/opcConnection',(req,res) =>{
    let message = OpcConnectionManger.getInstance().getMessage();
    res.send({message : message});
});