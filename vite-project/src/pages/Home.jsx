const Home = () =>{
    return <>
                <main>
                    <section className="section-hero">
                        <div className="container grid grid-two-cols">
                            <div className="hero-content">
                                <p>Welcome to the Best ReactJs</p>
                                <h1>Welcome to Thapa Technical</h1>
                                <p>
                                    Are you rade to take your business to the next level with cutting-edge IT solutions? Look no further! At this we specialized in providing innovating IT Services and solution tailored to meet your unique needs.
                                </p>
                                <div className="btn btn-group">
                                    <a href="/contact">
                                        <button className="btn">Connect Now</button>
                                    </a>
                                    <a href="/services">
                                        <button className="btn secondary-btn">Learn More</button>
                                    </a>
                                </div>
                            </div>
                            <div className="hero-image">
                                <img src="/images/register.jpg" alt="Home"/>
                            </div>
                        </div>
                    </section>
                </main>
                <section className="section-analytics">
                    <div className="container grid grid-four-cols">
                        <div className="div1">
                            <h2>50+</h2>
                            <p>Registered Companies</p>
                        </div>
                        <div className="div1">
                            <h2>500+</h2>
                            <p>Well known developers</p>
                        </div>
                        <div className="div1">
                            <h2>24/7</h2>
                            <p>Support Services</p>
                        </div>
                        <div className="div1">
                            <h2>100,00+</h2>
                            <p>Happy Customers!</p>
                        </div>
                    </div>
                </section>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-image">
                            <img src="/images/register.jpg" alt="Home"/>
                        </div>
                        <div className="hero-content">
                            <p>Welcome to the Best ReactJs</p>
                            <h1>Welcome to Thapa Technical</h1>
                            <p>
                                Are you rade to take your business to the next level with cutting-edge IT solutions? Look no further! At this we specialized in providing innovating IT Services and solution tailored to meet your unique needs.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect Now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">Learn More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        
};

export default Home;