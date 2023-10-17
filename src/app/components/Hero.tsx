import Image from "next/image"

function Hero() {
    return (
        <section 
            id="hero"
            className="bg-hero-bg bg-no-repeat w-full h-screen bg-cover flex items-center justify-center"
        >
            <div className="container border border-black h-full pt-20 relative">
                {/* place holder white circle for hero image */}
                <div className="absolute bottom-16 left-16 bg-white w-1/2 h-3/5 rounded-full" />
                
                {/* text bubble image with text */}
                <div className="absolute top-24 right-40">
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
                </div>
            </div>
        </section>
    )
}

export default Hero