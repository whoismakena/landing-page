import { Grid } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "../../styles/App.css";
import "aos/dist/aos.css";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [colorChange, setColorchange] = useState(false);
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const outletsSection = useRef(null);
  const contactSection = useRef(null);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const outlets = [
    {
      title: "Kericho gold",
      icon: require("../../assets/kericho-gold.png"),
      url: "https://shop.kerichogold.com/product/hangover-tea/",
      color: "#ffffff",
    },
    {
      title: "Carrefour",
      icon: require("../../assets/carrefour.png"),
      url: "https://www.carrefour.ke/mafken/en/",
      color: "#ffffff",
    },
    {
      title: "Naivas",
      icon: require("../../assets/naivas.png"),
      url: "https://glovoapp.com/ke/en/nairobi/naivas-nbo/",
      color: "#f15625",
    },
    {
      title: "Jumia",
      icon: require("../../assets/jumia.png"),
      url: "https://www.jumia.co.ke/catalog/?q=hangover+tea",
      color: "#fb9900",
    },
    {
      title: "Greenspon",
      icon: require("../../assets/greenspoon.png"),
      url: "https://greenspoon.co.ke/?s=hangover+tea",
      color: "#ffffff",
    },
  ];

  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App-Container">
      <div
        className="Header"
        style={
          colorChange
            ? {
                backgroundColor: "#0E1116",
                transition: "background-color 500ms linear",
              }
            : null
        }
      >
        <span onClick={() => scrollDown(homeSection)}>Home</span>
        <span onClick={() => scrollDown(aboutSection)}>About</span>
        <span onClick={() => scrollDown(outletsSection)}>Outlets</span>
        <span onClick={() => scrollDown(contactSection)}>Contact</span>
      </div>
      <div>
        <Grid container className="Content" ref={homeSection}>
          <Grid item md={12} lg={6} className="Details-Container">
            <div>
              <span className="Title">HANGOVER</span>
              <span className="Title Tea">TEA</span>
              <span className="Subtitle">
                Having a terrible hangover after a fun night out? Kick off the
                day on a clean slate with an uplifting mix of green tea, ginger
                and calming mint. We all deserve a second chance.
              </span>
            </div>
          </Grid>
          <Grid item md={12} lg={6} className="Product-Container">
            <img
              src={require("../../assets/tea.png")}
              alt="tea"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1500"
            />
          </Grid>
        </Grid>
      </div>

      <div
        className="Tag Tea"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <span>
          DELETE, FAST FORWARD AND HIT PLAY TO TEAOFF THE TASKS OF THE DAY
        </span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="About"
        ref={aboutSection}
      >
        <h1>About Tea Variant</h1>
        <span className="Tea-Desc">
          Kericho Gold is a special blend of fine teas from some of the best tea
          estates in Kenya; carefully selected weekly by expert Tea Tasters for
          the richness of their taste, flavour and aroma to bring out the
          quality and ensure that high standards are maintained, guaranteeing
          you a perfect cup of tea every time. Kericho Gold Teas and Infusions
          are tasty and full of fragrance that is why there is no added sugar,
          no artificial colors or preservatives, just the great tasting flavors.
        </span>
        <span className="Tea-Desc Tea">
          The premium Hangover tea range includes green tea, mint, and ginger as
          the main ingredients.
        </span>
        <span className="Tea-Desc">
          Each sip refreshes and hydrates the body, brings in clarity and
          soothes the mind and body.
        </span>
        <span className="Tea-Desc Tea">
          Ideal Partner: Passionate, adventurous, willing to try something new
          and exciting, and looking for a close relationship. Sounds like you?
          Then stop searching, pick me and love me forever.
        </span>
      </div>
      <div className="Tag Stats">
        <Grid container className="Stats-Grid">
          <Grid item sm={4} lg={4} className="Flex">
            <span className="Number">25</span>
            <span>Tea Bags</span>
          </Grid>
          <Grid item sm={4} lg={4} className="Flex">
            <img src={require("../../assets/fair.png")} alt="tea" />
            <span>Fairtrade</span>
          </Grid>
          <Grid item sm={4} lg={4} className="Flex">
            <img src={require("../../assets/tea-bag.png")} alt="tea" />
            <span>Individually wrapped</span>
          </Grid>
        </Grid>
        <div
          className="Outlets"
          ref={outletsSection}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {outlets.map((outlet, index) => (
            <img
              key={outlet.title}
              src={outlet.icon}
              alt={outlet.title}
              onClick={() => openInNewTab(outlet.url)}
              style={{ backgroundColor: outlet.color }}
            />
          ))}
        </div>
        <div className="Contact" ref={contactSection}>
          <h1>Get In Touch</h1>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Enter your email"}
            />
            <div className="Contact-Button">
              <span>Send</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="Footer">
        <span>Copyright © 2023</span>
        <span> Lebasi</span>
      </footer>
    </div>
  );
}
