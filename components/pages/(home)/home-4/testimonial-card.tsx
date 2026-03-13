import { Testimonial1Type } from "@/types/global";
import Image from "next/image";

interface Props {
    data: Testimonial1Type;
}

const TestimonialCard = ({ data }: Props) => {
    return (
        <>
            <div className="swiper-slide">
                <div className="quanto-testimonial2__box bg-color-white">
                    <div className="testimonial-content mt-0">
                        <div className="stars">
                            <ul className="custom-ul">
                                {new Array(5).fill(0).map((_, i2) => (
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
                                                d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                                fill="#0F0F0F"
                                            />
                                        </svg>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <h5 className="revew">{data.description}</h5>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-image">
                            <Image
                                height={80}
                                width={80}
                                src={data.image}
                                alt="Author Image"
                            />
                        </div>
                        <div className="author-info">
                            <h6 className="author-name">{data.name}</h6>
                            <span className="info">{data.profession}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;
