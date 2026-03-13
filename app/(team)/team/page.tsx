import VideoArea2 from "@/components/common/video-area-2";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import Hero from "@/components/common/hero";
import TeamArea from "@/components/pages/(team)/team/team-area";
import Testimonial from "@/components/common/testimonial";

export const metadata = {
    title: "Team",
};

const Team = () => {
    return (
        <>
            <Header />
            <Hero title="Building success through collaboration" />
            <VideoArea2
                id="#quanto-team-area"
                imgSrc="/images/hero/common-hero-thumb-4.png"
            />
            <TeamArea />
            <Testimonial
                style="style-3"
                headline="What clients say about our company"
            />
            <Footer />
        </>
    );
};

export default Team;
