import { randomUUID } from "crypto";
import { OpcConnector } from "./OpcConnector";
import { MessageSecurityMode, SecurityPolicy } from "node-opcua-client";
/*This will be singleton design patter, which should be acessible from Routes
 and should provide established connection to the opc server which will be stored
 either in a map or array (preferably map), when new connection is created we will insert
 the connection into this map with uuid-generated, it should also self manage session, those who
 are invalid should be removed for garbage collection*/
export class OpcConnectionManger{
    static instance : OpcConnectionManger|null = null;
    private currentConnectors : Map<string,IConnectors>|null = null;
    static getInstance():OpcConnectionManger{
        if(this.instance != null){
            return this.instance;
        }else{
            this.instance = new OpcConnectionManger();
            return this.instance;
        }
    }
    getMessage():string{
        return 'OpcConnectionManager instance.';
    }

    createNewConnection():boolean{
        let sessionId = randomUUID();
        let connection = new OpcConnector();
        //this.currentConnectors.set(sessionId)
        return true;
    }

    testConnection(opcServerUrl:string){
        return OpcConnector.testConnection(opcServerUrl);
    }

}

export interface IConnectors{
    instance:OpcConnector|null,
    webSocketId:string|number,
    expirationTime:number
}

export interface IConnection{
    opcServerUrl:string,
    username:string,
    password:string,
    securityPolicy:SecurityPolicy,
    securityMode:MessageSecurityMode
}