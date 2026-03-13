"use client";
import * as motion from "motion/react-client";

interface Props {
    data: {
        question: string;
        answer: string;
    };
    i: number;
}

const FaqAreaBar = ({ data, i }: Props) => {
    const isFirstItem = i === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: i * 0.1,
                },
            }}
            viewport={{
                once: true,
                amount: 0.6,
            }}
            className="accordion-item"
        >
            <h6 className="accordion-header">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded={isFirstItem ? "true" : "false"}
                    aria-controls={`collapse${i}`}
                >
                    {data.question}
                </button>
            </h6>
            <div
                id={`collapse${i}`}
                className={`accordion-collapse collapse ${
                    isFirstItem ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">{data.answer}</div>
            </div>
        </motion.div>
    );
};

export default FaqAreaBar;
