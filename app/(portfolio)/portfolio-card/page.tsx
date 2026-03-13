import Hero from "@/components/common/hero";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import ProjectItem from "@/components/pages/(portfolio)/portfolio-card/project-item";

export const metadata = {
    title: "Portfolio Card",
};

const PortfolioCard = () => {
    return (
        <>
            <Header />
            <Hero title="Creating unforgettable digital impressions" />
            <ProjectItem />
            <Footer />
        </>
    );
};

export default PortfolioCard;
