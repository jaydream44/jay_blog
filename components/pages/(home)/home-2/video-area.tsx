import Image from "next/image";

const VideoArea = () => {
    return (
        <>
            <div className="quanto-video-area overflow-hidden">
                <div className="container-fluid p-xxl-0">
                    <Image
                        height={0}
                        width={0}
                        sizes="100vw"
                        src="/images/hero/hero2-thumb.png"
                        alt="hero-thumb"
                        data-speed="0.8"
                        className="w-100"
                    />
                </div>
            </div>
        </>
    );
};

export default VideoArea;
