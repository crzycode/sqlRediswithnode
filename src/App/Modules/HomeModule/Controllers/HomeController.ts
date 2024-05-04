import { Request, Response } from "express";
import { sqlDb } from "../../../Config/Mssql.config";
import { RedisCache } from "../../../Common/RedisCache";
import { RedisClient } from "../../../Config/Redis.config";
import { GetUser } from "../Services/Getdata.service";


export class HomeController{
    static GetData = async(req:Request,res:Response) =>{   
        var begin=Date.now();
       var data =  GetUser()
       data.then(data =>{
        var end= Date.now();
        var timeSpent=(end-begin)/1000+"secs";
        res.json({Time:timeSpent,data:data})
       })
      
    }
    static Insertdata = async(req:Request,res:Response) =>{

    }
}