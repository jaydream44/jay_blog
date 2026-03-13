import MoveAnim from "@/components/framer/move-anim";

const Hero = () => {
    return (
        <>
            <section className="quanto-hero-faq-section section-padding-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row g-4">
                        <div className="col-12">
                            <MoveAnim delay={0.45}>
                                <div className="quanto-hero-common__content pe-xxl-5">
                                    <h1 className="title">
                                        Join our agency and start your career
                                        journey
                                    </h1>
                                </div>
                            </MoveAnim>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
