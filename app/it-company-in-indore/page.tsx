import heroImageIcon from "@/public/images/Software-Development-Company.webp"
import Image from "next/image";
export default function BestitInIndore() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", margin: "100px", padding: "0" }}>
          {/* Hero Section */}
          <div>
            <Image src={heroImageIcon} alt="best-it-company-in-indore" style={{width:"1084px"}}/>
          </div>
          <header style={{ backgroundColor: "black", color: "white", padding: "20px 10px", textAlign: "center" }}>
            <h1 style={{fontSize:"35px"}}>Welcome to the  it  Company in Indore</h1>
            <p>Your partner for innovation, growth, and success.</p>
          </header>
    
          {/* About Section */}
          <section style={{ padding: "20px", backgroundColor: "black" }}>
            <h2 style={{ textAlign: "center", color: "#4CAF50" }}>About Us</h2>
            <p style={{ textAlign: "justify", maxWidth: "800px", margin: "auto" }}>
              We are a leading company based in Indore, dedicated to delivering cutting-edge solutions in technology,
              business consulting, and innovation. Our team of experts strives to bring the best to our clients by
              focusing on quality, creativity, and customer satisfaction.
            </p>
          </section>
    
          {/* Services Section */}
          <section style={{ padding: "20px", backgroundColor: "black" }}>
            <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Our Services</h2>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "20px" }}>
              <div style={{ maxWidth: "300px", textAlign: "center", margin: "10px" }}>
                <h3>Web Development</h3>
                <p>We create responsive, user-friendly websites tailored to your business needs.</p>
              </div>
              <div style={{ maxWidth: "300px", textAlign: "center", margin: "10px" }}>
                <h3>Mobile App Development</h3>
                <p>Delivering feature-rich mobile applications for Android and iOS platforms.</p>
              </div>
              <div style={{ maxWidth: "300px", textAlign: "center", margin: "10px" }}>
                <h3>Digital Marketing</h3>
                <p>Boosting your online presence with SEO, social media, and content marketing strategies.</p>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "10px 0", marginTop: "20px" }}>
            <p>© 2025 Best Company in Indore | All Rights Reserved</p>
          </footer>
        </div>
      );
}
