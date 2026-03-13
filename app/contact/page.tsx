import Hero from "@/components/common/hero";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import ContactForm from "@/components/pages/contact/contact-form";
import MapArea from "@/components/pages/contact/map-area";

export const metadata = {
    title: "Contact",
};

const Contact = () => {
    return (
        <>
            <Header />
            <Hero title="We’re just a message away to help you" />
            <MapArea />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Contact;
