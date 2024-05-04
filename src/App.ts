import express from 'express'
import Router from './RootRoutes'
import { RedisClient } from './App/Config/Redis.config';
import compression from 'compression'
// import cluster from 'cluster'
// import os from 'os'

// const cpus = os.cpus().length

const app = express()
const PORT = 4003
app.use(
    compression({
        level: 6, //
        threshold: 0,
        filter: (req, res) => {
          if (!req.headers['x-no-compression']) {
            return compression.filter(req, res);
          }
          return false;
        },
      })
)
app.use('/',Router)
// if(cluster.isMaster){
//     for(let i =0; i < cpus; i++ ){
//         cluster.fork()
//     }

// }else{

// }



const start = async() =>{
    try{
        await RedisClient.connect()
        app.listen(PORT,() =>{
            console.log("Working")
        })
    }catch(err){
        console.log(err)
    }
} 
start()

// docker build -t crud .

// docker run -it -p 4004:4004 crud