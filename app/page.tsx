import Image from "next/image";

export default function Home() {
  return (
    <div className="main-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <span>Fireflies Woman's Collection</span>
        <span className="divider">|</span>
        <a href="#">Shop Now</a>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="brand-container">
          <div className="brand-mamta didone-font">MAMTA</div>
          <div className="brand-intl sans-font">INTERNATIONAL</div>
        </div>

        <div className="nav-center sans-font">
          <a href="#">NEW ARRIVALS</a>
          <a href="#">ROCKSTUD</a>
          <a href="#">WOMEN</a>
          <a href="#">MEN</a>
          <a href="#">BAGS</a>
          <a href="#">GIFTS</a>
          <a href="#">M-UNIVERSE</a>
        </div>

        <div className="nav-right">
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
      </nav>

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
