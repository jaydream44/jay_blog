import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import Hero from "@/components/pages/(team)/team-details/hero";

export const metadata = {
    title: "Team Details",
};

const TeamDetails = () => {
    return (
        <>
            <Header />
            <Hero />
            <Footer />
        </>
    );
};

export default TeamDetails;
