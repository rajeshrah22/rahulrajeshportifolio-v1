import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Rahul's Portfolio
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
