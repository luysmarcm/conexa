import React from 'react'

const AboutUsSection = () => {
	return (
		<div id="about" className="container mx-auto px-4 pt-16 mb-16">
			{/* <div className="font-bold text-5xl font-gilroygold">
				Compaña Computacíon
			</div>
			<div className="font-bold text-5xl">Compaña Computacíon</div> */}
			<article class="card">
				<div class="circle"></div>
				{/* <div class="circle"></div> */}
				<div class="card-inner">
					<div class="text">
						<h1>
							Hey, would you like to learn how to create a
							<span class="text-gradient">generative</span> UI just like this?
						</h1>
					</div>
				</div>
				{/* <div class="circle"></div> */}
			</article>
		</div>
	);
};

export default AboutUsSection;