import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Companies from "./companies/Companies";
import Features from "./features/Features";
import PricePlans from "./price-plan/PricePlans";
import RequestDemo from "./request-demo/RequestDemo";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Testimonials from "./testimonials/Testimonials";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Companies />
            <Features />
            <PricePlans />
            <Testimonials />
            <RequestDemo />
            <Contact />
            <Footer />
        </>
    );
};

export default LandingPage;
