import Image from "next/image";

interface GalleryItem {
    src: string;
    alt: string;
    speed?: string;
}

const galleryItems: GalleryItem[] = [
    { src: "/images/carrer/career-gallery-1.png", alt: "career-gallery-1" },
    { src: "/images/carrer/career-gallery-2.png", alt: "career-gallery-2" },
    { src: "/images/carrer/career-gallery-3.png", alt: "career-gallery-3" },
    { src: "/images/carrer/career-gallery-4.png", alt: "career-gallery-4" },
];

const CareerGallery = () => {
    return (
        <div className="quanto-career-gallery-section overflow-hidden">
            <div className="container-fluid p-xl-0">
                <div className="row g-3 g-lg-4 career-gallery__row">
                    {galleryItems.map((item, i) => (
                        <div
                            key={i}
                            className="col-sm-6 col-md-4 col-lg-3"
                            data-speed={item.speed || "0.8"}
                        >
                            <div className="career-gallery-box">
                                <Image
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerGallery;
