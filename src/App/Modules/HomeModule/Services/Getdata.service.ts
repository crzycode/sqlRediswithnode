import { sqlDb } from "../../../Config/Mssql.config";
import { RedisClient } from "../../../Config/Redis.config";

export const GetUser = async()  =>{
    try{
        var Cachedata:any = await RedisClient.get("Users")
        if(Cachedata != null){
            return {From:'redis',Data:JSON.parse(Cachedata)}
        }else{
            var pool =  await sqlDb()
            var Userdata:any = await pool?.request().query("select * from Products")
            await RedisClient.set("Users",JSON.stringify(Userdata.recordset),{EX:60,NX:true})
            return  {From:"sql",Data:Userdata.recordset}
        }
    }catch(err){
        return {Message:"Something went wrong Try again Later",Error:err}
    } 
}