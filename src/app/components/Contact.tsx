import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Contact() {
    return (
        <section 
            id="contact"
            className="bg-contact-bg bg-no-repeat w-full h-screen bg-cover flex items-center justify-center"    
        >
            <div className="container flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 z-20 bg-orange-400/80 rounded-lg p-3 text-white">
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
                            href=''
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} style={{ color:'white', height:'2rem', width:'2rem' }} />
                        </a>
                        <a
                            href=''
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faTwitter} style={{ color:'skyblue', height:'2rem', width:'2rem' }} />
                        </a>
                        <a
                            href=''
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} style={{ color:'limegreen', height:'2rem', width:'2rem' }} />
                        </a>
                    </div>
                </div>

                {/* contact me form */}
                <div className="w-full md:w-1/2 px-0 md:px-5 mt-5 md:mt-0">
                    <form action="" method="POST" className="flex flex-col gap-4">
                        <input 
                            type="email" 
                            id="email"
                            required
                            placeholder="Your email address"
                            className="p-2 rounded-xl bg-slate-800 text-white placeholder-slate-400"    
                        />
                        <input 
                            type="text" 
                            id="subject"
                            required
                            placeholder="Subject"    
                            className="p-2 rounded-xl bg-slate-800 text-white placeholder-slate-400" 
                        />
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder="Connect with me by sending me a message!"
                            rows={6}
                            required
                            className="p-2 rounded-xl bg-slate-800 text-white placeholder-slate-400"  
                        />
                        <div
                            className="w-full flex items-center justify-center"
                        >
                            <button
                                type="submit"
                                className="bg-fuchsia-600 py-2 px-5 text-lg w-fit rounded-xl hover:scale-110 transition duration-300"
                            >
                                Send Message!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact