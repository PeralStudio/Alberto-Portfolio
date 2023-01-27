import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Window from "../components/Window";
import VSCode from "../components/VSCode";
import Resume from "../components/Resume";
import Git from "../components/Git";
import Projects from "../components/Projects";
import Politica from "../components/Politica";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Window} />
				<Route path="/vscode" exact component={VSCode} />
				<Route path="/resume" exact component={Resume} />
				<Route path="/git" exact component={Git} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/politica-privacidad" exact component={Politica} />
			</Switch>
		</Router>
	);
};

export default Routes;
