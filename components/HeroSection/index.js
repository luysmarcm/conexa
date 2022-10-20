import CountdownSection from "components/CountdownSection";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div
			id="home"
			className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:py-5 w-full inset-0 backdrop-blur-sm bg-white/30 orb-canvas"
		>
			<div class="circle"></div>
			<div className="">
				<div className="p-10 relative flex flex-col items-center w-full mb-10 lg:flex-row space-x-10 justify-around">
					<div className="mb-16 lg:mb-0 lg:max-w-lg lg:pt-20">
						<div className="max-w-xl mb-6 ">
							<h2 className="tracking-tight sm:text-8xl sm:leading-none max-w-lg mb-6 font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-primary via-azul to-secundary font-pop">
								Conexa
							</h2>
							<p className="text-transparent text-base md:text-xl bg-clip-text font-pop fon bg-gradient-to-r from-primary  to-secundary">
								Congreso Internacional Tecnológico <br />
								Técnicos y Emprendedores
							</p>
							<p className="text-transparent text-base md:text-base bg-clip-text bg-gradient-to-r from-azul to-secundary uppercase">
								by canguropro
							</p>
						</div>
						<div>
							<div className="flex flex-row space-x-10">
								<p className="text-transparent text-base md:text-4xl bg-clip-text bg-gradient-to-r text-azul">
									CARACAS
								</p>
								<p id="content-box" className="bg-azul  md:text-2xl text-white">
									october{" "}
									<span className="font-gilroygold font-extrabold">2023</span>
								</p>
							</div>
							<CountdownSection />
						</div>
					</div>
					<div className=" hidden lg:flex items-center justify-center w-full">
						<Image
							className="object-cover"
							src="/image/1.png"
							alt=""
							width={1119}
							height={1080}
						/>
					</div>
				</div>
				<a
					href="#about"
					aria-label="Scroll down"
					className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="currentColor"
					>
						<path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
					</svg>
				</a>
			</div>
		</div>
	);
};

export default HeroSection;