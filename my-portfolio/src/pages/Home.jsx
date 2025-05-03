import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
    return (
        <div className="App">
          {/*Navbar*/}
          <nav className="nav justify-content-center fixed-top fs-3 pb-4 pt-3">
            <li className="nav-item">
              <a className="btn btn-info mx-4" href="#me">Me</a>
            </li>
            <li>
              <a className="btn btn-info mx-4" href="#projects">Projects</a>
            </li>
            <li>
              <Link to="/About" className="btn btn-info mx-4">About</Link> {/*Essentially lets me go to another page on the same website */ }
            </li>
            <li>
              <Link to="/api" className="btn btn-info mx-4">API Call</Link>
            </li>
          </nav>
          {/*Introduction*/}
          <section className="d-flex justify-content-center align-items-center min-vh-100">
            <h1 id="me" className="text-center text-light">Hello! I'm Jeff Dang, a 3rd year Computer Science student atending the University of California, Irvine</h1>
          </section>
             {/*Projects*/}
          <section className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
            <div className="container row justify-content-center" id="projects">
              {/*First Project*/}
              <div className="col-12 bg-white m-3 p-4 rounded shadow">
                <h3>Oogsters Bot</h3>
                <p>A Discord Bot that has some games</p>
                <Link to="/project1" className="btn btn-primary mt-2">More info</Link>
              </div> {/*Second project*/}
              <div className="col-12 bg-white m-3 p-4 rounded shadow">
                <h3>Blackjack</h3>
                <p>A Java program to play Blackjack</p>
                <Link to="/project2" className="btn btn-primary mt-2">More info</Link>
              </div>
              
            </div>
          </section>
        </div>
    );
}

export default Home;
