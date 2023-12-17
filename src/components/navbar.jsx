import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Rahul's Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1n6vH1zZVeiBm6dhq7gweRAU2LBofoHUp/edit?usp=sharing&ouid=103967494602058031693&rtpof=true&sd=true" target="_blank" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;