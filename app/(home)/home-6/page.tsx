import MarqueeArea5 from "@/components/common/marquee-area-5";
import Header4 from "@/components/layout/headers/header-4";
import About from "@/components/common/about";
import Hero from "@/components/pages/(home)/home-6/hero";
import ProjectArea from "@/components/pages/(home)/home-6/project-area";
import ServiceArea from "@/components/pages/(home)/home-6/service-area";
import Testimonial from "@/components/common/testimonial";
import ClientArea from "@/components/common/client-area";
import Footer6 from "@/components/layout/footers/footer-6";

export const metadata = {
    title: "Home 6",
};

const Home6 = () => {
    return (
        <>
            <Header4 />
            <Hero />
            <MarqueeArea5 />
            <About
                heading="Welcome to my portfolio! I'm Steven Enderson, a
                        passionate and innovative web designer and developer
                        based in United States. With 09 years of experience in
                        the industry, I specialize in creating visually stunning
                        and highly functional websites that provide an
                        exceptional user experience."
                paragraph="Whether it's crafting a visually stunning brand identity, designing
                        immersive digital experiences, or developing strategic marketing
                        campaigns, we approach each project with meticulous attention to
                        detail and an unwavering dedication to quality."
                variants="style-2"
            />
            <ProjectArea />
            <ServiceArea />
            <Testimonial
                headline="What clients says about me"
                style="style-2"
            />
            <ClientArea style="style-2" />
            <Footer6 />
        </>
    );
};

export default Home6;
