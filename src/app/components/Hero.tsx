import Image from "next/image"
import Link from "next/link"

function Hero() {
    return (
        <section 
            id="home"
            className="bg-hero-bg bg-no-repeat w-full h-screen bg-cover flex items-center justify-center"
        >
            <div className="container">
                {/* place holder white circle for hero image */}
                {/* <div className="absolute bottom-16 left-16 bg-white w-1/2 h-3/5 rounded-full" /> */}
                
                {/* text bubble image with text */}
                {/* <div className="absolute top-24 right-40">
                    <Image 
                        src="/TextBubble.png" 
                        alt="text bubble background"  
                        height={700}
                        width={700}
                        className="relative"
                    />
                    <p className="absolute top-28 text-center p-16">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem vel repellat nobis culpa dolore aut magnam eveniet quia, beatae eius sint non odio voluptatem dicta quisquam rerum veritatis placeat nesciunt?
                    </p>
                </div> */}

                {/* Potential Landing Page 2 */}
                <div className="w-full h-screen flex flex-col md:flex-row items-center md:justify-between gap-5">
                    {/* tagline/intro */}
                    <div className="flex flex-col items-center justify-center h-1/2 md:h-full">   
                        <p className="text-5xl text-center">
                            Animator
                        </p>
                        <p className="text-5xl text-center">
                            &
                        </p>
                        <p className="text-5xl text-center">
                            Learning Content Designer
                        </p>
                        <p className="text-3xl mt-5">Based in the U.K.</p>

                        {/* portfolio and contact me links */}
                        <div className="mt-5 flex items-center gap-5">
                            <Link 
                                href={'/portfolio'}
                                className="py-2 px-5 rounded-lg bg-black text-white text-xl"
                            >
                                Browse Portfolio
                            </Link>
                            <Link 
                                href={'/contact'}
                                className="py-2 px-5 rounded-lg bg-black text-white text-xl"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="h-1/2 md:h-full w-full md:w-1/2">
                        <Image 
                            src="/animator-stock.jpg"
                            alt="animator image"
                            width={300}
                            height={300}
                            className="h-full md:h-screen w-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero