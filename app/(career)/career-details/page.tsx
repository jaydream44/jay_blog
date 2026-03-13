import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import CareerInfo from "@/components/pages/(career)/career-details/career-info";

export const metadata = {
    title: "Career Details",
};

const CareerDetails = () => {
    return (
        <>
            <Header />
            <CareerInfo />
            <Footer />
        </>
    );
};

export default CareerDetails;
