import React, { useState } from 'react';

const Contact = () =>{
    const [contact, setContact] = useState({
            username:"",
            email:"",
            message:"",
        });
        const handleInput = (e) => {
            let name = e.target.name;
            let value   =   e.target.value;
            setContact({
              ...contact,
                [name]:value, 
            })
        }
        const handleSubmit = (e) => {
            e.preventDefault();
        }
    return <>
                <section>
                    <main>
                        <div className="section-registraion">
                            <div className="container grid grid-two-cols">
                                <div className="registration-image">
                                    <div className="registration-image">
                                        <img src="/images/register.jpg" alt="registration form" width="150" height="150"/>
                                    </div>
                                    <div className="registration-form">
                                        <h1 className="main-heading mb-3">Contact Us</h1>
                                        <br/>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="username">User Name</label>
                                                <input type="text" name="username" placeholder="Enter User Name" id="username" required autoComplete="off" value={contact.username} onChange={handleInput} />
                                            </div>
                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off" value={contact.email} onChange={handleInput}  />
                                            </div>
                                            <div>
                                                <label htmlFor="message">Message</label>
                                                <textarea value={ contact.message } name="message" id="message" onChange={handleInput}  />
                                            </div>
                                            <br/>
                                            <button type="submit" className="btn btn-submit">Contact Us</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </>
};

export default Contact;