import Footer3 from "@/components/layout/footers/footer-3";
import Header3 from "@/components/layout/headers/header-3";
import AboutArea from "@/components/pages/(home)/home-3/about-area";
import BlogArea from "@/components/pages/(home)/home-3/blog-area";
import FaqArea from "@/components/pages/(home)/home-3/faq-area";
import Hero from "@/components/pages/(home)/home-3/hero";
import ProjectArea from "@/components/pages/(home)/home-3/project-area";
import ServiceArea from "@/components/pages/(home)/home-3/service-area";
import Testimonial from "@/components/common/testimonial";
import WorkingProcess from "@/components/pages/(home)/home-3/working-process";
import ClientArea2 from "@/components/common/client-area-2";
import VideoArea4 from "@/components/common/video-area-4";

export const metadata = {
    title: "Home 3",
};

const Home3 = () => {
    return (
        <>
            <Header3 />
            <Hero />
            <ProjectArea />
            <AboutArea />
            <VideoArea4 />
            <ServiceArea />
            <WorkingProcess />
            <Testimonial headline="What clients say about our company" />
            <ClientArea2 />
            <BlogArea />
            <FaqArea />
            <Footer3 />
        </>
    );
};

export default Home3;
