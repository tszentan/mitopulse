import '../styles/Home.css';
import heroVideo from '../assets/hero-video.mp4';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1>MitoPulse Solutions</h1>
          <p>Unlock deeper recovery with science-backed muscle activation solutions.</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      <section className="content">
        <h2>Explore Our Features</h2>
        <p>Test</p>
        {/* Add more content here */}
      </section>

      <section className="content">
        <h2>Explore Our Features</h2>
        <p>Test</p>
        {/* Add more content here */}
      </section>

      <section className="content">
        <h2>Explore Our Features</h2>
        <p>Test</p>
        {/* Add more content here */}
      </section>

      <section className="content">
        <h2>Explore Our Features</h2>
        <p>Test</p>
        {/* Add more content here */}
      </section>
    </div>
  );
}

export default Home;