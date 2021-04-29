import React from 'react';
import { useParams } from 'react-router';
import img1 from "./images/Frame.png"
import img2 from "./images/Frame-1.png"
import img3 from "./images/Frame-2.png"
import img4 from "./images/Group.png"
import icon from "./images/peopleicon.png"
import "./Destination.css"
import mapPicture from "./images/Map.png"


const Destination = () => {

    const { idVehicle } = useParams();
    const vehicleNumber = parseInt(idVehicle);
    console.log(vehicleNumber)

    const handleSubmit = () => {
        console.log('ok')

    }



    return (
        <div>
            <div className="row" className="main-flex">


                <div className="col-md-6" className="vehicle-display">
                    <h3 style={{color:"blue"}}>Vehicle Details</h3>

                    <div className="car-display">

                        <div className="car-margin" >
                            {vehicleNumber == 1 && <img style={{ width: '70px' }} src={img1} alt="" />}
                            {vehicleNumber == 2 && <img style={{ width: '70px' }} src={img2} alt="" />}
                            {vehicleNumber == 3 && <img style={{ width: '70px' }} src={img3} alt="" />}
                            {vehicleNumber == 4 && <img style={{ width: '70px' }} src={img4} alt="" />}
                        </div>
                        
                        <div >
                            <p><strong>Vehicle</strong> <img style={{ width: '20px' }} src={icon} alt="" /> 4  </p>
                        </div>
                    </div>


                    <div style={{marginTop:"50px"}}>
                        <form onSubmit={handleSubmit}>

                            <h3 style={{color:"blue"}}>Select Picking Time</h3>
                            <input type="time" name="" id="" />
                            <input type="date" name="" id="" />

                            <br />

                            <h3 style={{marginTop:"50px",color:"blue"}} >Select Place</h3>

                            <input type="text" name="email" placeholder="Pick From" required />
                            <br />
                            <input type="password" name="password" placeholder="Pick To" required />
                            <br />

                            <br />
                            <input type="submit" value='Confirm Ride' style={{ backgroundColor: 'lightseagreen' }} />
                            <p><small><strong>***After confirm, You will automatically Logout</strong></small></p>



                        </form>
                    </div>

                </div>




                <div className="col-md-6">
                    <img src={mapPicture} alt="" />
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.65890250301!2d90.32726109792911!3d23.81046589717431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2z4Kau4Ka_4Kaw4Kaq4KeB4KawLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1616233147583!5m2!1sbn!2sbd" width="100" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                    <p></p>


                </div>



            </div>







            

        </div>
    );
};

export default Destination;