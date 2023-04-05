import Header from "../home-partials/Header"
import ResumeImage from "../images/Jacob-Feng-Winter-2023-Resume 2.7.5.png"

function Resume() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="grow">
                <section>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                        {/* Hero content */}
                        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                            <div>
                                <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
                                    <img className="mx-auto" src={ResumeImage} width="700"  alt="Hero" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <img className="mx-auto" src={ResumeImage} width="1024" height="504" alt="Hero" /> */}
            </main>
        </div>
    )
}

export default Resume