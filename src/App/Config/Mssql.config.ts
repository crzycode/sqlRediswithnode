import sql from 'mssql'

const dbsetting = {
    user:"Mangal",
    password:"kali",
    server:"103.255.39.101",
    database:"test",
    options:{
        encrypt:false,
        trustedconnection:true
    },
    port:1433
}

export const sqlDb = async() =>{
    try{
        const pool = await sql.connect(dbsetting)
        return pool
    }catch(err){
        console.log(err)
    }
}