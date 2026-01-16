import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {useRef} from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);

const studies = [
	{
		title: "RTG (rentgen)",
		description:
			"Podstawowe badanie obrazowe kości i klatki piersiowej, wykonywane szybko i bezinwazyjnie. " +
			"Pozwala wykryć urazy, zmiany zapalne oraz kontrolować przebieg leczenia.",
		image: "/media/radio-photo-10.jpeg",
	},
	{
		title: "TK (tomografia komputerowa)",
		description:
			"Dokładne skanowanie przekrojowe narządów wewnętrznych i struktur kostnych. " +
			"Stosowane w diagnostyce urazowej, onkologicznej i naczyniowej.",
		image: "/media/radio-photo-6.jpeg",
	},
	{
		title: "MR (rezonans magnetyczny)",
		description:
			"Najlepsze badanie tkanek miękkich, stawów i układu nerwowego. " +
			"Zapewnia wysoką rozdzielczość bez użycia promieniowania jonizującego.",
		image: "/media/radio-photo-11.jpeg",
	},
	{
		title: "MMG (mammografia)",
		description:
			"Badanie przesiewowe piersi wykrywające zmiany na wczesnym etapie. " +
			"Kluczowe w profilaktyce i szybkiej diagnostyce.",
		image: "/media/radio-photo-8.jpg",
	},
];


export const StackedCards = () => {
	const wrapperRef = useRef(null);
	const contentRef = useRef(null);

	useGSAP(() => {
		ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			smoothing: 1.2,
			effects: true,
			smoothTouch: 0.1
		})

		const cards = gsap.utils.toArray('.card');

		gsap.set('.img-wrapper img', {
			clipPath: 'polygon(0 0, 0 100%, 0 0)',
			autoAlpha: 0,
		})

		gsap.set('.card-content h1', {
			y: 0,
			autoAlpha: 0,
		})

		cards.forEach((card, i) => {
			const img = card.querySelector('img');
			const textEls = card.querySelectorAll('.card-content h1, .card-content p');

			gsap.to(card, {
				scale: 0.8 + 0.2 * (i / (cards.length - 1)),
				ease: "none",
				scrollTrigger: {
					trigger: card,
					start: "top " + (15 + 35 * i),
					end: "bottom bottom",
					endTrigger: ".container",
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
						clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
						autoAlpha: 1,
						duration: 2,
						delay: 0.2,
						ease: "power2.out",
					});

					tl.to(textEls, {
						y: -10,
						autoAlpha: 1,
						duration: 0.6,
						ease: "power2.in",
						stagger: 0.4,
					},
						"-=1.5"
					)
				}
			})
		})
	}, {scope: contentRef});

	return (
		<div id="smooth-wrapper" ref={wrapperRef} className="h-full overflow-hidden bg-[#e2e2e2]">
			<div id="smooth-content" ref={contentRef} className="will-change-transform">
				<div className="spacer w-full min-h-screen"></div>
				<div className="container flex min-h-screen w-full flex-col items-center max-w-none px-0">
					<div className="stacked-cards mx-auto flex w-[90%] flex-col items-center md:w-[85%] xl:w-[70%]">
						{studies.map((card, idx) => (
							<div
								className="card mx-auto mb-[75vh] flex h-[75vh] w-full origin-center flex-col-reverse rounded-[10px] bg-[#f2f2f2] shadow-[0_10px_20px_rgba(0,0,0,0.2),0_6px_6px_rgba(0,0,0,0.2)] sm:flex-row"
								key={idx}
							>
								<div className="card-content flex h-[40%] w-full flex-col items-center justify-center px-5 py-2.5 sm:h-full sm:w-1/2">
									<h1 className="mt-5 font-['Playpen Sans Deva'] text-[clamp(1.8rem,5vw,3.5rem)] font-light text-slate-900 sm:mt-0">
										{card.title}
									</h1>
									<p className="hidden w-[90%] font-['Raleway'] text-[clamp(0.9rem,2vw,1.1rem)] text-slate-600 sm:mt-4 sm:block sm:w-[80%] sm:leading-[1.6]">
										{card.description}
									</p>
								</div>
								<div className="img-wrapper h-[60%] w-full overflow-hidden rounded-t-[10px] sm:h-full sm:w-1/2 sm:rounded-t-none sm:rounded-tr-[10px] sm:rounded-br-[10px] sm:rounded-tl-none sm:rounded-bl-none">
									<img
										src={card.image}
										alt={card.title}
										className="block h-full w-full object-cover will-change-[clip-path]"
										loading="lazy"
									/>
								</div>
							</div>
						))}
					</div>
				</div>

			</div>
		</div>
	)
}
