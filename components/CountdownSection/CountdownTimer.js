import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "../../utils/CountdownTimerUtils"

const defaultRemainingTime = {
	seconds: "00",
	minutes: "00",
	hours: "00",
	days: "00",
	month: "00"
};
const CountdownTimer = ({ countdownTimestampMs }) => {
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}
	return (
		<div className="flex items-center justify-between ">
			{/* <div className="flex items-center mr-7 flex-col flex-nowrap">
				<span
					className="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl "
					id="days"
				>
					{remainingTime.month}
				</span>
				<span className="title">Meses</span>
			</div> */}

			<div className="flex items-center mr-7 flex-col flex-nowrap">
				<span
					className="w-20 h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg text-4xl font-pop font-light"
					id="days"
				>
					{remainingTime.days}
				</span>
				<span className="title">Dias</span>
			</div>

			<div className="flex items-center mr-7 flex-col flex-nowrap">
				<span
					className="w-20 h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg text-4xl font-pop"
					id="hours"
				>
					{remainingTime.hours}
				</span>
				<span className="title">Horas</span>
			</div>

			<div className="flex items-center mr-7 flex-col flex-nowrap">
				<span
					className="w-20 h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg text-4xl font-pop"
					id="minutes"
				>
					{remainingTime.minutes}
				</span>
				<span className="title">Minutos</span>
			</div>
			<div className="flex items-center mr-7 flex-col flex-nowrap">
				<span
					className="w-20 h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg text-4xl font-pop"
					id="minutes"
				>
					{remainingTime.seconds}
				</span>
				<span className="title">Segundos</span>
			</div>
		</div>
	);
};

export default CountdownTimer;
