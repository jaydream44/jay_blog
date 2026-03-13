import BlogArea from "@/components/common/blog-area";
import Footer5 from "@/components/layout/footers/footer-5";
import Header2 from "@/components/layout/headers/header-2";
import ClientArea from "@/components/common/client-area-2";
import AboutArea from "@/components/pages/(home)/home-5/about-area";
import AwardArea from "@/components/pages/(home)/home-5/award-area";
import BgArea from "@/components/pages/(home)/home-5/bg-area";
import Hero from "@/components/pages/(home)/home-5/hero";
import ProjectArea from "@/components/pages/(home)/home-5/project-area";
import ServiceArea2 from "@/components/common/service-area-2";
import VideoArea4 from "@/components/common/video-area-4";

export const metadata = {
    title: "Home 5",
};

const Home5 = () => {
    return (
        <>
            <Header2 />
            <Hero />
            <AboutArea />
            <ClientArea style="style-2" />
            <ServiceArea2 />
            <BgArea />
            <ProjectArea />
            <AwardArea />
            <VideoArea4 style="style-2" />
            <BlogArea style="style-2" />
            <Footer5 />
        </>
    );
};

export default Home5;
