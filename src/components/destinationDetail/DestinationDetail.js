import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DatePicker } from 'react-rainbow-components';
import { Input } from 'react-rainbow-components';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'

import './DescriptionDetail.css'


const DestinationDetail = () => {
    const { name } = useParams();
    const [destination, setDestination] = useState([]);
    const containerStyles = {
        width: 400,
    };
    useEffect(() => {
        fetch('./destinations.json')
            .then(res => res.json())
            .then(data => setDestination(data.filter(destination => destination.name === name)))
    }, [])
    const [state, setState] = useState("");
    const [anotherState, setAnotherState] = useState("")
    let today = new Date().toLocaleDateString()
    const handleAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Booking Done",
            showCloseButton: true
        })
    }
    const origin = document.getElementById("input-4");
    const destinationPlace = document.getElementById("input-10");
    const startDate = document.getElementById("input-16");
    const endDAte = document.getElementById("input-26");

    const handleClear = () => {
        origin.value = "";
        destinationPlace.value = "";
        startDate.value = "";
        endDAte.value = "";
    }
    const handleBookingButton = () => {
        handleClear();
        handleAlert();
    }
    return (
        <div className="container destination">
            <div className="info">
                <h1 className="info-title">{destination[0]?.name}</h1>
                <p>{destination[0]?.description}</p>
            </div>
            <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto date-inputs" >
                <div>
                    <div>
                        <label htmlFor="origin place">Origin</label>
                        <Input
                            id="input-component-1"
                            placeholder="Origin Place"
                            style={containerStyles}
                            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                        />
                    </div>
                    <div>
                        <label htmlFor="destination place">Destination</label>
                        <Input
                            id="input-component-1"
                            placeholder="Destination place"
                            style={containerStyles}
                            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                        />
                    </div>
                </div>
                <div className="dateInputGroup">
                    <div>
                        <label htmlFor="from">From</label>
                        <DatePicker
                            value={state?.date}
                            onChange={value => setState({ date: value })}
                            className="dateInput from"
                            placeholder={today}
                        />
                    </div>
                    <div>
                        <label htmlFor="to">To</label>
                        <DatePicker
                            value={anotherState?.date}
                            onChange={value => setAnotherState({ date: value })}
                            className="dateInput to"
                            placeholder={today}
                        />
                    </div>
                </div>
                <Button className="log-in start-booking" variant="contained" onClick={handleBookingButton}>Start Booking</Button>
            </div>
        </div>
    );

};

export default DestinationDetail;










/*






*/