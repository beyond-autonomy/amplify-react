import logo from './assets/ba_full-bw.png';
import cover from './assets/cover_photo.jpg';
import map from './assets/hd_maps.jpg'
import taipei from './assets/taipei.jpg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar expand="lg" className="ba-navbar">
            <div className="container">
                <Navbar.Brand href="#home"><img alt="ba-logo" width="250px" src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link href="#product">Solution</Nav.Link>
                        <Nav.Link href="#company">Company</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        <img alt="autonomous-vehicle" src={cover} className="cover-photo"/>
        <div className="container">
            <h1 className="header">
                <span className="autonomy">From Autonomy</span> <br/>
                <span className="knowledge">to Collaborative Knowledge</span>
            </h1>
            <p className="common-last">
                We're working on an affordable way to create high definition maps for autonomous vehicles, advanced
                driver-assistance systems, and smart cities.
            </p>
        </div>
        <div className="container">
            {/* eslint-disable-next-line */}
            <a id="challenge" >
                <h4>
                    High Definition (HD) Maps
                </h4>
                <img alt="hd-map" src={map} className="post-image"/>
                <p className="common">
                    High Definition (HD) Maps are maps that are particularly built for self-driving purposes. These maps
                    have extremely high precision (~5 cm) because autonomous vehicles require very detailed instructions
                    to maneuver itself in three-dimensional space. HD maps also enable these vehicles to foresee
                    obstacles and make driving decisions based on real-time changes in road conditions.
                </p>
                <p className="common">
                    Creating these maps prove to be challenging as current methods exhibit three key issues: they're
                    expensive to produce, they're generated from vast amounts of data, and they're not designed to
                    scale.
                </p>
                <p className="common-last">
                    First, HD maps require the same set of hardware used for self-driving cars, which typically
                    employ a production-grade LiDAR (Light Detection And Ranging) sensor that costs approximately
                    US$75,000. Next, these maps are produced by processing the fusion of sensor data that generates
                    about 700,000 data points per second. Finally, it requires a lot of these expensive cars to be
                    driving around to achieve near real-time monitoring of roads, of which more than 64 million
                    kilometers (as of 2013) have been constructed across the globe.
                </p>
            </a>
            {/* eslint-disable-next-line */}
            <a id="solution" >
                <h4>
                    Our Solution: Stereo Vision, a Shared Map, and Processing on the Edge
                </h4>
                <p className="common">
                    First, we use stereo vision -- the simultaneous capture using left and right cameras -- to create
                    depth perception, enabling precise distance measurement using trigonometry and the disparity between
                    the two viewpoints.
                </p>
                <p className="common">
                    Next, instead of streaming video from multiple vehicles we use AI on the edge to extract only the
                    information needed to reconstruct the scene (e.g. location, vector, object type), and compile it
                    into a common map for all actors to consume.
                </p>
                <p className="common-last">
                    Finally, through a database of known road objects and vehicles, a reconstruction of the scene is
                    created on top of a lane-level base map. The processing is done on the edge, allowing the car to
                    make driving decisions once the reconstruction is complete.
                </p>
            </a>
            {/* eslint-disable-next-line */}
            <a id="company" >
                <h4>
                    We're on a mission to make roads safer
                </h4>
                <img alt="taipei" src={taipei} className="post-image"/>
                <p className="common">
                    Beyond Autonomy is an early-stage startup incorporated in Delaware and headquartered in Taipei. It
                    was founded by a group of Hult alumni with the vision of connecting vehicles to each other, the
                    infrastructure, and the cloud to give them access to information beyond what their onboard sensors
                    can provide. They believe in a future where, regardless of whether cars are self-driving or not,
                    having access to this kind of information would enable smarter driving decisions and effectively
                    make roads safe for everyone -- commuters and vulnerable road users alike.
                </p>
                <p className="common-last">
                    Our team is committed to Taiwan. We see this project as a platform that would not only showcase
                    the island's expertise in manufacturing hardware components, but also demonstrate the capabilities
                    of a mix of Taiwanese and foreign talent in the fields of Geomatics, Cloud Native App Development,
                    and Artificial Intelligence.
                </p>
            </a>
        </div>
        <footer className="footer">
            <div className="container">
                <span className="footer-title">Beyond Autonomy Technologies</span><br/>
                No. 236, Minsheng West Road, Datong District, Taipei City 103, Taiwan
            </div>
        </footer>
    </div>
  );
}

export default App;
