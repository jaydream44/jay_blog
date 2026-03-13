import MarqueeArea4 from "@/components/common/marquee-area-4";
import Footer4 from "@/components/layout/footers/footer-4";
import Header from "@/components/layout/headers/header";
import ProjectArea from "@/components/pages/(home)/home-1/project-area";
import AboutArea from "@/components/pages/(home)/home-4/about-area";
import Hero from "@/components/pages/(home)/home-4/hero";
import ServiceArea from "@/components/pages/(home)/home-4/service-area";
import TeamArea from "@/components/pages/(home)/home-4/team-area";
import Testimonial from "@/components/pages/(home)/home-4/testimonial";

export const metadata = {
    title: "Home 4",
};

const Home4 = () => {
    return (
        <>
            <Header />
            <Hero />
            <ServiceArea />
            <MarqueeArea4
                data={[
                    "powerful digital branding agency",
                    "powerful digital branding agency",
                ]}
            />
            <AboutArea />
            <ProjectArea />
            <Testimonial />
            <TeamArea />
            <Footer4 />
        </>
    );
};

export default Home4;
