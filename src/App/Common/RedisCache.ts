import { RedisClient } from "../Config/Redis.config"

export class RedisCache{
    static Set = async(Key:any,Value:any,ExpTime:any) =>{
        var time = 0 
        await RedisClient.set(Key,Value,{EX: ExpTime,NX: true})
    }
    static Get = async(Key:any) =>{
        const Data = await RedisClient.get(Key)
        if(Data != null){
            
        }
    }
}