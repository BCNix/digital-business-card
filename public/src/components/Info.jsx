export default function Info(){
    return (
        <header>
            <img src="./images/profile-image.jpeg" alt="My profile image." />
            <h1>Biely Navarette</h1>
            <span className="role">Frontend Developer</span>
            <a href="#0" className="website-link">bielynavarette.website</a>
            <div className="button-container">
                <a href="mailto:biely.cdn@gmail.com" className="btn btn-light" role="button">
                    <img src="./images/mail-logo.png" alt="Envelope icon." />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/bielynavarette/" className="btn btn-dark" target="_blank" role="button">
                    <img src="./images/linkedin-logo.png" alt="LinkedIn icon." />
                    LinkedIn
                </a>
            </div>
        </header>
    )
}