"use client";
import MoveAnim from "@/components/framer/move-anim";
import Hyperlink from "@/components/ui/hyperlink";
import * as motion from "motion/react-client";

type InfoBox = {
    title: string;
    shortInfo: string;
};

type CareerData = {
    title: string;
    description: string[];
    whatYouWillDo: string[];
    skills: string[];
    education: string[];
    benefits: string[];
    sidebarInfo: InfoBox[];
};

const careerData: CareerData = {
    title: "Senior Product Designer",
    description: [
        `We’re seeking a Junior to Mid-level Designer to join our dynamic team. In this role, you’ll assist in delivering graphic and digital design projects, collaborating closely with our creatives, project managers, Creative Director, and development team. Your mission will be to merge user needs with business objectives, crafting seamless and impactful design experiences.`,
        `To succeed in this role, you should showcase a solid understanding of design principles, a willingness to learn and adapt to feedback, and a keen eye for aesthetic excellence.`,
    ],
    whatYouWillDo: [
        "Support Growth team in expanding customer base within legal industry as well as new markets",
        "Find prospective customer leads via LinkedIn Sales Navigator, industry directories, personal network, and other sources",
        "Qualify prospective customer leads via email, phone, and LinkedIn messaging",
        "Track and analyze prospective customer pipeline, presenting stats and progress to Growth team",
        "Identify trends in prospective customer engagement with various outreach campaigns",
        "Help strategize, implement, and maintain an efficient sales system, primarily within HubSpot Sales and HubSpot Marketing",
        "Create and maintain sales and marketing materials, like pricing sheets and feature highlights",
        "Support special projects, like event sponsorships and industry partnerships",
        "Contribute to customer support initiatives",
    ],
    skills: [
        "Solid and strong PHP knowledge.",
        "Really good understanding in OOP, Namespace, Traits & Design Patterns.",
        "Intermediate to Advanced JavaScript knowledge.",
        "Fluent English speaking and writing is preferred but not required.",
        "Writing reusable, testable, secured, and efficient PHP, JavaScript, HTML5, CSS3, MySQL, and AJAX code.",
        "Excellent knowledge about WP custom post type, custom taxonomy, and custom meta box.",
        "Fluent in WordPress, PHP, plugins, themes security, JavaScript, and other technologies.",
        "Clear concepts of WordPress Actions, Hooks, custom queries, and meta fields.",
        "Proficient with relational (SQL) and non-relational database platforms.",
        "Optimize performance of applications utilizing industry standards on all ends of the architecture.",
        "Creating database schemas that represent and support business processes.",
        "Coordinating the workflow between the UI/UX Designer, the QA, and yourself.",
        "Problem-solving capabilities.",
        "Age 20 to 35 years.",
    ],
    education: [
        "It doesn’t matter where you went to college or what your CGPA was as long as you are smart, passionate, ready to work hard and have fun.",
    ],
    benefits: [
        "Competitive compensation and equity package.",
        "99% company-paid medical, dental, and vision coverage for employees and dependents (for US employees).",
        "Flexible Spending Account (FSA) and Dependent Care Flexible Spending Account (DCFSA).",
        "Healthcare reimbursement (for International employees).",
        "Life, AD&D, Short and Long Term Disability Insurance.",
        "401(k) with 4% company matching.",
        "Professional development reimbursement.",
        "Wellness stipends.",
        "Unlimited PTO.",
        "Paid parental leave.",
        "Remote work opportunities.",
        "Home office & technology reimbursement.",
    ],
    sidebarInfo: [
        { title: "Location", shortInfo: "California , United State" },
        { title: "Job Type", shortInfo: "Full time (Remote)" },
        { title: "Experience", shortInfo: "Senior Level" },
        { title: "Vacancies", shortInfo: "02" },
        { title: "Salary", shortInfo: "$24k - 65k / Year" },
        { title: "Office time", shortInfo: "8:00 AM to 4:00 PM" },
        { title: "Working Days", shortInfo: "Weekly 5 days (Sun - Thu)" },
        { title: "Experience", shortInfo: "Senior Level" },
        { title: "Deadline", shortInfo: "20 February, 2025" },
    ],
};

const CareerInfo = () => {
    return (
        <section className="quanto-career-details-section section-padding-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row g-4">
                    <div className="col-lg-8 gsap-scroll">
                        <div className="quanto-career-details__content">
                            <MoveAnim>
                                <h2 className="career-details-title">
                                    {careerData.title}
                                </h2>
                            </MoveAnim>
                            {careerData.description.map((item, i) => (
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            delay: i * 0.1,
                                        },
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    key={i}
                                    className={
                                        i === careerData.description.length - 1
                                            ? "career-text"
                                            : ""
                                    }
                                >
                                    {item}
                                </motion.p>
                            ))}
                            <div className="job-work common-block">
                                <MoveAnim>
                                    <h5 className="title">What you will do</h5>
                                </MoveAnim>
                                <ul className="custom-ul">
                                    {careerData.whatYouWillDo.map((item, i) => (
                                        <motion.li
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.6,
                                                    delay: i * 0.1,
                                                },
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            key={i}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className="job-need-skills common-block">
                                <MoveAnim>
                                    <h5 className="title ">What you will do</h5>
                                </MoveAnim>
                                <ul className="custom-ul">
                                    {careerData.skills.map((item, i) => (
                                        <motion.li
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.6,
                                                    delay: i * 0.1,
                                                },
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            key={i}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className="educational-qualification common-block">
                                <MoveAnim>
                                    <h5 className="title ">
                                        Educational qualification
                                    </h5>
                                </MoveAnim>
                                <ul className="custom-ul">
                                    {careerData.education.map((item, i) => (
                                        <motion.li
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.6,
                                                    delay: i * 0.1,
                                                },
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            key={i}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className="benefits common-block">
                                <MoveAnim>
                                    <h5 className="title">
                                        Perks and benefits that you will get
                                    </h5>
                                </MoveAnim>
                                <ul className="custom-ul">
                                    {careerData.benefits.map((item, i) => (
                                        <motion.li
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.6,
                                                    delay: i * 0.1,
                                                },
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            key={i}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="quanto-career-details__sidebar gsap-sticky">
                            <div className="job-info">
                                {careerData.sidebarInfo.map((item, i) => (
                                    <motion.div
                                        className="info-box"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.6,
                                                delay: i * 0.1,
                                            },
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        key={i}
                                    >
                                        <span className="title">
                                            {item.title}
                                        </span>
                                        <span className="short-info">
                                            {item.shortInfo}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                            <Hyperlink href="/contact" variant="primary">
                                Apply for this position
                            </Hyperlink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerInfo;
