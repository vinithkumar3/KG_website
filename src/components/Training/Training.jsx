
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./training.css"

const Training = () => {
    const navigate = useNavigate();
    return (
        <div id="Training" className='trainbg container'>
            <h1 class="section___title">Training & Schedule </h1>
            <div class="trainsch">


                <div class="coachTime">
                    <p class="coachTitle">Coaching Timing </p>

                    <p class="memberDay">Monday - Friday</p>
                    < p class="shift"> Evening</p><hr></hr>
                    <p class="red" > 4:30 pm - 7:00 pm</p>
                    
                </div>

                <div class="memberTime">
                    <p class="memberTitle">Membership Timimg</p>
                    <p class="memberDay">Monday - Saturday</p>

                    <div class="timeshift">
                        <div>
                            <ul className="customList">
                                <p class="shift"> Morning
                                    <hr></hr>
                                </p>
                                <li>5:00 am - 6:00 am</li>
                                <li>6:00 am - 7:00 am</li>
                                <li>7:00 am - 8:00 am</li>
                                <li>8:00 am - 9:00 am</li>
                                <li>9:00 am - 10:00 am</li>
                                <li>10:00 am - 11:00 am</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="customList">
                                < p class="shift"> Evening</p><hr></hr>
                                <li>7:00 pm - 8:00 pm</li>
                                <li>8:00 pm - 9:00 pm</li>
                                <li>9:00 pm - 10:00 pm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div ><button class=" book "  onClick={() => {
        navigate('/login');}}href="#login"> Book a slot</button>
            
        </div>
    )
}

export default Training;
