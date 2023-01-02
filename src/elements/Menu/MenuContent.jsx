import { useState } from "react";
import "@styles/menubar.scss";
import AppleIcon from "@static/apple.png";
import BatteryIcon from "@static/battery.png";
import WifiIcon from "@static/wifi.png";
import ControlCenterIcon from "@static/controlcenter.png";
import NotifyIcon from "@static/NotifyIcon.png";
// import IcloudIcon from "@static/IcloudIcon.png";

// const formatMinutes = min => {
// 	return min < 10 ? "0" + min : min;
// };

const convertToReadableDate = timestamp => {
	const shortenedDaysOfTheWeek = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];
	const shortenedMonth = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const currentDate = new Date(timestamp);
	return (
		<>
			{shortenedDaysOfTheWeek[currentDate.getDay()]}{" "}
			{currentDate.getDate()} {shortenedMonth[currentDate.getMonth()]}{" "}
			{/* <span className="time">
				{currentDate.getHours()}:
				{formatMinutes(currentDate.getMinutes())}
			</span> */}
		</>
	);
};

const MenuContent = props => {
	const [hour, setHour] = useState("");

	const getHour = () => {
		const date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		// Añadir un cero a la izquierda a las horas, minutos y segundos si son menores que 10
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		setHour(hours + ":" + minutes + ":" + seconds);
	};

	setInterval(getHour, 1000);

	const menuItems = [
		[
			<img src={AppleIcon} alt="Apple logo" className="apple" />,
			props.programName,
			"File",
			"Edit",
			"View",
			"Chat",
			"Window",
			"Help",
		],
		[
			// <img src={IcloudIcon} alt="Cloud icon" className="right-icon" />,
			<img src={BatteryIcon} alt="Battery icon" className="right-icon" />,
			<img src={WifiIcon} alt="Wifi icon" className="right-icon" />,
			<img
				src={ControlCenterIcon}
				alt="Control Center icon"
				className="right-icon"
			/>,
			<img src={NotifyIcon} alt="Notify icon" className="right-icon" />,
			convertToReadableDate(Date.now()),
			<p className="right-icon" style={{ minWidth: "60px" }}>
				{hour}
			</p>,
		],
	];
	return (
		<div className="menu-bar">
			<div className="app-menus">
				{menuItems[0].map((item, index) => {
					return (
						<div
							className={`${
								typeof item !== "string" ? `img-container` : ``
							}`}
							key={index}
						>
							{item}
						</div>
					);
				})}
			</div>
			<div className="right-side">
				{menuItems[1].map((item, index) => {
					return (
						<div
							className={`${
								index !== menuItems[1].length - 1
									? `img-container`
									: ``
							}`}
							key={index}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MenuContent;
