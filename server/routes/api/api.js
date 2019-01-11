const express = require("express");
const router = express.Router();

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


router.get("/getEventList", function(req, res){
    console.log('api/getEventList request arrived')
    needPlayerModel.find( function(err, items){
        if(err){
            return res.status(404).json({"message": "eventList not found"})
        }
        if(!items){
            return res.status(404).json({"message":"eventList not found"})
        }
        return res.status(200).json(items);
    }).sort({ "date": 1 } );
})


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
        })  

        return res.status(200).json({"message": "success"})//success
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

router.post("/getModifyDetail/:id", function(req,res){
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

    needPlayerModel.updateOne({"_id": eventId},//query 
        {$set: req.body },//set changes
        function(err, item){
            if(err){
                res.status(400).json({"message": "saving modifeidEvent Failed"})
            }
            if(!item){
                res.status(400).json({"message": "saving modifeidEvent Failed"})
            }
            
            return res.status(200).json({"message":"saving modfiedEvent Success"})
        }
    )
})




module.exports = router;