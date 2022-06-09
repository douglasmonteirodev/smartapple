import React from "react";

const Contact = () => {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5 d-flex justify-content-center align-items-center'>
                        <img
                            src='./assets/images/contact.png'
                            height='300px'
                            alt='contact'
                        />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <form>
                            <div className='mb-3'>
                                <label htmlFor='exampleForm' className='form-label'>
                                    Full Name
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleForm'
                                    placeholder='Douglas Monteiro'
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlInput1'
                                    className='form-label'
                                >
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleFormControlInput1'
                                    placeholder='name@example.com'
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlTextarea1'
                                    className='form-label'
                                >
                                    Message
                                </label>
                                <textarea
                                    className='form-control'
                                    id='exampleFormControlTextarea1'
                                    rows='5'
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-outline-primary'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
