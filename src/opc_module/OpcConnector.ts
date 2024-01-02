import { EndpointDescription, MessageSecurityMode, OPCUAClient, SecurityPolicy } from "node-opcua-client";

export class OpcConnector{

    /**
     * Connects to the opc server and test if the server accepts connection
     * @returns true if connection can be established
     */
    static testConnection(serverUrl:string):boolean{
        try{

        }catch(e){
            return false;
        }
        return true;
    }

    static getAvailableEndpoints(serverUrl:string):[SecurityPolicy]|void{
        const client = this.createClient()
        client.connect(serverUrl);
        client.getEndpoints().then(function(obj:EndpointDescription[]){
            let endpointMap = [{}];
            for(let i = 0; i < obj.length; i++){
                endpointMap.push({
                    endpointSecurityPolicy:obj[i].securityPolicyUri,
                    endpointSucirtyMode:obj[i].securityMode
                });
                console.log("securityPolicy: ",obj[i].securityPolicyUri?.toString());
                console.log("security mode: ",obj[i].securityMode.toString());
            }
        })
    }

    private static createClient():OPCUAClient{
        const client = OPCUAClient.create({
        endpointMustExist:false,
        connectionStrategy:{
            maxRetry:10,
            initialDelay:1000,
            maxDelay:10*1000
        }
        });
        return client;
    }
}