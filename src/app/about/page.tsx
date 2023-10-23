import Image from "next/image"
import PageTransition from "../components/PageTransition"

function About() {
    return (
        <PageTransition>
        <section 
            id="about"
            className="bg-about-bg bg-no-repeat bg-center w-full min-h-screen bg-cover flex items-center justify-center"
        >
            <div className="container w-full flex flex-col items-center justify-center gap-10 p-5 md:p-0">
                {/* image */}
                <Image 
                    src="/animator-stock.jpg"
                    alt="stock photo"
                    height={300}
                    width={300}
                    className="w-96 h-96 object-cover rounded-full"
                />

                {/* about me text */}
                <p className="text-lg md:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus consequuntur in ab molestiae nostrum rerum aliquam qui suscipit non aspernatur et, veritatis ipsum nulla deserunt mollitia perferendis ipsam! Est non quam cumque, placeat velit nobis perspiciatis id ex aliquam natus illum delectus unde sit sint animi exercitationem veniam architecto.
                </p>
            </div>
        </section>
        </PageTransition>
    )
}

export default About