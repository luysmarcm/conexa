import React from 'react'
import Image from 'next/image';

const AboutUsSection = () => {
	return (
		<section id="about" className="container mx-auto pt-10">
			<div class="circle1"></div>
			<div className="relative mx-auto px-4  pt-32 mb-16 flex flex-col-2 items-center w-3/4 bg-gold">
				<div className="	">
					<h2 className="font-pop font-extrabold text-transparent text-6xl text-azul uppercase">
						¿Quiénes Somos?
					</h2>
					<p className="text-azul  md:text-xl pt-6 ">
						Somos el Congreso Internacional Tecnológico de Técnicos y
						Emprendedores, con el propósito de unificar, expandir e intercambiar
						soluciones y avances tecnológicos con respecto al servicio técnico,
						emprendimientos y consumidores de la tecnología en toda
						Latinoamérica.
					</p>
				</div>
				<div className="-translate-y-20">
					<img className="object-cover" src="/image/unidos.png" alt="" />
				</div>
			</div>
			<div className="flex flex-col-2 items-center relative ">
				<div className="w-1/2 md:p-10 ">
					<h2 className="font-pop font-extrabold text-transparent text-6xl text-azul">
						Canguro<span className="font-rale">PRO</span>
					</h2>
					<p className="text-azul  md:text-xl pt-6 ">
						Nuestra historia comienza de la mano de Canguro; gracias al sueño
						tecnológico de los instructores PRO. Pero, ¿qué es Canguro PRO?{" "}
						<br />
						<br />
						<span className="font-bold font-pop font ">Canguro PRO</span>, es un
						training room que nace en Barquisimeto, debido a la necesidad de
						poder preparar, capacitar y formar personas en el área del servicio
						técnico y así potenciar los conocimientos de las personas que
						quieran empezar y especializarse en el área del servicio técnico.
					</p>
				</div>
				<div className="w-1/2">
					<Image
						className="object-cover"
						src="/image/2.png"
						alt=""
						width={2156}
						height={1519}
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutUsSection;