import { Switch, Route,} from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import Contacts from "./Contacts";
import AboutUs from "./AboutUs";
import Error from "./Error";
export default function App() {
    return (
        <>
        <Switch>
            {/* <Route exact path="/" component={Navbar} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route component ={Error}/>
        </Switch>
        </>

    );
}