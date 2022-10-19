import React from 'react'

const PricingPlansCard = ({plan}) => {

  const {description} = plan
  return (
		<div
			style={{ borderRadius: "40px" }}
			class="flex flex-col p-6 text-center text-gray-900 bg-white scale-none even:scale-1 even:bg-primary even:tra rounded-lg border border-gray-100 shadow"
		>
			<h3 class="mb-4 text-lg font-extrabold uppercase">{plan.nombre}</h3>
			<div class="flex justify-center items-baseline my-8">
				<span class="mr-2 text-5xl font-extrabold font-gilroygold  text-black even:text-white">
					{plan.precio}
				</span>
			</div>
			<ul role="list" class="mb-8 space-y-4">
				<li>{description.text1}</li>
				<li>{description.text2}</li>
				<li>{description.text3}</li>
				<li>{description.text4}</li>
			</ul>
		</div>
	);
}

export default PricingPlansCard