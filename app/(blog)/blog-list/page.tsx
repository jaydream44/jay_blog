import Hero from "@/components/common/hero";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import BlogArea from "@/components/pages/(blog)/grid-list/blog-area";

export const metadata = {
    title: "Blog List",
};

const BlogList = () => {
    return (
        <>
            <Header />
            <Hero title="Explore latest news and insights" />
            <BlogArea />
            <Footer />
        </>
    );
};

export default BlogList;
