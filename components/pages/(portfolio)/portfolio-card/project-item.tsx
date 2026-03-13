import ProjectCardArea3 from "@/components/common/project-card-area-3";
import { projects3 } from "@/data/data";

const ProjectItem = () => {
    return (
        <>
            <section className="quanto-project-section bg-color-white section-padding-bottom">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="quanto-project-gard-row">
                                {/*  project card start */}
                                {projects3.slice(0, 4).map((item, i) => (
                                    <ProjectCardArea3 key={i} data={item} />
                                ))}
                                {/*  project card end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectItem;
