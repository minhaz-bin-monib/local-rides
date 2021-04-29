import React from 'react';
import { useHistory } from 'react-router';
import Destination from '../Destination/Destination';

import "./FakeData.css"

const FakeData = (props) => {
    const { imgUrl, id, name } = props.data;
    const history = useHistory();
    const handleVehicle = () => {
        const url = `destination/${id}`
        history.push(url);
        // console.log(id)
    }

    return (
        <div className="all-card" onClick={handleVehicle}>

            <div className="col-md-3" className="card">
                <img src={imgUrl} alt="" />

                <h5 style={{ marginLeft: '30px', marginTop: '30px' }}>    <strong>{name}</strong> </h5>
            </div>


        </div>

    );
};

export default FakeData;