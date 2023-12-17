const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
              {/**TODO:  */}
                <p>
                    &copy; {new Date().getFullYear()} Joel's Portfolio
                </p>
                <div className="social_icons">
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
        </>
    )
}

export default Footer;