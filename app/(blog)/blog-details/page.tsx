import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import BlogSingleInfo from "@/components/pages/(blog)/blog-details/blog-single-info";
import MoreArticle from "@/components/pages/(blog)/blog-details/more-article";

export const metadata = {
    title: "Blog Details",
};

const BlogDetails = () => {
    return (
        <>
            <Header />
            <BlogSingleInfo />
            <MoreArticle />
            <Footer />
        </>
    );
};

export default BlogDetails;
