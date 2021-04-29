import React from 'react';
import "./Home.css"
import image1 from "./images/Frame.png"
import image2 from "./images/Frame-1.png"
import image3 from "./images/Frame-2.png"
import image4 from "./images/Group.png"
import FakeData from '../FakeData/FakeData';
import Destination from '../Destination/Destination';

const Home = (props) => {
    const fakeData = [
        {
            id:1,
            name:'BIKE',
            imgUrl: image1
            
        },
        {
            id:2,
            name:'BUS',
            imgUrl: image2
        },
        {
            id:3,
            name:'CAR',
            imgUrl: image3
        },
        {
            id:4,
            name:'TRAIN',
            imgUrl: image4
        }
    ]
    
    return (
        <div className="row">
            {
                fakeData.map(data => <FakeData data={data} ></FakeData> )
            }
            
        </div>
    );
};

export default Home;