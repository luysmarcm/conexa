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

	console.log(remainingTime);

	return (
		<div class="mt-14 flex items-center justify-between">
			<div class="flex items-center mr-7 flex-col flex-nowrap">
				<span
					class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl "
					id="days"
				>
					{remainingTime.month}
				</span>
				<span class="title">Meses</span>
			</div>

			<div class="flex items-center mr-7 flex-col flex-nowrap">
				<span
					class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
					id="days"
				>
					{remainingTime.days}
				</span>
				<span class="title">Dias</span>
			</div>

			<div class="flex items-center mr-7 flex-col flex-nowrap">
				<span
					class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
					id="hours"
				>
					{remainingTime.hours}
				</span>
				<span class="title">Horas</span>
			</div>

			<div class="flex items-center mr-7 flex-col flex-nowrap">
				<span
					class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
					id="minutes"
				>
					{remainingTime.minutes}
				</span>
				<span class="title">Minutos</span>
			</div>
			<div class="flex items-center mr-7 flex-col flex-nowrap">
				<span
					class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
					id="minutes"
				>
					{remainingTime.seconds}
				</span>
				<span class="title">Segundos</span>
			</div>
		</div>
	);
};

export default CountdownTimer;
