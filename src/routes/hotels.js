import Hotel from '../models/Hotel.js';


// // create
router.post('/', async (req,res)=>{

    const newHotel = new Hotel(reg.body)

    try{
        const newHotel = await newHotel.save()
        res.status(200).jason(savedHotel)

    }catch(err){
        res.status(500).jason(err)
    }
})
// // update
// // delete
// // get
// // get all


// export default router