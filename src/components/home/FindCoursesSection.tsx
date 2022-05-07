import "./FindCoursesSection.scss";
import girlsImage from "../../assets/img/4_girls.png"
import GradientCircle from "../GradientCircle";
import SectionTitle from "../SectionTitle"
import Button from "../Button";

const FindCoursesSection = () => {
    return (
        <section className="find-courses">
            <div className="GirlsImageOnCirlce">
                <GradientCircle className="gradient-circle-home"/>
                <img src={girlsImage} className="GirlsImage" />
            </div>
            <div className="content">
                <SectionTitle className="section-title">Everyone<br/>Can Code</SectionTitle>
                <p>Finde Kurse in deiner Nähe und<br /> starte deine Zukunft in der IT</p>
                <Button text="Kurs finden"/>
            </div>
        </section>
    )
}

export default FindCoursesSection