import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import Hero from "@/components/pages/about/hero";
import OurAchievement from "@/components/common/our-achievement";
import AboutArea from "@/components/common/about-area";
import AwardArea from "@/components/common/award-area";
import TeamArea from "@/components/pages/(home)/home-2/team-area";
import Testimonial from "@/components/common/testimonial";
import ClientArea2 from "@/components/common/client-area-2";
import VideoArea3 from "@/components/common/video-area-3";

export const metadata = {
    title: "About",
};

const About = () => {
    return (
        <>
            <Header />
            <Hero />
            <VideoArea3 scrollToSection="#our-achievement-01" />
            <OurAchievement style="style-2" />
            <AboutArea style="style-2" />
            <AwardArea />
            <TeamArea style="style-2" />
            <Testimonial
                headline="What clients say about our company"
                style="style-3"
            />
            <ClientArea2 style="style-3" />
            <Footer />
        </>
    );
};

export default About;
