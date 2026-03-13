import { services5 } from "@/data/data";
import ServiceAreaCard from "./service-area-card";
import MoveAnim from "@/components/framer/move-anim";

const ServiceArea = () => {
    return (
        <>
            <section
                className="quanto-service6-section bg-color-2 section-padding-top-bottom overflow-hidden"
                id="service-section"
            >
                <div className="container custom-container">
                    <div className="row gx-4 gy-5">
                        <div className="col-12 col-xl-5 col-xxl-6">
                            <div className="quanto__header text-center text-lg-start">
                                <MoveAnim>
                                    <h3 className="title">
                                        Transforming ideas into reality
                                    </h3>
                                </MoveAnim>
                            </div>
                        </div>
                        <div className="col-12 row-padding-top">
                            <div className="row g-4">
                                {/* service card start */}
                                {services5.slice(0, 4).map((item, i) => (
                                    <ServiceAreaCard
                                        key={i}
                                        data={item}
                                        i={i}
                                    />
                                ))}
                                {/* service card end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceArea;
