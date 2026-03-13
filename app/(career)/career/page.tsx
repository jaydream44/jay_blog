import ServiceArea from "@/components/common/service-area";
import VideoArea2 from "@/components/common/video-area-2";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import CareerGallery from "@/components/pages/(career)/career/career-gallery";
import CareerTimeline from "@/components/pages/(career)/career/career-timeline";
import Hero from "@/components/pages/(career)/career/hero";

export const metadata = {
    title: "Career",
};

const Career = () => {
    return (
        <>
            <Header />
            <Hero />
            <VideoArea2
                id="#quanto-career-section"
                imgSrc="/images/hero/common-hero-thumb-3.png"
            />
            <CareerTimeline />
            <CareerGallery />
            <ServiceArea title="Joining us as a valued member of our team" />
            <Footer />
        </>
    );
};

export default Career;
