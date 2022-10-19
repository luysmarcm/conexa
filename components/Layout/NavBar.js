import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const links = [
	{ name: "Inicio", href: "#home", current: false },
	{ name: "Nosotros", href: "#about", current: false },
	{ name: "Aliados", href: "#allies", current: false },
];

const NavBar = () => {

    const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

		const showSideMenu = () => {
			setisSideMenuOpen(!isSideMenuOpen);
		};
  return (
		<nav className="backdrop-blur-xl bg-white/30  p-2 lg:p-2 mt-0 fixed w-full z-10 top-0 shadow-lg">
			<div className=" mx-auto flex items-center justify-between px-10">
				<div className="flex w-32 lg:w-1/2 md:justify-start text-white font-extrabold	">
					<Link href="/" passHref>
						<div style={{ width: "150px" }}>
							<Image
								src="/image/logo1.png"
								alt="Logo"
								width="384"
								height="126"
							/>
						</div>
					</Link>
				</div>
				<div className="flex  lg:content-center justify-between md:w-1/2 md:justify-end">
					<ul className="list-reset hidden lg:flex justify-between flex-1 md:flex-none items-center">
						<li className="mr-3">
							{links.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="px-3 py-2 rounded-md text-md lg:text-lg text-negro hover:text-azul"
								>
									{item.name}
								</a>
							))}
						</li>
					</ul>
					<button
						aria-label="Abrir menu"
						onClick={() => {
							showSideMenu();
						}}
						className="lg:hidden w-8 h-8 rounded-xl overflow-hidden text-negro"
					>
						<svg style={{ width: "100%", height: "100%" }} viewBox="0 0 20 20">
							<path
								fill="currentColor"
								d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14"
							/>
						</svg>
					</button>
					<div
						className={`transition-all duration-500 ease-in-out fixed w-full lg:hidden   bg-white left-0 top-16 overflow-hidden  ${
							isSideMenuOpen ? "h-auto" : "h-0"
						}`}
					>
						<ul className="flex flex-col p-10 text-2xl space-y-3">
							{links.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className="px-3 py-2 rounded-md text-md lg:text-lg text-black hover:text-primary"
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar