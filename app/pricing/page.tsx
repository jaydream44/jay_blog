import Hero from "@/components/common/hero";
import VideoArea2 from "@/components/common/video-area-2";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import FaqArea from "@/components/pages/(home)/home-3/faq-area";
import PricingPlan from "@/components/pages/pricing/pricing-plan";

export const metadata = {
    title: "Pricing",
};

const Pricing = () => {
    return (
        <>
            <Header />
            <Hero title="Delivering quality that fits your budget" />
            <VideoArea2
                id="#quanto-pricing-area"
                imgSrc="/images/hero/common-hero-thumb-5.png"
            />
            <PricingPlan />
            <FaqArea style="style-1" />
            <Footer />
        </>
    );
};

export default Pricing;
