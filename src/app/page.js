
import MobileTestimonial from "./components/global/mobiletestimonal/MobileTestimonal";
import NewSevenSection from "./components/global/newSevenSection/NewSevenSection";
import ReviewSlider from "./components/global/reviewSlider/ReviewSlider";
import CLogo from "./components/home/Company/Clogo";
import ContactUs from "./components/home/contactUs/ContactUs";
import HeroSection from "./components/home/heroSection/HeroSection";
import InfinityLogo from "./components/home/Infinity/Infinity";
import KickStart from "./components/home/kickStart/KickStart";
import NavbarHome from "./components/home/navbar/NavbarHome";
import NewCourse from "./components/home/newCourse/NewCourse";
import Other from "./components/home/other/Other";
import Animation from "./components/home/whyChoose/Animation";
import styles from "./page.module.css";







export default function Home() {

 
  return (
    <main className={styles.main}>

<NavbarHome/>
<HeroSection/>
<InfinityLogo/>
<KickStart/>
<NewCourse/>
<Animation/>
<ReviewSlider/>
<ContactUs/>
<CLogo/>
<Other/>
<MobileTestimonial/>
<NewSevenSection/>
    </main>
  );
}
