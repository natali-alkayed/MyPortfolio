import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! </motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Full Stack Web Developer.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                with focus on <span style={{ color: "var(--hl-color)" }}> ReactJS , Node JS, Express JS, PostgreSQL, HTML, CSS,</span>and a strong background in
                <span style={{ color: "var(--hl-color)" }}> computer engineering </span> and <span style={{ color: "var(--hl-color)" }}>instructional experience.</span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                I pursued my education in <span style={{ color: "var(--hl-color)" }}>computer engineering at Hashemite University,</span>
                where I graduated with a 
                  <span style={{ color: "var(--hl-color)" }}> very good </span> grade,During my enriching journey at the university, I volunteered for the
             
                <span style={{ color: "var(--hl-color)" }}>ElCoM </span>
                committee, an academic committee within the engineering college. My role involved in creating informative
                <span style={{ color: "var(--hl-color)" }}>YouTube </span>
                videos that explained complex computer engineering  and electrical engineering concepts, and I'm proud to say that these videos have garnered over 
                <span style={{ color: "var(--hl-color)" }}> 2 million </span>views, becoming the top recommendation on YouTube.  Additionally, I took part in the development of a website brimming with remarkable features tailored to the academic needs of engineering students. 
                </motion.p>
                <br />
                

                <motion.p variants={paragraphVariants}>
                <span style={{ color: "var(--hl-color)" }}> Post-graduation, </span>
                my thirst for knowledge led me to  <span style={{ color: "var(--hl-color)" }}> ASAC </span> , where I delved into the world of 
                <span style={{ color: "var(--hl-color)" }}> programming </span>
                . Specifically, I focused on web development, honing my skills in this dynamic field.
                </motion.p>
                <br />


                <motion.p variants={paragraphVariants}>
                <span style={{ color: "var(--hl-color)" }}> Trough </span>
                  my academic journey, I ventured into the world of entrepreneurship and creativity. I founded a <span style={{ color: "var(--hl-color)" }}>small business </span>

                specializing in the
                  <span style={{ color: "var(--hl-color)" }}> art of quilling, </span> where intricate and beautiful designs are meticulously crafted from paper. i create an Instagram page where I showcase and sell these exquisite quilling art pieces, particularly framed works that serve as unique and eye-catching decorations. This entrepreneurial endeavor has not only allowed me to express my artistic passion but also connect with a community of fellow art enthusiasts who appreciate the beauty of handcrafted creations. 
                </motion.p>
                <br />

              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="https://drive.google.com/file/d/1gZSxUDWbJypqp38OS-f5JOTEDdrQOzgk/view?usp=drive_link">
                <Button name="DownLoad CV" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
