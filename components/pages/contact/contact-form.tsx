import Link from "next/link";

const ContactForm = () => {
    return (
        <>
            <section
                id="quanto-contact-section"
                className="quanto-contact-section bg-color-white section-padding-top-bottom"
            >
                <div className="container custom-container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-6 col-xxl-5">
                            <div className="quanto-contact__content">
                                <h3 className="title">
                                    Let’s create your brand that shines!
                                </h3>
                                <p>
                                    Whether you’re interested in collaborating
                                    with us on your next project or simply want
                                    to reach out for a conversation.
                                </p>
                                <div className="address">
                                    <h6>Address:</h6>
                                    <span>
                                        740 New South Head Rd, <br />
                                        Triple Bay Swfw 3108, New York
                                    </span>
                                </div>
                                <div className="contact-info">
                                    <h5>
                                        <Link href="mailto:hello@quanto.agency">
                                            hello@quanto.agency
                                        </Link>
                                    </h5>
                                    <Link href="tel:+18884567890">
                                        +1 888 456 7890
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-6">
                            <form
                                action="index.html"
                                className="quanto-contact__form"
                                autoComplete="off"
                            >
                                <div className="row g-3 g-xl-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                            className="form-control"
                                            pattern="[A-Za-z\s]+"
                                            title="Please enter only alphabets and spaces"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your e-mail address"
                                            required
                                            className="form-control"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                            title="Please enter a valid email address"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="What is the subject of your query?"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="message"
                                            rows={6}
                                            placeholder="Describe about your project"
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button className="quanto-link-btn btn-pill">
                                            Submit
                                            <span>
                                                <i className="fa-solid fa-arrow-right arry1" />
                                                <i className="fa-solid fa-arrow-right arry2" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
