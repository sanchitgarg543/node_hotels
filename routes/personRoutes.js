const express = require('express');
const router = express.Router();
const Person = require("../models/Person");


router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request bosy contains the person data

    //Create a new Person document using mongoose model
    const newPerson = new Person(data);
    // newPerson.name = data.name; // for avoiding these dirstly parse data

    //Save the new Person to the database //it will give error that doesnot accept callback and noone uses that code is hard also
    const response = await newPerson.save(); //response keyword is not reserved
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});




//GET METHOD TO GET THE PERSON
router.get("/", async (req, res) => {
  try {
    const data = await Person.find(); //person collection sa records return kra diya
    console.log("data fetched successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/:workTypee",async(req,res)=>{
  try {
    const workType = req.params.workTypee;
  if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
    const response = await Person.find({work: workType});
    console.log('response fetched');
    res.status(200).json(response);
  }else{
    res.status(404).json({error:'Invalid work type'});
  }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.put("/:id",async(req,res)=>{
  try {                                                              //case 1 ok report
    const personId = req.params.id;//extract id from the url parameter
    const updatedPersonData = req.body;// vahi data bhejaga jo update krna h 

    const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
      new: true,//Return the updated document
      runValidators : true,// Run the mongoose validation
    })
    if(!response){                                                        //case 2 wrong id
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data updated ');
    res.status(200).json(response);
    
  } catch (err) {                                                             //case 3 error
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
})

router.delete('/:id',async(req,res)=>{
  try {
    const personId = req.params.id;//extract id from the url parameter
    //Assume you have a Person model
    const response = await Person.findByIdAndDelete(personId);
    if(!response){                                                        //case 2 wrong id
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data deleted');
    res.status(200).json({message:'Person Deleted sucessfully'});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
})



module.exports = router;