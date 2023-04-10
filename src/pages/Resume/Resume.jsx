import Header from "../../home-partials/Header"
import FeaturesZigzag from "./FeaturesZigzag"

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
                                <FeaturesZigzag/>
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