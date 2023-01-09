const CollegeModel=require("../models/collegemodel")


const createcollege=async function(req,res){
    try{ 
        let data=req.body
    const {name,fullname,logolink}=data
    if(!data){
        res.status(400).send({msg:"all fiels are mandatory"})
    }
    let savedata=await CollegeModel.create(data)

    res.status(201).send({status:true,data:savedata})
}catch(error){
    res.status(500).send({error:error.message})

}
}

module.exports.createcollege=createcollege