import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="main-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image
            src="/hero.png"
            alt="MAMTA INTERNATIONAL Evening Gown"
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-bottom-content">
          <h3 className="hero-title didone-font">Mamta International Haute Couture Gown</h3>
          <button className="btn-discover sans-font">DISCOVER MORE</button>
        </div>
      </section>
    </div>
  );
}
