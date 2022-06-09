import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                    <p className='lead'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                        beatae, rerum odit perspiciatis autem velit numquam eos
                        voluptatum et vero, veritatis inventore consectetur facere
                        nulla accusantium harum. Voluptates sequi, eius totam dolorem
                        ea vitae laboriosam iusto impedit, nisi autem esse nostrum
                        consequuntur ipsam debitis? Atque dolorum accusantium in odit
                        assumenda ea quidem qui laborum, corporis esse earum sunt,
                        deserunt fuga expedita sapiente sit ipsa. Quod minima
                        blanditiis quidem ipsa alias laborum reprehenderit
                        consectetur qui, corporis perspiciatis! Libero neque modi quo
                        asperiores ut quaerat, distinctio, officia minima, natus
                        reiciendis repellat corrupti aliquid sint culpa magnam iure
                        ad tempore recusandae? Vel, quis.
                    </p>
                    <NavLink to='/contact' className='btn btn-outline-primary'>
                        Contact Us
                    </NavLink>
                </div>
                <div className='col-md-6 p-5 d-flex justify-content-center'>
                    <img
                        src='./assets/images/about.png'
                        alt='About'
                        height='400px'
                        width='400px'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
