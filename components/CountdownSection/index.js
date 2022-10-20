import React, { useEffect } from 'react'
import CountdownTimer from './CountdownTimer'
import gsap from "gsap";

const CountdownSection = () => {	
	return (
		<div className="pt-5">
			<CountdownTimer countdownTimestampMs={1698414921000} />
		</div>
	);
};

export default CountdownSection;