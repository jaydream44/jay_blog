import Hero from "@/components/common/hero";
import VideoArea2 from "@/components/common/video-area-2";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import PortfolioInfo from "@/components/pages/(portfolio)/portfolio-details/portfolio-info";

export const metadata = {
    title: "Portfolio Details",
};

const PortfolioDetails = () => {
    return (
        <>
            <Header />
            <Hero title="Hopscotch Payments" />
            <VideoArea2
                id="#quanto-portfolio-details-section"
                imgSrc="/images/portfolio-details/portfolio-details-thumb.png"
            />
            <PortfolioInfo />
            <Footer />
        </>
    );
};

export default PortfolioDetails;
