import { useState } from "react";
export const Login = () =>{
    const [user, setUser] = useState({
        email:"",
        password:"",
    });
    const handleInput = (e) => {
        let name = e.target.name;
        let value   =   e.target.value;
        setUser({
          ...user,
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
                                <div className="login-image">
                                    <div className="login-image">
                                        <img src="/images/register.jpg" alt="login form" width="150" height="150"/>
                                    </div>
                                    <div className="login-form">
                                        <h1 className="main-heading mb-3">Login</h1>
                                        <br/>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}  />
                                            </div>
                                            <div>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" placeholder="Enter Your Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                            </div>
                                            <br/>
                                            <button type="submit" className="btn btn-submit">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </>
};

export default Login;