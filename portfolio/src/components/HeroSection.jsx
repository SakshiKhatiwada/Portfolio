import bannerImg from "../assets/img/banner-bg.png"
import headerImg from "../assets/img/header-img.svg"
import { FaPaperPlane } from "react-icons/fa";
import connectIcon from "../assets/connectIcon.svg"
const HeroSection = () => {
    return (
        <main className="hero-section">
            <div className="container">
                <section className="row">
                    <div className="col">
                        <span className="tagline">Welcome!</span>
                        <h1>Hi! I am Sakshi Khatiwada, <span className="wrap">Web Developer</span></h1>
                        <p>I&apos;m a student pursuing my Bachelor&apos;s degree in Computer Science and Information Technology.</p>
                    </div>
                    <button className="btn" onClick={() => { console.log('functionality to add') }}>
                        <span>Let&apos;s Connect <FaPaperPlane /> </span>
                    </button>
                </section>

                <section className="row">
                    <div className="col">
                        <img src={headerImg} alt="" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HeroSection