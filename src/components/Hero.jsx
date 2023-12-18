import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile1.jpg' className="profile-img" width={300} height={300} alt="Rahul's personal headshot" />
            <div className="hero-text">
                <div className="typed-out-container"><h1 className="typed-out">Hey, I'm Rahul 👋</h1></div>
                <p>
                    I'm an aspiring software engineer based in the Greater Boston area. I aim to expand my skills in the areas of application design/development, leadership, and team building.
                </p>
                <div className="social-icons">
                    <a
                        href="https://github.com/rajeshrah22"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rahulrajesh0305/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;