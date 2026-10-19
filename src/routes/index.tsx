import { createFileRoute } from "@tanstack/react-router";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ImageLightbox } from "@/components/ImageLightbox";
import { PeopleSection } from "@/components/PeopleSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DMM Group | IIT Palakkad" },
      { name: "description", content: "Digital Materials & Manufacturing Laboratory at IIT Palakkad: mechanics of materials, digital twins and advanced manufacturing research." },
      { property: "og:title", content: "DMM Group | IIT Palakkad" },
      { property: "og:description", content: "Mechanics of materials and digital twins for advanced manufacturing at IIT Palakkad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {

  return (
    <div id="top" className="bg-surface-canvas text-on-surface antialiased">
<ImageLightbox selector="main img:not(#people img)" />
<header className="fixed top-0 left-0 right-0 z-50 bg-surface-paper/95 backdrop-blur-md shadow-[0_1px_8px_rgba(15,43,72,0.04)]"><div className="bg-accent-navy text-on-primary"><div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter flex items-center justify-between h-8"><div className="flex items-center space-x-space-xs font-label-sm text-label-sm tracking-wider uppercase opacity-90 truncate"><span>Department of Mechanical Engineering</span><span className="opacity-40 hidden md:inline">|</span><span className="hidden md:inline">Indian Institute of Technology Palakkad</span></div><div className="hidden md:flex items-center space-x-space-md font-label-sm text-label-sm"><a className="text-on-primary hover:text-secondary-fixed transition-colors" href="https://iitpkd.ac.in" rel="noreferrer" target="_blank">IIT PKD Portal</a></div></div></div><div className="h-20 max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter flex items-center justify-between"><div className="flex items-center space-x-space-md"><div className="flex flex-col"><a className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none hover:text-accent-cobalt transition-colors" data-path="overview" href="#top">DMM Group</a><span className="font-label-sm text-label-sm text-text-secondary mt-1 tracking-wide">Digital Materials &amp; Manufacturing Laboratory</span></div></div><nav className="hidden xl:flex whitespace-nowrap items-center space-x-space-xs font-label-md text-label-md" data-active-classes="bg-surface-container-high text-on-surface font-semibold rounded-lg"><a aria-current="page" className="px-space-sm py-space-xs transition-colors bg-surface-container-high text-on-surface font-semibold rounded-lg" data-path="overview" href="#top">Overview</a><a className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="research-areas" href="#research-thrusts">Research Areas</a><a className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="projects-and-visuals" href="#projects-and-visuals">Projects &amp; Visuals</a><a className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="people" href="#people">People</a><a className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="teaching" href="#teaching">Teaching</a><a className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="publications" href="#publications">Publications</a><a className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="contact" href="#contact">Contact</a></nav><div className="flex items-center space-x-space-md"><a className="hidden sm:inline-flex whitespace-nowrap items-center px-space-md py-space-xs bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-container transition-all shadow-[0_1px_4px_rgba(15,43,72,0.12)]" data-path="openings" href="#openings">Openings / Join Us</a><details className="xl:hidden relative"><summary aria-label="Open menu" className="list-none cursor-pointer w-10 h-10 flex items-center justify-center rounded hover:bg-surface-container [&::-webkit-details-marker]:hidden"><span className="material-symbols-outlined text-primary">menu</span></summary><div className="absolute right-0 top-12 w-60 bg-surface-paper rounded-xl shadow-lg py-space-xs"><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#top" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>Overview</a><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#research-thrusts" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>Research Areas</a><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#projects-and-visuals" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>Projects &amp; Visuals</a><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#people" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>People</a><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#teaching" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>Teaching</a><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#publications" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>Publications</a><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#contact" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>Contact</a><a className="block px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:bg-surface-container" href="#openings" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>Openings / Join Us</a></div></details></div></div></header><main className="w-full pt-36 bg-surface-canvas min-h-screen"><div className="flex flex-col w-full">
{/* SECTION 1: MODULAR HERO & DIGITAL THREAD OVERVIEW */}
<section className="w-full bg-surface-canvas pb-space-3xl">
<div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
{/* Breadcrumb / Overline */}
<div className="flex flex-wrap items-center gap-space-xs mb-space-md">
<span className="inline-flex items-center px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-code-notation text-code-notation uppercase tracking-wider">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cobalt mr-1.5 animate-pulse"></span>
          DMM Laboratory • IIT Palakkad
        </span>
<span className="text-text-muted font-code-notation text-code-notation">/</span>
<span className="text-text-secondary font-label-sm text-label-sm">Mechanics of Materials &amp; Digital Twins</span>
</div>
{/* Main Hero Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Left: Editorial Headline & Stance */}
<div className="lg:col-span-7 flex flex-col space-y-space-md pr-0 lg:pr-space-lg">
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight leading-tight">
            Synergistic Mechanics of Materials &amp; Digital Twins for Advanced Manufacturing
          </h1>
<p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
            Investigating microstructural evolution, structural integrity, crystal plasticity, and physics-informed digital twins during manufacturing and extreme in-service environments.
          </p>
{/* Metrics / Sub-anchors */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs pb-space-xs">
<div className="p-space-sm bg-surface-paper rounded shadow-sm">
<span className="block font-headline-md text-headline-md text-accent-navy font-semibold">10<span className="text-accent-cobalt font-body-md">+</span></span>
<span className="block font-label-sm text-label-sm text-text-muted mt-1 uppercase tracking-wide">Active Thrusts</span>
</div>
<div className="p-space-sm bg-surface-paper rounded shadow-sm min-w-0 overflow-hidden">
<span className="block font-headline-md text-headline-md text-accent-navy font-semibold">CPFE</span>
<span className="block font-label-sm text-label-sm text-text-muted mt-1 uppercase tracking-wide">Crystal Plasticity</span>
</div>
<div className="p-space-sm bg-surface-paper rounded shadow-sm min-w-0 overflow-hidden">
<span className="block font-headline-md text-headline-md text-accent-navy font-semibold">3D</span>
<span className="block font-label-sm text-label-sm text-text-muted mt-1 uppercase tracking-wide">Microstructures</span>
</div>
</div>
{/* Actions */}
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center space-x-space-xs px-space-md py-space-xs bg-accent-navy text-on-primary font-label-md text-label-md rounded hover:bg-primary transition-all shadow-sm" href="#research-thrusts">
<span>Explore Research Areas</span>
<span className="material-symbols-outlined text-sm">arrow_downward</span>
</a>
<a className="inline-flex items-center space-x-space-xs px-space-md py-space-xs bg-surface-paper text-accent-navy font-label-md text-label-md rounded hover:bg-surface-container transition-all shadow-sm" href="#people">
<span>View Members &amp; People</span>
<span className="material-symbols-outlined text-sm">group</span>
</a>
<a className="inline-flex items-center space-x-space-2xs px-space-sm py-space-xs text-accent-cobalt font-label-md text-label-md hover:underline" href="#openings">
<span>Open Positions</span>
<span className="material-symbols-outlined text-sm">north_east</span>
</a>
</div>
</div>
{/* Right: Scientific Graphic Figure */}
<div className="lg:col-span-5 flex flex-col space-y-space-xs">
<div className="p-space-xs bg-surface-paper rounded shadow-sm">
<div className="overflow-hidden rounded bg-surface-subtle">
<img alt="DMM Group Overview - Multi-scale constitutive modelling and digital thread architecture" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGDhGsPbkNNCSqgRNzv4cV-UnNsVvJMx85NCrQ2Km1T2qhXyMjg_98vEqEQjfH-dX-CS-qY9b3X-pSqIOkRd0FLg3ZaOhQnsCSB8ngLx-0G_IiPTLqMB0EHsz7IiRVwGq9ui0csvCH_SmoulN6_bny70H9l7cBoXB6MlVxizC0H2MbxsWJ7JY-Fl_6iY5OY_saVCnYafnuaRKvEWVuVEsVkLIlWFGU7dJWxjMnvkQHzihnSfDft_NtcAB3KIDapeGp" />
</div>
<div className="p-space-sm bg-surface-paper">
<div className="flex items-center justify-between mb-1">
<span className="font-code-notation text-code-notation text-accent-cobalt uppercase tracking-widest font-semibold">Fig 1.0 • Lab Foundation</span>
<span className="font-label-sm text-label-sm text-text-muted">Multi-Scale Digital Thread</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-snug">
                Multi-scale constitutive modelling and digital thread linking raw material micro-physics to macroscopic thermo-mechanical finished components.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* NEWS FEED / TICKER BANNER */}
<section className="w-full bg-surface-container-high py-space-sm">
<div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center space-x-space-sm min-w-0">
<span className="px-space-xs py-0.5 rounded bg-accent-navy text-on-primary font-label-sm text-label-sm tracking-widest uppercase shrink-0">News &amp; Updates</span>
<div className="truncate font-body-sm text-body-sm text-text-primary">
<span className="font-code-notation text-code-notation text-accent-cobalt mr-1">Oct 2026:</span> Achal H P joins DMM as PhD Scholar • Experimental characterization &amp; crystal plasticity modelling.
        </div>
</div>
<a className="shrink-0 inline-flex items-center text-accent-navy hover:text-accent-cobalt font-label-sm text-label-sm uppercase tracking-wide" href="#publications">
<span>Recent Activity</span>
<span className="material-symbols-outlined text-xs ml-1">arrow_forward</span>
</a>
</div>
</section>
{/* SECTION 2: RESEARCH HIGHLIGHTS & ACTIVE AREAS */}
<section className="w-full bg-surface-canvas py-space-3xl" id="research-thrusts">
<div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl pb-space-sm">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt uppercase tracking-widest block mb-1">Investigation Portfolios</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Active Research Thrusts</h2>
</div>
<p className="font-body-sm text-body-sm text-text-secondary max-w-md mt-2 md:mt-0">
          Synergizing continuum thermo-mechanics, high-strain-rate experiments, and high-fidelity microstructural crystal plasticity models.
        </p>
</div>
{/* 4 Core Thrusts Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Thrust 1 */}
<article className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
<div className="p-space-lg flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm uppercase tracking-wider">Thrust 01</span>
<span className="font-code-notation text-code-notation text-text-muted">FEM • Constitutive</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
              Digital Twins of Manufacturing Processes
            </h3>
<p className="font-body-md text-body-md text-text-secondary">
              Development of high-fidelity numerical representations for extreme hot-deformation processes including hammer forging and multi-pass ring rolling. Captures dynamic recrystallization kinetics, localized friction heating, and real-time thermo-mechanical load response.
            </p>
<div className="pt-space-xs">
<img alt="Hammer Forging Digital Twin finite element temperature and strain evolution" className="w-full h-56 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGDhGsPbkNNCSqgRNzv4cV-UnNsVvJMx85NCrQ2Km1T2qhXyMjg_98vEqEQjfH-dX-CS-qY9b3X-pSqIOkRd0FLg3ZaOhQnsCSB8ngLx-0G_IiPTLqMB0EHsz7IiRVwGq9ui0csvCH_SmoulN6_bny70H9l7cBoXB6MlVxizC0H2MbxsWJ7JY-Fl_6iY5OY_saVCnYafnuaRKvEWVuVEsVkLIlWFGU7dJWxjMnvkQHzihnSfDft_NtcAB3KIDapeGp" />
</div>
</div>
<div className="px-space-lg py-space-sm bg-surface-subtle flex items-center justify-between">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Key Project: Hammer Forging Digital Twin</span>
<span className="font-code-notation text-code-notation text-accent-cobalt">DEFORM / ABAQUS</span>
</div>
</article>
{/* Thrust 2 */}
<article className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
<div className="p-space-lg flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm uppercase tracking-wider">Thrust 02</span>
<span className="font-code-notation text-code-notation text-text-muted">CPFE • EBSD • DIC</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
              Micromechanics &amp; Crystal Plasticity
            </h3>
<p className="font-body-md text-body-md text-text-secondary">
              Serial sectioning, 3D grain reconstruction, and non-local crystal plasticity finite element (CPFE) frameworks. Investigating twin nucleation criteria, stored energy density gradients, and crystallographic misorientation thresholds in hexagonal close-packed (HCP) alloys.
            </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-xs">
<img alt="Magnesium AZ31 Twin Nucleation Crystal Plasticity Graphical Abstract" className="w-full h-56 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmnz_q3_VCc7T7Wi9fKROyUo-G1Up9KzmPNK92bml3gqM5zBLs-I8mMWZCdhsTyQkgPCMzJ_txyHdLmlD5rw0AV3uifCnWqRBz58cBrwGpRyDOV1dHUu1rSWq-w-bqbH6sfvU79ZmHZcky9i07bAl-TiWQ6n_xr7DxDCmd-r2-_E_-KsRxCE599y7a1WT1QUJmAP4O-IZD4JcVX6Bi-Yyc5srAhnBj1qmA8GsapF80j_Q3db-dETjuFWmMkAygPAFT" />
<img alt="Twin nucleation 3D microstructures serial sectioning" className="w-full h-56 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWnkI5PDltkoO5RtKwIwvYNnJ0-IOpR60zsD7-XUaFRiVAQ51yjMefWEKvoMiYOVTPRsJd-rXV_5LQRsbnskjIb61jNVD90iunUPIOafwxK90ElqoST30D693HYWrHz8jjkUeOOFMAvpyQjIMCyJl5TmHx9pGb4B9sSspH8J7sU02uH_g9juE1rjFoSVa22rn1Ts8FeFpv_m7S2cRk7fsUr9EnPJR3poYKD9jk9uSBKv34aIsMr9vIvbcHX7lHyNRr" />
</div>
</div>
<div className="px-space-lg py-space-sm bg-surface-subtle flex items-center justify-between">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Systems: Magnesium AZ31, Ti-6Al-4V</span>
<span className="font-code-notation text-code-notation text-accent-cobalt">Imperial • Sheffield</span>
</div>
</article>
{/* Thrust 3 */}
<article className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
<div className="p-space-lg flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm uppercase tracking-wider">Thrust 03</span>
<span className="font-code-notation text-code-notation text-text-muted">Nye Tensor • Microstructural Damage</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
              Multi-scale Damage &amp; Geometrically Necessary Dislocations
            </h3>
<p className="font-body-md text-body-md text-text-secondary">
              Resolving dislocation density evolution at microstructural discontinuities. Using high-resolution electron backscatter diffraction (HR-EBSD) coupled with digital image correlation (DIC) to evaluate Nye dislocation tensor tensors and formulate slip-system-specific damage indicators.
            </p>
<div className="pt-space-xs">
<img alt="GND damage indicator graphical abstract showcasing Nye tensor and slip system strains" className="w-full h-56 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq7N-jIHvbGG1dXmcqoqQ4sKVis1W0eoWioG9T3knj4EqBPPE4x6u5B06u6SRePwn_rXDV4VE8joQUrEIjWN-ps8YKEGfS7vB2gIL0aAQO8SYZZOeWgKcmwTAEVxqbr7o7Jq5wL4cjGFehcaatdZ0CdZ_jSHklmUGLmuj8y6f2M_8n45EGC9Ms1Daa_j0tFUia1usgUVfTsPxWPdwQggJQ206ju0mUuaU8QcJVyybWSmjbKXHLob4kyLMhc2F8xR3n" />
</div>
</div>
<div className="px-space-lg py-space-sm bg-surface-subtle flex items-center justify-between">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Framework: Microstructural Strain Hotspots</span>
<span className="font-code-notation text-code-notation text-accent-cobalt">HR-EBSD / Nye</span>
</div>
</article>
{/* Thrust 4 */}
<article className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
<div className="p-space-lg flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm uppercase tracking-wider">Thrust 04</span>
<span className="font-code-notation text-code-notation text-text-muted">Grain Growth • Phase Field</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary tracking-tight">
              Constitutive Modelling &amp; Microstructural Grain Growth
            </h3>
<p className="font-body-md text-body-md text-text-secondary">
              Formulation of internal state variable models for hot deformation, dynamic recovery, and static/meta-dynamic recrystallization. Experimental heat-treatment protocols resolving prior austenite grain boundaries, texture evolution, and crystallographic pole figures.
            </p>
<div className="pt-space-xs grid grid-cols-2 gap-space-xs">
<img alt="Hot deformation constitutive model graph and grain structure" className="w-full h-56 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkKzrXmnsQQO3lsjF4Jtodvi2XIfD2KnVgqgqSZyCe3obtaY0UBI9rK1rzdVWR9vijSF-EhFoFzNYKP1a5Cu86pnR-jUjom7t2LNtCq3KZgyfa0hV9-iStjOGCA-l-UleZc8z9omGlaeIDp9A5PrhrYaB1buGUM8U56yAqVHHt25pw4PNFqDHTH6gHnKdjFpuVSIDmHucdW_lwzHTGWE-LLChI4GukBJU4BTk_rMuIOZ2iXDLixPzBNylJt40oxvFR" />
<img alt="Austenite grain heat treatment and pole figures" className="w-full h-56 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqPNWCwBKd3hT3_jkFQupUVwxAisa1n1zomxv0XgQ5VD4JzMlSSuarP2wVAy3CRpYJ2MvwCN_d5BX4f7ravHX2c55MP_EDGHlEd10-4uBOCKCnI_OsEsw52grKuUM72WuJh40YvW-oRDvijs7paB9WhCzc6WCwZDrvKxfUATfLzcEprLRmMjePA5g5nVtUPgMXtdazEIREFKpwpGdR1gNvuDWrztSqPMPAYmZ5YrFuWBi83id9D2O1Br-VR-NRh1lB" />
</div>
</div>
<div className="px-space-lg py-space-sm bg-surface-subtle flex items-center justify-between">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Alloys: Steels, Nickel Superalloys</span>
<span className="font-code-notation text-code-notation text-accent-cobalt">MatCalc / Thermo-Calc</span>
</div>
</article>
</div>
</div>
</section>
{/* SECTION 3: MULTI-COLUMN PROJECT & GRAPHICAL ABSTRACTS SHOWCASE */}
<section className="w-full bg-surface-subtle py-space-3xl" id="projects-and-visuals">
<div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt uppercase tracking-widest block mb-1">Laboratory Plates</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Graphical Abstracts &amp; Case Studies</h2>
</div>
<p className="font-body-sm text-body-sm text-text-secondary max-w-md mt-2 md:mt-0">
          Editorial archive of computational models, grain-scale EBSD maps, and digital twin representations developed by group members and collaborators.
        </p>
</div>
{/* Graphical Abstracts Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Abstract Card 1 */}
<div className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="p-space-xs bg-surface-paper">
<img alt="Hammer Forging Digital Twin Graphical Abstract" className="w-full h-48 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGDhGsPbkNNCSqgRNzv4cV-UnNsVvJMx85NCrQ2Km1T2qhXyMjg_98vEqEQjfH-dX-CS-qY9b3X-pSqIOkRd0FLg3ZaOhQnsCSB8ngLx-0G_IiPTLqMB0EHsz7IiRVwGq9ui0csvCH_SmoulN6_bny70H9l7cBoXB6MlVxizC0H2MbxsWJ7JY-Fl_6iY5OY_saVCnYafnuaRKvEWVuVEsVkLIlWFGU7dJWxjMnvkQHzihnSfDft_NtcAB3KIDapeGp" />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt block mb-1">PLATE GA-01 • PROCESS TWIN</span>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs leading-snug">Hammer Forging Digital Twin</h4>
<p className="font-body-sm text-body-sm text-text-secondary mb-space-sm">
                Finite element prediction of transient thermal gradients and accumulated effective strain profiles during heavy hammer forging operations.
              </p>
</div>
<div className="pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span>Simulation Domain</span>
<span className="font-code-notation text-code-notation text-primary">Explicit Dynamic</span>
</div>
</div>
</div>
{/* Abstract Card 2 */}
<div className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="p-space-xs bg-surface-paper">
<img alt="Forging strain map and microstructural flow lines Graphical Abstract" className="w-full h-48 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7nfXcsT7eXo5MOxh_OP_fDmx4XHaJLob7I6nbtf-iR2UK7rqAsK-aW3HeAMm8mAaqvMBJWuZqxqS0VLmJZ8BDr37cb6yr_dp1fWM3wxnlnOJz3hDJYGxhTJarE4-tKfEoc_62Rc8DvtyoLiYUtKgOmBTLjTDpzC7OgxYz8wLBbydeK67w7rOzEmSO98PR8OQqpvXcxEi4Iw5b-473zQyjkpXWENP6T36sUx_nFn7eTu8oj96-TvcMbdOvnm6v1Sxs" />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt block mb-1">PLATE GA-02 • METAL FORMING</span>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs leading-snug">Forging Strain Map &amp; Microstructural Flow</h4>
<p className="font-body-sm text-body-sm text-text-secondary mb-space-sm">
                Experimental flow-line analysis and macro-etched cross-sections mapping grain flow lines against continuum shear strain distribution.
              </p>
</div>
<div className="pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span>Material Scale</span>
<span className="font-code-notation text-code-notation text-primary">Meso / Macro</span>
</div>
</div>
</div>
{/* Abstract Card 3 */}
<div className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="p-space-xs bg-surface-paper">
<img alt="Twin nucleation 3D microstructure serial sectioning reconstruction" className="w-full h-48 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWnkI5PDltkoO5RtKwIwvYNnJ0-IOpR60zsD7-XUaFRiVAQ51yjMefWEKvoMiYOVTPRsJd-rXV_5LQRsbnskjIb61jNVD90iunUPIOafwxK90ElqoST30D693HYWrHz8jjkUeOOFMAvpyQjIMCyJl5TmHx9pGb4B9sSspH8J7sU02uH_g9juE1rjFoSVa22rn1Ts8FeFpv_m7S2cRk7fsUr9EnPJR3poYKD9jk9uSBKv34aIsMr9vIvbcHX7lHyNRr" />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt block mb-1">PLATE GA-03 • CRYSTAL PLASTICITY</span>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs leading-snug">Twin Nucleation 3D Microstructure</h4>
<p className="font-body-sm text-body-sm text-text-secondary mb-space-sm">
                FIB-SEM serial sectioning and full 3D polycrystal reconstruction investigating the stress state at grain boundaries triggering extension twin variants.
              </p>
</div>
<div className="pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span>Technique</span>
<span className="font-code-notation text-code-notation text-primary">3D-EBSD / CPFE</span>
</div>
</div>
</div>
{/* Abstract Card 4 */}
<div className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="p-space-xs bg-surface-paper">
<img alt="Hot deformation constitutive model graph by S Krishna Narayan" className="w-full h-48 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkKzrXmnsQQO3lsjF4Jtodvi2XIfD2KnVgqgqSZyCe3obtaY0UBI9rK1rzdVWR9vijSF-EhFoFzNYKP1a5Cu86pnR-jUjom7t2LNtCq3KZgyfa0hV9-iStjOGCA-l-UleZc8z9omGlaeIDp9A5PrhrYaB1buGUM8U56yAqVHHt25pw4PNFqDHTH6gHnKdjFpuVSIDmHucdW_lwzHTGWE-LLChI4GukBJU4BTk_rMuIOZ2iXDLixPzBNylJt40oxvFR" />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt block mb-1">PLATE GA-04 • CONSTITUTIVE</span>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs leading-snug">Hot Deformation Constitutive Model</h4>
<p className="font-body-sm text-body-sm text-text-secondary mb-space-sm">
                Internal state variable formulations capturing work hardening and dynamic recrystallization (DRX) softens across temperature and strain-rate domains.
              </p>
</div>
<div className="pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span>Lead Scholar</span>
<span className="font-code-notation text-code-notation text-primary">S. Krishna Narayan</span>
</div>
</div>
</div>
{/* Abstract Card 5 */}
<div className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="p-space-xs bg-surface-paper">
<img alt="Austenite grain heat treatment and pole figures by Ebin Shibu James" className="w-full h-48 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqPNWCwBKd3hT3_jkFQupUVwxAisa1n1zomxv0XgQ5VD4JzMlSSuarP2wVAy3CRpYJ2MvwCN_d5BX4f7ravHX2c55MP_EDGHlEd10-4uBOCKCnI_OsEsw52grKuUM72WuJh40YvW-oRDvijs7paB9WhCzc6WCwZDrvKxfUATfLzcEprLRmMjePA5g5nVtUPgMXtdazEIREFKpwpGdR1gNvuDWrztSqPMPAYmZ5YrFuWBi83id9D2O1Br-VR-NRh1lB" />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt block mb-1">PLATE GA-05 • METALLURGY</span>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs leading-snug">Austenite Grain Heat Treatment</h4>
<p className="font-body-sm text-body-sm text-text-secondary mb-space-sm">
                Reconstruction of parent austenite grains from room-temperature martensite/bainite crystallographic orientations and inverse pole figure maps.
              </p>
</div>
<div className="pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span>Lead Scholar</span>
<span className="font-code-notation text-code-notation text-primary">Ebin Shibu James</span>
</div>
</div>
</div>
{/* Abstract Card 6 */}
<div className="bg-surface-paper rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="p-space-xs bg-surface-paper">
<img alt="GND-Mediated Damage Indicator at Individual Slip Systems" className="w-full h-48 object-cover rounded bg-surface-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq7N-jIHvbGG1dXmcqoqQ4sKVis1W0eoWioG9T3knj4EqBPPE4x6u5B06u6SRePwn_rXDV4VE8joQUrEIjWN-ps8YKEGfS7vB2gIL0aAQO8SYZZOeWgKcmwTAEVxqbr7o7Jq5wL4cjGFehcaatdZ0CdZ_jSHklmUGLmuj8y6f2M_8n45EGC9Ms1Daa_j0tFUia1usgUVfTsPxWPdwQggJQ206ju0mUuaU8QcJVyybWSmjbKXHLob4kyLMhc2F8xR3n" />
</div>
<div className="p-space-md flex-1 flex flex-col justify-between">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt block mb-1">PLATE GA-06 • DAMAGE MECHANICS</span>
<h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs leading-snug">GND-Mediated Damage Indicator</h4>
<p className="font-body-sm text-body-sm text-text-secondary mb-space-sm">
                Resolving dislocation-dense boundary interfaces and crystallographic shear localization predicting microcrack onset before macroscopic fracture.
              </p>
</div>
<div className="pt-space-xs flex items-center justify-between text-text-muted font-label-sm text-label-sm">
<span>Technique</span>
<span className="font-code-notation text-code-notation text-primary">HR-DIC / CPFE</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 4: PEOPLE / TEAM DIRECTORY (VERBATIM FROM DOCUMENTATION) */}
<PeopleSection />
<section className="w-full bg-surface-subtle py-space-3xl" id="teaching">
<div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt uppercase tracking-widest block mb-1">Academic Curriculum</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Teaching &amp; Course Instruction</h2>
</div>
<div className="mt-2 md:mt-0 flex items-center space-x-space-xs">
<span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm uppercase">AFHEA Certified</span>
<span className="text-text-muted font-body-sm text-body-sm">IIT Palakkad Mechanical Engineering</span>
</div>
</div>
{/* Tabular Teaching Schedule */}
<div className="bg-surface-paper rounded shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md">
<thead>
<tr className="bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md">Course Code</th>
<th className="py-space-sm px-space-md">Course Title</th>
<th className="py-space-sm px-space-md">Target Cohort</th>
<th className="py-space-sm px-space-md">Type / Role</th>
<th className="py-space-sm px-space-md text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/* Row 1 */}
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-space-md px-space-md font-code-notation text-code-notation text-accent-navy font-semibold">ME5007</td>
<td className="py-space-md px-space-md font-title-md text-title-md text-text-primary">Advanced Engineering Materials</td>
<td className="py-space-md px-space-md text-text-secondary">Postgraduate (M.Tech / PhD)</td>
<td className="py-space-md px-space-md text-text-secondary">Core Theory / Primary Instructor</td>
<td className="py-space-md px-space-md text-right">
<span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm">Active Semester</span>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-space-md px-space-md font-code-notation text-code-notation text-accent-navy font-semibold">ME1150</td>
<td className="py-space-md px-space-md font-title-md text-title-md text-text-primary">Mechanical Workshop</td>
<td className="py-space-md px-space-md text-text-secondary">Undergraduate (B.Tech 1st Year)</td>
<td className="py-space-md px-space-md text-text-secondary">Practical Hands-on Lab</td>
<td className="py-space-md px-space-md text-right">
<span className="px-space-xs py-0.5 rounded bg-surface-subtle text-text-muted font-label-sm text-label-sm">Regular</span>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-space-md px-space-md font-code-notation text-code-notation text-accent-navy font-semibold">ME5110</td>
<td className="py-space-md px-space-md font-title-md text-title-md text-text-primary">M.Tech Project (Continuous Evaluation)</td>
<td className="py-space-md px-space-md text-text-secondary">M.Tech Manufacturing / Design</td>
<td className="py-space-md px-space-md text-text-secondary">Thesis Research Supervision</td>
<td className="py-space-md px-space-md text-right">
<span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm">Ongoing</span>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-space-md px-space-md font-code-notation text-code-notation text-accent-navy font-semibold">ME5004</td>
<td className="py-space-md px-space-md font-title-md text-title-md text-text-primary">Mechanical Behaviour of Materials</td>
<td className="py-space-md px-space-md text-text-secondary">Postgraduate / Final Year B.Tech</td>
<td className="py-space-md px-space-md text-text-secondary">Advanced Mechanics Elective</td>
<td className="py-space-md px-space-md text-right">
<span className="px-space-xs py-0.5 rounded bg-surface-subtle text-text-muted font-label-sm text-label-sm">Curriculum</span>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-space-md px-space-md font-code-notation text-code-notation text-accent-navy font-semibold">ME3112</td>
<td className="py-space-md px-space-md font-title-md text-title-md text-text-primary">Manufacturing and Materials Engineering Lab</td>
<td className="py-space-md px-space-md text-text-secondary">Undergraduate (B.Tech 3rd Year)</td>
<td className="py-space-md px-space-md text-text-secondary">Experimental Mechanics &amp; Testing</td>
<td className="py-space-md px-space-md text-right">
<span className="px-space-xs py-0.5 rounded bg-surface-subtle text-text-muted font-label-sm text-label-sm">Curriculum</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
{/* SECTION 6: STRUCTURED PUBLICATIONS & ARCHIVE WITH FILTERING UI */}
<PublicationsSection />
{/* SECTION 7: OPENINGS / JOIN US BANNER */}
<section className="w-full bg-accent-navy text-on-primary py-space-3xl" id="openings">
<div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-8 flex flex-col space-y-space-md">
<span className="px-space-xs py-0.5 w-fit rounded bg-accent-cobalt text-on-primary font-label-sm text-label-sm uppercase tracking-widest">
            Prospective Researchers &amp; Fellows
          </span>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
            Join the Digital Materials &amp; Manufacturing Laboratory
          </h2>
<p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
            Prospective researchers interested in PhD, MS (Research), and Postdoctoral fellowships in Mechanics of Materials &amp; Digital Twins are encouraged to review our active research themes and contact the PI directly with an academic CV, statement of purpose, and sample publications.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs text-on-primary">
<div className="p-space-sm bg-primary-container rounded">
<span className="font-title-md text-title-md block font-semibold text-primary-fixed">Ph.D Scholars</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">GATE / CSIR-NET / Institute Fellowships open bi-annually.</span>
</div>
<div className="p-space-sm bg-primary-container rounded">
<span className="font-title-md text-title-md block font-semibold text-primary-fixed">MS by Research</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">Focusing on numerical CPFE and deformation experiments.</span>
</div>
<div className="p-space-sm bg-primary-container rounded">
<span className="font-title-md text-title-md block font-semibold text-primary-fixed">Postdoctoral</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">National PDF, Institute PDF, and industry-sponsored grants.</span>
</div>
</div>
</div>
<div className="lg:col-span-4 bg-primary rounded p-space-lg flex flex-col space-y-space-md shadow-md">
<h4 className="font-headline-sm text-headline-sm text-on-primary">Direct Application Inquiries</h4>
<p className="font-body-sm text-body-sm text-primary-fixed-dim">
            Formal institute admission rounds occur in Autumn (July) and Spring (December). Candidates eligible for external funding may apply year-round.
          </p>
<div className="font-code-notation text-code-notation text-on-primary select-all bg-primary-container p-space-xs rounded">
            c[dot]paramatmuni[at]iitpkd[dot]ac[dot]in
          </div>
<a className="inline-flex items-center justify-center space-x-space-xs px-space-md py-space-xs bg-on-primary text-primary font-label-md text-label-md rounded hover:bg-primary-fixed transition-colors" href="#contact">
<span>Contact Information</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* SECTION 8: CONTACT & LOCATION BLOCK */}
<section className="w-full bg-surface-canvas py-space-3xl" id="contact">
<div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Contact Meta */}
<div className="lg:col-span-6 flex flex-col space-y-space-md">
<div>
<span className="font-code-notation text-code-notation text-accent-cobalt uppercase tracking-widest block mb-1">Institutional Location</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Contact &amp; Sahyadri Campus</h2>
</div>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            The Digital Materials &amp; Manufacturing (DMM) Group is based at the Sahyadri Campus of IIT Palakkad, situated at the foothills of the Western Ghats along the Palakkad Gap corridor.
          </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start space-x-space-sm p-space-sm bg-surface-paper rounded shadow-sm">
<span className="material-symbols-outlined text-accent-cobalt text-xl mt-0.5">location_on</span>
<div className="font-body-md text-body-md text-text-primary">
<strong className="font-semibold block">Office D03, Department of Mechanical Engineering</strong>
<span>Sahyadri Campus, Kanjikode, Indian Institute of Technology Palakkad</span><br />
<span>Palakkad 678623, Kerala, India</span>
</div>
</div>
<div className="flex items-start space-x-space-sm p-space-sm bg-surface-paper rounded shadow-sm">
<span className="material-symbols-outlined text-accent-cobalt text-xl mt-0.5">call</span>
<div className="font-body-md text-body-md text-text-primary">
<strong className="font-semibold block">Telephone Office</strong>
<span className="font-code-notation text-code-notation text-text-secondary">+91 491 209 1475</span>
</div>
</div>
<div className="flex items-start space-x-space-sm p-space-sm bg-surface-paper rounded shadow-sm">
<span className="material-symbols-outlined text-accent-cobalt text-xl mt-0.5">mail</span>
<div className="font-body-md text-body-md text-text-primary">
<strong className="font-semibold block">Electronic Mail (PI)</strong>
<span className="font-code-notation text-code-notation text-text-secondary select-all">c[dot]paramatmuni[at]iitpkd[dot]ac[dot]in</span>
</div>
</div>
</div>
</div>
{/* Campus Map & Facilities */}
<div className="lg:col-span-6 flex flex-col space-y-space-sm">
<div className="w-full h-80 rounded overflow-hidden shadow-sm" data-location="IIT Palakkad Sahyadri Campus, Kanjikode, Kerala, India">
<iframe title="Map of IIT Palakkad Sahyadri Campus, Kanjikode" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen src="https://maps.google.com/maps?q=Indian+Institute+of+Technology+Palakkad+Sahyadri+Campus+Kanjikode&z=14&output=embed" />
</div>
<div className="p-space-sm bg-surface-paper rounded shadow-sm flex flex-col sm:flex-row sm:items-center justify-between text-text-muted font-body-sm text-body-sm gap-space-xs">
<span>Nearest Transit: Palakkad Junction (PGT) • 15 km</span>
<span>Coimbatore Airport (CJB) • 55 km</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main><footer className="w-full bg-surface-subtle text-on-surface"><div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter py-space-3xl"><div className="grid grid-cols-1 md:grid-cols-12 gap-gutter"><div className="md:col-span-4 flex flex-col space-y-space-sm"><div className="flex items-center space-x-space-sm"><div className="w-3 h-3 bg-accent-cobalt rounded-none"></div><span className="font-headline-sm text-headline-sm text-primary">DMM Group</span></div><p className="font-body-sm text-body-sm text-text-secondary pr-space-md">Digital Materials &amp; Manufacturing Research Group investigating microstructural evolution, additive manufacturing regimes, and continuum computational mechanics.</p><div className="pt-space-xs"><span className="font-label-sm text-label-sm uppercase tracking-wider text-text-muted">Affiliation</span><p className="font-body-sm text-body-sm text-text-primary mt-space-2xs">Department of Mechanical Engineering<br />Indian Institute of Technology Palakkad</p></div></div><div className="md:col-span-5 flex flex-col space-y-space-xs"><span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">Principal Investigator &amp; Office</span><div className="font-body-sm text-body-sm text-text-secondary space-y-space-2xs"><p className="font-title-md text-title-md text-text-primary font-medium">Dr. Chaitanya Paramatmuni</p><p>Assistant Professor, Department of Mechanical Engineering</p><p>D03, Sahyadri Campus, Kanjikode</p><p>Indian Institute of Technology Palakkad, Palakkad 678623, Kerala, India</p></div><div className="pt-space-sm space-y-space-2xs font-code-notation text-code-notation text-text-secondary"><p className="flex items-center space-x-space-xs"><span className="material-symbols-outlined text-sm text-text-muted">call</span><span>+91 491 209 1475</span></p><p className="flex items-center space-x-space-xs"><span className="material-symbols-outlined text-sm text-text-muted">mail</span><span>c[dot]paramatmuni[at]iitpkd[dot]ac[dot]in</span></p></div></div><div className="md:col-span-3 flex flex-col space-y-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">Academic Repositories</span><ul className="space-y-space-xs font-body-sm text-body-sm"><li className="flex items-center space-x-space-xs"><span className="material-symbols-outlined text-xs text-accent-cobalt">open_in_new</span><a className="text-accent-cobalt hover:underline" href="https://iitpkd.ac.in/people/cparamatmuni" rel="noreferrer" target="_blank">Institutional Faculty Profile</a></li><li className="flex items-center space-x-space-xs"><span className="material-symbols-outlined text-xs text-text-muted">database</span><a className="text-text-secondary hover:text-text-primary transition-colors" href="https://scholar.google.com/citations?user=9bgwMM8AAAAJ&amp;hl=en" rel="noreferrer" target="_blank">Google Scholar Citations</a></li><li className="flex items-center space-x-space-xs"><span className="material-symbols-outlined text-xs text-text-muted">school</span><a className="text-text-secondary hover:text-text-primary transition-colors" href="https://iitpkd.ac.in" rel="noreferrer" target="_blank">IIT Palakkad Homepage</a></li></ul></div></div><div className="mt-space-2xl pt-space-lg flex flex-col sm:flex-row items-center justify-between text-text-muted font-label-sm text-label-sm"><p>© 2025 Digital Materials &amp; Manufacturing Group, IIT Palakkad. All rights reserved.</p><div className="flex space-x-space-md mt-space-sm sm:mt-0"><span>Academic Research Portal</span><span>•</span><span>Version 2.4</span></div></div></div></footer>
    </div>
  );
}
