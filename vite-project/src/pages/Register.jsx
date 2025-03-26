import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value   =   e.target.value;
        setUser({
          ...user,
            [name]:value, 
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                });
                console.log(response);
                if(response.ok){
                    setUser({
                        username:"",
                        email:"",
                        phone:"",
                        password:"",
                    });
                    navigate("/login");
                }
        } catch (error) {
            console.log(error);
        }
            
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
                                        <h1 className="main-heading mb-3">Registeration Form</h1>
                                        <br/>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="username">User Name</label>
                                                <input type="text" name="username" placeholder="Enter User Name" id="username" required autoComplete="off" value={user.username} onChange={handleInput} />
                                            </div>
                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}  />
                                            </div>
                                            <div>
                                                <label htmlFor="phone">Phone</label>
                                                <input type="number" name="phone" placeholder="Enter Your phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                                            </div>
                                            <div>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" placeholder="Enter Your Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                            </div>
                                            <br/>
                                            <button type="submit" className="btn btn-submit">Register Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </>
}