/*This will be singleton design patter, which should be acessible from Routes
 and should provide established connection to the opc server which will be stored
 either in a map or array (preferably map), when new connection is created we will insert
 the connection into this map with uuid-generated, it should also self manage session, those who
 are invalid should be removed for garbage collection*/
export class OpcConnectionManger{
    static instance : OpcConnectionManger|null = null;
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

}