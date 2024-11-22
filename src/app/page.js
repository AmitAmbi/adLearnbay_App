import dynamic from "next/dynamic";

import HeroSection from "./components/home/heroSection/HeroSection";

// Dynamically import components
const MobileTestimonial = dynamic(() =>
  import("./components/global/mobiletestimonal/MobileTestimonal")
);
const NewSevenSection = dynamic(() =>
  import("./components/global/newSevenSection/NewSevenSection")
);
const ReviewSlider = dynamic(() =>
  import("./components/global/reviewSlider/ReviewSlider")
);
const CLogo = dynamic(() => import("./components/home/Company/Clogo"));
const ContactUs = dynamic(() =>
  import("./components/home/contactUs/ContactUs")
);

const InfinityLogo = dynamic(() =>
  import("./components/home/Infinity/Infinity")
);
const KickStart = dynamic(() =>
  import("./components/home/kickStart/KickStart")
);
const NavbarHome = dynamic(() => import("./components/home/navbar/NavbarHome"));
const NewCourse = dynamic(() =>
  import("./components/home/newCourse/NewCourse")
);
const Other = dynamic(() => import("./components/home/other/Other"));
const Animation = dynamic(() =>
  import("./components/home/whyChoose/Animation")
);

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavbarHome />
      <HeroSection />
      <InfinityLogo />
      <KickStart />
      <NewCourse />
      <Animation />
      <ReviewSlider />
      <ContactUs />
      <CLogo />
      <Other />
      <MobileTestimonial />
      <NewSevenSection />
    </main>
  );
}
