const express = require("express");
const router = express.Router();

//models 
const needPlayerModel = require("../../models/needPlayerModel");
const joinEventModel = require("../../models/joinEventModel");


router.post("/addToNeedPlayersList", function(req,res){
    console.log("addToNeedPlayersList request")
    let item = new needPlayerModel({
        category: req.body.category,
        title: req.body.title,
        date: req.body.date, 
        region: req.body.region,
        address: req.body.address,
        amPm: req.body.amPm,
        hour: req.body.hour,
        minute: req.body.minute,
        players: req.body.players,
        joinedPlayers: 0,
        duration: req.body.duration, 
        cost: req.body.cost,
        mobile: req.body.mobile,
        email: req.body.email,
        description: req.body.description,
        userId: req.body.userId,
        userName: req.body.userName,
        registeredDate: new Date(),
        modifiedDate: new Date()
    });

    item.save(function(err){
        if(err){
            return res.status(409).json({"message": "item not saved"})
        }
        return res.status(200).json({"message": "success"})
    });

});

router.get("/getEventDetail/:id", function(req, res){
    console.log("api/getEventDetail request arrived !!")
    const eventId = req.params.id;
    needPlayerModel.find({"_id": eventId}, function(err, item){
        if(err){
            return res.status(404).json({"message": "eventDetail not found"})
        }
        if(!item){
            return res.status(404).json({"message": "eventDetail not found"})
        }
        return res.status(200).json(item);
    })  
})

router.post("/joinEvent", function (req, res){
    console.log("joinEvent request arrived!")
    const joinEventItem = new joinEventModel({
        eventId : req.body.eventId,
        userId : req.body.userId,
        userName: req.body.userName,
        comment : req.body.comment
    })
    
    //save in joinEvent
    joinEventItem.save(function(err){
        if(err){
            return res.status(409).json({"message": "item not saved"})
        }
        //update joinedPlayers in eventList (joinedPlayers)
        needPlayerModel.updateOne( {"_id": req.body.eventId}, // query 
            { $inc: { "joinedPlayers": 1 }}, //increase by 1 
            function(err, item){
            if(err){
                return res.status(404).json({"message": "eventDetail not found"})
            }
            if(!item){
                return res.status(404).json({"message": "eventDetail not found"})
            }
            return res.status(200).json({"message": "success"})//success
        })   
    })
});

router.post("/getJoinedPlayers/:id", function (req, res){
    console.log("getJoinedPlayer request")
    const eventId = req.params.id;
    joinEventModel.find({"eventId": eventId}, function(err, item){
        if(err){
            return res.status(404).json({"message": "error"})
        }
        return res.status(200).json(item);
    }) 
})

router.post("/getModifyEvent/:id", function(req,res){
    console.log("modify Event request")
    const eventId = req.params.id;
    needPlayerModel.findOne({"_id": eventId}, function(err, item){
        if(err){
            return res.status(404).json({"message": "eventDetail not found"})
        }
        if(!item){
            return res.status(404).json({"message": "eventDetail not found"})
        }
        return res.status(200).json(item);
    })  
})

router.post("/saveModifiedEvent/:id", function(req,res){
    console.log("saving modified Event request")
    const eventId = req.params.id;
    const item = req.body;

    needPlayerModel.updateOne({"_id": eventId}, //query 
        {$set: item },//set changes
        function(err, item){
            if(err){
                return res.status(400).json({"message": "saving modifeidEvent Failed"})
            }
            if(!item){
                return res.status(400).json({"message": "cannot find item with id"})
            }
            return res.status(200).json({"message":"saving modfiedEvent Success"})
        }
    )
})

router.post("/deleteEvent/:id", function(req,res){
    console.log("delete event request")
    const id = req.params.id;
    
    //database action 두개의 데이타를 지워야 함.
    needPlayerModel.remove({"_id": id}, function (err, item){
        if(err) return res.status(409).json({"message":"delete event failed with"+ err})
        if(!item) return res.status(409).json({"message":"delete event failed with item not found"})

        joinEventModel.remove({"eventId": id}, function(err, item){
            if(err) return res.status(409).json({"message":"delete event failed with"+ err})
            if(!item) return res.status(409).json({"message":"delete event failed with item not found"})
            
            return res.status(200).json({"message": "delete event success"})
        })
    })
})



//Message routes
router.post("/modifyMessage", function(req, res){
    console.log("saving modified Message request")
    const id = req.body.id
    const comment = req.body.comment

    joinEventModel.updateOne( {"_id": id }, {$set: {"comment": comment}},
        function (err, item){
            if(err){
                return res.status(400).json({"message": "saving modified message Failed"})
            }
            if(!item){
                return res.status(400).json({"message": "cannot find item with id"})
            }
            return res.status(200).json({"message":"modifying message saved !"})
        }       
    )
})

router.post("/deleteMessage/:id", function(req, res){
    console.log("delete Message request")
    const joinedId = req.params.id;
    
    //get EventId from Joined collection
    joinEventModel.findOne( {"_id": joinedId }).then( response => {
        const eventId = response.eventId;
        joinEventModel.deleteOne({"_id": joinedId}).then( response => {
            console.log("delete message")
            needPlayerModel.updateOne({"_id": eventId}, 
                {$inc: {"joinedPlayers": -1}}
            ).then( response => {
                console.log("delete joinedPlayer")
                return res.status(200).json({"message":"delete message & dscrease Joinedplyaer success"})
            }).catch( error => {
                return res.status(409).json({"message": "needPlayerModel decrease joinedPlayers failed with"+ error})
            })  
        }).catch( error => {
            return res.status(409).json({"message": "delete message failed with"+ error})
        })
    }).catch( error => {
        return res.status(409).json({"message": "delete message failed with"+ error})
    })
})


module.exports = router;