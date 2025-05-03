import {Link } from 'react-router-dom';     {/*require to route back to main page */}
import discordImg from './discordimg.png';
function Project1() {
    return (
        <div>
            <div className="d-flex justify-content-center text-center" id="projects">
                <div className="col-3 bg-white m-3 p-3 rounded">
                    <h3>Oogsters Bot</h3>
                    <p>A Discord Bot that I made in my free time that currently has 1 game available to play</p>
                    <a href="https://github.com/jjehff/Oogsters-Bot" className="btn btn-primary">Click here for GitHub!</a>
                </div>
            </div>
            <img className="img-fluid rounded d-block mx-auto mb-3" src={discordImg}/>
            <div className="d-flex flex-column justify-content-between align-items-center">
                <Link to="/" className="btn btn-primary col-4">Return</Link>
            </div>
        </div>
    )
}

export default Project1;