import Intro from "./Intro"
import Navigation from "./Navigation";
import classes from './Home.module.css';
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
export default function Home(){
    return(
        <div>
            <div className={classes.navigationContainer}>
                <Navigation />
            </div>
            <div className={classes.introContainer}>
                <Intro />
                <About />
            </div>
            <Experience />
            <Education />
        </div>

    )
}