"use client";
import { Service5Type } from "@/types/global";
import Image from "next/image";
import * as motion from "motion/react-client";
import MoveAnim from "@/components/framer/move-anim";

interface Props {
    data: Service5Type;
    i?: number;
}

const ServiceAreaCard = ({ data, i }: Props) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                        delay: i ? i * 0.2 : 0,
                    },
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="col-md-6 col-xl-4 col-xxl-3"
            >
                <div className="quanto-service-box6 bg-color-white move-anim">
                    <MoveAnim>
                        <div className="service-icon">
                            <Image
                                height={52}
                                width={52}
                                src={data.icon}
                                alt="service-icon"
                            />
                        </div>
                        <div className="service-content">
                            <h5>{data.title}</h5>
                            <p>{data.description}</p>
                        </div>
                        <div className="service-list">
                            <ul className="custom-ul">
                                {data.features.map((data2, i2) => (
                                    <li key={i2}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.26686 17.2517L23.3996 2.09009C18.5966 8.6869 13.7937 15.2841 9.01958 21.9098L0.599609 11.6671C3.17479 13.5188 5.72074 15.3708 8.2673 17.2513L8.26686 17.2517Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        {data2}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </MoveAnim>
                </div>
            </motion.div>
        </>
    );
};

export default ServiceAreaCard;
