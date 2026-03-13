import { projects4 } from "@/data/data";
import ProjectCardArea2 from "@/components/common/project-card-area-2";

const ProjectItem = () => {
    return (
        <section className="quanto-project-section bg-color-white section-padding-bottom">
            <div className="container custom-container">
                <div className="row g-4 g-lg-5 justify-content-between align-items-center">
                    {/* project card start */}
                    {projects4.slice(0, 6).map((item, i) => (
                        <div key={i} className="col-md-6">
                            <ProjectCardArea2 data={item} />
                        </div>
                    ))}
                    {/* project card end */}
                </div>
            </div>
        </section>
    );
};

export default ProjectItem;
