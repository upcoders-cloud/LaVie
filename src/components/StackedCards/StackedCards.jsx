import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const StackedCards = ({ items }) => {
	const sectionRef = useRef(null);

	useGSAP(() => {
		const sectionEl = sectionRef.current;
		if (!sectionEl) return;

		const cards = Array.from(sectionEl.querySelectorAll('.card'));
		const containerEl = sectionEl.querySelector('.container');

		// Fade-in reveal for images.
		gsap.set(sectionEl.querySelectorAll('.img-wrapper img'), {
			autoAlpha: 0,
			scale: 1.02,
		})

		gsap.set(sectionEl.querySelectorAll('.card-content h1, .card-content p, .card-content span'), {
			y: 10,
			autoAlpha: 0,
		})

		cards.forEach((card, i) => {
			const img = card.querySelector('img');
			const textEls = card.querySelectorAll('.card-content h1, .card-content p, .card-content span');

			gsap.to(card, {
				scale: 0.8 + 0.2 * (i / (cards.length - 1)),
				ease: "none",
				scrollTrigger: {
					trigger: card,
					start: "top " + (15 + 35 * i),
					end: "bottom bottom",
					endTrigger: containerEl,
					scrub: true,
					pin: card,
					pinSpacer: false,
					invalidateOnRefresh: true
				}
			})

			ScrollTrigger.create({
				trigger: card,
				start: "bottom bottom",
				once: true,
				onEnter: () => {
					const tl = gsap.timeline();
					tl.to(img, {
						autoAlpha: 1,
						scale: 1,
						duration: 1.5,
						delay: 0.2,
						ease: "power2.out",
					});

					tl.to(textEls, {
						y: 0,
						autoAlpha: 1,
						duration: 0.6,
						ease: "power2.in",
						stagger: 0.2,
					}, "-=0.6")
				}
			})
		})
	}, {scope: sectionRef});

	return (
		<section ref={sectionRef} className="w-full">
			<div className="container flex min-h-screen w-full flex-col items-center max-w-none px-0">
				<div className="stacked-cards mx-auto flex w-[90%] flex-col items-center md:w-[85%] xl:w-[70%]">
					{items.map((card, idx) => (
						<div
							className="card mx-auto mb-[75vh] flex h-[75vh] w-full origin-center flex-col-reverse rounded-[10px] bg-[#f2f2f2] shadow-[0_10px_20px_rgba(0,0,0,0.2),0_6px_6px_rgba(0,0,0,0.2)] sm:flex-row"
							key={idx}
						>
							<div className="card-content flex h-[40%] w-full flex-col items-center justify-center px-5 py-2.5 sm:h-full sm:w-1/2">
								<span className="mb-2 rounded-full bg-primary-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-700">
									Badanie obrazowe
								</span>
								<h1 className="mt-5 text-4xl font-light text-slate-900 sm:mt-0 text-center">
									{card.title}
								</h1>
								<p className="hidden w-[90%] text-base text-slate-600 sm:mt-4 sm:block sm:w-[80%] sm:leading-[1.6]">
									{card.description}
								</p>
							</div>
							<div className="img-wrapper relative h-[60%] w-full overflow-hidden rounded-t-[10px] sm:h-full sm:w-1/2 sm:rounded-t-none sm:rounded-tr-[10px] sm:rounded-br-[10px] sm:rounded-tl-none sm:rounded-bl-none">
								<img
									src={card.image}
									alt={card.title}
									className="block h-full w-full object-cover will-change-opacity"
									loading="lazy"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
