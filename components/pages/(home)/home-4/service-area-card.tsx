import MoveAnim from "@/components/framer/move-anim";
import { Service3Type } from "@/types/global";
import Image from "next/image";

interface Props {
    data: Service3Type;
    i: number;
}

const ServiceAreaCard = ({ data, i }: Props) => {
    return (
        <>
            <div className="quanto-service-box5">
                <MoveAnim className="quanto-service-box5 border-0 p-0">
                    <div className="quanto-iconbox-icon">
                        <Image
                            height={52}
                            width={52}
                            src={data.icon}
                            alt="service-icon"
                        />
                    </div>
                    <div className="quanto-content">
                        <div className="content-wrapper">
                            <h5>{data.title}</h5>
                            <p>{data.description}</p>
                        </div>
                        <span className="service-number">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                    </div>
                </MoveAnim>
            </div>
        </>
    );
};

export default ServiceAreaCard;
