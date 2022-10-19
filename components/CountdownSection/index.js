import React, { useEffect } from 'react'
import CountdownTimer from './CountdownTimer'
import gsap from "gsap";

const CountdownSection = () => {	
	return (
		<div>
			<div class="max-w-4xl mx-auto mt-8 z-10">
				{/* <div class="text-center text-4xl">LET'S COUNTDOWN TO NEW YEAR</div> */}

				<CountdownTimer countdownTimestampMs={1698414921000} />
			</div>
		</div>
	);
};

export default CountdownSection;