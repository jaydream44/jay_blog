import Hero from "@/components/common/hero";
import VideoArea2 from "@/components/common/video-area-2";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import FaqArea from "@/components/pages/(home)/home-3/faq-area";

export const metadata = {
    title: "FAQ",
};

const Pricing = () => {
    return (
        <>
            <Header />
            <Hero title="Quick answers to common questions" />
            <VideoArea2
                id="#quanto-faq-area"
                imgSrc="/images/hero/common-hero-thumb-6.png"
            />
            <FaqArea />
            <Footer />
        </>
    );
};

export default Pricing;
