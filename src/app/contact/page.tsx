import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faBehance } from "@fortawesome/free-brands-svg-icons"
import PageTransistion from "../components/PageTransition"

function Contact() {
    return (
        <PageTransistion>
        <section 
            id="contact"
            className="bg-contact-bg bg-no-repeat bg-center w-full h-screen bg-cover flex items-center justify-center"    
        >
            <div className="container flex flex-col md:flex-row p-3 md:p-0">
                <div className="w-full md:w-1/2 z-20 bg-sky-200/80 rounded-lg p-3">
                    {/* heading and intro to section */}
                    <h2 className="text-2xl font-bold text-center md:text-left">{"Let's Connect"}</h2>
                    <p
                        className="text-lg mt-3 text-center md:text-left"
                    >
                        {"I'm currently looking for new oppurtunities to work, learn and grow my skillset. If you'd like to hire me, collaborate on a project or buy me a slice of pizza, feel free to send me an email using the contact form. I look forward to hearing from you!"}
                    </p>

                    {/* links to socials */}
                    <div className="mt-5 flex items-center justify-center md:justify-start gap-5">
                        <a
                            href='https://www.behance.net/shreyamalada35'
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faBehance} style={{ color:'black', height:'2rem', width:'2rem' }} />
                        </a>
                        <a
                            href='https://www.instagram.com/fire_stone97/?igsh=OHl4c3lwdmp4b29t'
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faInstagram} style={{ color:'black', height:'2rem', width:'2rem' }} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/shreya-malaviya-8712a924/'
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} style={{ color:'black', height:'2rem', width:'2rem' }} />
                        </a>
                    </div>
                </div>

                {/* contact me form */}
                <div className="w-full md:w-1/2 px-0 md:px-5 mt-5 md:mt-0">
                    <form action="https://formsubmit.co/1771891286d6c1ce5fe2a31a30795d97" method="POST" className="flex flex-col gap-4">
                        <input 
                            type="email" 
                            name="email"
                            required
                            placeholder="Your email address"
                            className="p-2 rounded-xl bg-slate-400 placeholder-primary-text"    
                        />
                        <input 
                            type="text" 
                            name="subject"
                            required
                            placeholder="Subject"    
                            className="p-2 rounded-xl bg-slate-400 placeholder-primary-text" 
                        />
                        <textarea 
                            name="message"  
                            placeholder="Connect with me by sending me a message!"
                            rows={6}
                            required
                            className="p-2 rounded-xl bg-slate-400 placeholder-primary-text"  
                        />
                        <div
                            className="w-full flex items-center justify-center"
                        >
                            <button
                                type="submit"
                                className="bg-sky-300 text-white py-2 px-5 text-lg w-fit rounded-xl hover:scale-110 transition duration-300"
                            >
                                Send Message!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </PageTransistion>
    )
}

export default Contact