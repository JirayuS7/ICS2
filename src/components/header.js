import Logo from "../images/logo.svg"
import profileimage from "../images/profile_demo.png"
import Berger from "../images/Vectorberger-icon.png"

function Header() {





    return (
        <>
            <div id="sidebar">

                <div id="sibar_logo"> <img src={Logo} alt="" className="" /></div>
                <div id="berger_icon"> <a href="#"> <span className="img"><img src={Berger} alt="" /></span> <strong>Place</strong></a></div>
            </div>

            <nav className="navbar fixed-top   navbar-light  " style={{ backgroundColor: "#134B8A" }}>
                <div className="container-fluid">
                    <a className="navbar-brand">  <img src={Logo} alt="" className=" d-inline-block align-text-top" /></a>
                    <form className="d-flex">
                        <div id="profileBar">


                            <div id="ring">

                                <div></div>

                            </div>

                            <div id="profiletab">


                                <img src={profileimage} alt="" />
                                <a id="profile_name" href="#">Akkarapol</a>

                            </div>

                        </div>
                    </form>
                </div>
            </nav>
        </>

    )



}


export default Header