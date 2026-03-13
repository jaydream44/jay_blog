import Header from "@/components/layout/headers/header";
import About from "@/components/common/about";
import Hero from "@/components/pages/(home)/home-1/hero";
import ProjectArea from "@/components/pages/(home)/home-1/project-area";
import OurAchievement from "@/components/common/our-achievement";
import ServiceArea from "@/components/pages/(home)/home-1/service-area";
import Testimonial from "@/components/pages/(home)/home-1/testimonial";
import ClientArea from "@/components/common/client-area";
import BlogArea from "@/components/common/blog-area";
import Footer from "@/components/layout/footers/footer";

export const metadata = {
    title: "Home",
};

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About
                heading="Our digital strategies and design expertise
                                    focus on promoting social economy
                                    businesses, cutting-edge brands, and
                                    eco-friendly products to motivate consumers
                                    to make informed decisions towards
                                    sustainable products and services"
                paragraph="Whether it's crafting a visually stunning brand identity, designing immersive digital experiences, or developing strategic marketing campaigns, we approach each project with meticulous attention to detail and an unwavering dedication to quality."
            />
            <OurAchievement />
            <ProjectArea />
            <ServiceArea />
            <Testimonial />
            <ClientArea />
            <BlogArea />
            <Footer />
        </>
    );
};

export default Home;
