import {Link} from 'react-router-dom';

function About() {
    return (        // This class name allows me to create a reponsive section for my about me that is centered in the middle
    <section className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-light text-center">
      <h2 className="mb-3">About Me</h2>
      <p>
        Hi! I'm Jeff Dang, a 3rd year Computer Science student attending the University of California, Irvine. 
        I currently have an interest in Computer Architecture and Embedded Systems and currently am self-studying 
        more about that field to pursue a career in the area.
      </p>
      <p>
        Outside of my studies, I love to play games, watch anime, and read manga. 
        I like to attend anime conventions with my friends to window shop.
        I am also a very big collector of goods regarding my favorite series or manga.
      </p>
      <Link to="/" className="btn btn-primary mt-2">Back to Home</Link>
    </section>
    );
}

export default About;