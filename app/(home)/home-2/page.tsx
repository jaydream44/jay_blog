import Footer2 from "@/components/layout/footers/footer-2";
import Header2 from "@/components/layout/headers/header-2";
import AboutArea from "@/components/common/about-area";
import AwardArea from "@/components/common/award-area";
import BlogArea from "@/components/pages/(home)/home-2/blog-area";
import Hero from "@/components/pages/(home)/home-2/hero";
import PricingPlan from "@/components/common/pricing-plan";
import ProjectArea from "@/components/pages/(home)/home-2/project-area";
import ServiceArea from "@/components/common/service-area";
import TeamArea from "@/components/pages/(home)/home-2/team-area";
import VideoArea from "@/components/pages/(home)/home-2/video-area";

export const metadata = {
    title: "Home 2",
};

const Home2 = () => {
    return (
        <>
            <Header2 />
            <Hero />
            <ServiceArea title="We help you to build digital business" />
            <ProjectArea />
            <AboutArea />
            <VideoArea />
            <TeamArea />
            <AwardArea />
            <PricingPlan />
            <BlogArea />
            <Footer2 />
        </>
    );
};

export default Home2;
