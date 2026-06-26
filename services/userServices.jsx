// import axios from 'axios'

  const url = import.meta.env.VITE_API_URL;

async function getUser(){
    try{
        const result = await axios.get(url+"/userData")
        return result.data
    } catch(err){
       return console.log("Error in fetching Doctors",err);
    }
}
async function getUserByID(id){
try{
        const result = await axios.get(url+"/userData/"+id)
        return result.data
    }catch(err){
       return console.log("Error in fetching Doctor",err);
    }
}


async function createUser(data){
    try{
        const result = axios.post(url+"/userData",data)
        return result.data
    }catch(err){
       return console.log("Error in creating Doctor",err);
    }
}

async function updateUser(id,data){
    try{
        const result = await axios.put(`${url}/userData/${id}`,data)
        return result.data
    }catch(err){
       return console.log("Error in updating Doctor",err);
    }
}

async function deletUser(id){
    try{
        axios.delete(`${url}/userData/${id}`,id)
    }catch(err){
       return console.log("Error in deleting Doctor",err);
    }
}

export default { getUser,getUserByID,updateUser,deletUser,createUser }