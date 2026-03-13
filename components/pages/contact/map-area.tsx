import Image from "next/image";
import Link from "next/link";

const MapArea = () => {
    return (
        <>
            <div className="quanto-map-area style-2 overflow-hidden">
                <div className="container custom-container position-relative">
                    <Link
                        href="#service-section"
                        className="scroll-down section-link"
                    >
                        Scroll down
                        <Image
                            height={28}
                            width={16}
                            src="/images/icons/scroll-down.svg"
                            alt="Scroll down"
                        />
                    </Link>
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511980.545439102!2d-124.59221413351302!3d37.160355323932215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1739717831300!5m2!1sen!2sbd"
                                width={600}
                                height={800}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="d-block w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapArea;
