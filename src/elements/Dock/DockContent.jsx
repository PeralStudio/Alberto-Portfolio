/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "@styles/dock.scss";
import FinderIcon from "@static/finder.png";
import CodeIcon from "@static/code.png";
import GithubIcon from "@static/github.png";
// import twitterIcon from "@static/twitterIcon.png";
import FolderIcon from "@static/folder.png";
import LinkedInIcon from "@static/LinkedInIcon.png";
// import ruidoblanco from "@static/ruidoblanco.jpg";
import { Link } from "react-router-dom";
import lol from "@static/lol.png";
// import MyResume from "../Resume/resume/MyResume.pdf"

const DockContent = () => {
	return (
		<div className="main-contain">
			<div className="container">
				<div className="dock">
					<span></span>
					<div className="dock-nav">
						<ul>
							<Link to="/">
								<li
									data-title="Home"
									className="full-width-icon"
								>
									<img
										src={FinderIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/vscode">
								<li data-title="VS Code">
									<img
										src={CodeIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/git">
								<li data-title="Git Log">
									<img
										src={GithubIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							{/* <a href="https://twitter.com/Alberto">
								<li data-title="Twitter">
									<img
										src={twitterIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a> */}
							<a
								href="https://www.linkedin.com/in/alberto-peral/"
								target={"_blank"}
							>
								<li data-title="LinkedIn">
									<img
										src={LinkedInIcon}
										className="img-fluid"
										alt="dope"
									/>
								</li>
							</a>
							<a
								href="https://lolstatsv2.peralstudio.com/"
								target="_blank"
							>
								<li data-title="League Of Legends Stats">
									<img
										src={lol}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a>
							{/* <a
								href="https://play.google.com/store/apps/details?id=com.alfanjorfresco.ruidoblancobebe"
								target="_blank"
							>
								<li data-title="Ruido Blanco Bebé App">
									<img
										src={ruidoblanco}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</a> */}
							<div className="separator" />
							<a>
								<Link to="/resume">
									<li data-title="Resume">
										<img
											src={FolderIcon}
											className="img-fluid"
											alt="mac"
										/>
									</li>
								</Link>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;
