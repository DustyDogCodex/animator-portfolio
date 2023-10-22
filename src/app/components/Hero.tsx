import Image from "next/image"

function Hero() {
    return (
        <section 
            id="home"
            className="bg-hero-bg bg-no-repeat w-full h-screen bg-cover flex items-center justify-center"
        >
            <div className="container h-full relative">
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
                <div className="w-full min-h-screen flex items-center justify-between">
                    {/* tagline/intro */}
                    <div>   
                        <p className="text-5xl">
                            Animator and Designer
                        </p>
                        <p className="text-3xl">Based in the UK</p>
                    </div>

                    {/* Image */}
                    <div className="h-full w-1/2">
                        <Image 
                            src="/animator-stock.jpg"
                            alt="animator image"
                            width={300}
                            height={300}
                            className="h-screen w-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero