const About = () =>{
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
        </>
};

export default About;