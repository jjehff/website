import {Link} from 'react-router-dom';
import blackjack from './asd.png';
function Project2() {
    return (
        <div>
            <div className="d-flex justify-content-center text-center" id="projects">
                <div className="col-3 bg-white m-3 p-3 rounded">
                    <h3>Blackjack</h3>
                    <p>A Java program that allows you to play Blackjack featuring standing on all 17's and 1 deck with constant reshuffling. In this program, you win by hitting a certain amount of money</p>
                    <a href="https://github.com/jjehff/Blackjack" className="btn btn-primary">Click here for GitHub!</a>
                </div>
            </div>
            <img className="img-fluid rounded d-block mx-auto mb-3" src={blackjack}/>
            <div className="d-flex flex-column justify-content-between align-items-center">
                <Link to="/" className="btn btn-primary col-4">Return</Link>
            </div>
        </div>
    );
}

export default Project2;