// import bannerImg from "../assets/img/banner-bg.png"
import { useEffect, useState } from "react";
import headerImg from "../assets/img/header-img.svg"
import { FaPaperPlane } from "react-icons/fa";
// import connectIcon from "../assets/connectIcon.svg"
const HeroSection = () => {

    // for writing animation
    const Words = ['Web Developer', 'CSIT student', 'Poem Reciter'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);  //timer for writing animation
    const period = 400;


    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta);

        return(()=> clearInterval(ticker));
    },[text])

    //tick function
    const tick = () =>{
        let i = loopNum % Words.length
        let fullText = Words[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        // if(!isDeleting ){
        //     setDelta(prevDelta => prevDelta);
        // }

        if(!isDeleting && updatedText === fullText )
        {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(300);
            setLoopNum(loopNum + 1);
        }
    }

    return (
        <main className="hero-section">
            <div className="container">
                <section className="row">
                    <div className="col">
                        <span className="tagline">Welcome!</span>
                        <h1>Hi! I am Sakshi Khatiwada, <span className="rotating-text">{text}</span></h1>
                        <p>I&apos;m a student pursuing my Bachelor&apos;s degree in Computer Science and Information Technology.</p>
                    </div>
                    <button className="btn" onClick={() => { console.log('functionality to add') }}>
                        <span>Let&apos;s Connect <FaPaperPlane /> </span>
                    </button>
                </section>

                <section className="row">
                    <div className="col">
                        <img src={headerImg} alt="header img" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HeroSection