export type PubCategory = "twins" | "crystal" | "damage" | "constitutive";
export type Publication = {
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi: string;
  category: PubCategory;
};

export const SCHOLAR_URL = "https://scholar.google.com/citations?user=9bgwMM8AAAAJ&hl=en";

export const CATEGORY_LABELS: Record<PubCategory, string> = {
  twins: "Digital Twins & Manufacturing",
  crystal: "Crystal Plasticity & Twinning",
  damage: "Damage Mechanics & GND",
  constitutive: "Constitutive Modelling",
};

// Verified against Crossref metadata.
export const PUBLICATIONS: Publication[] = [
  { year: 2025, title: "Evaluation of uncertainty in material flow predictions in hammer forging of steel through constitutive modelling", authors: "O. Koval, A. Das, C. Paramatmuni, E. Pickering, D. Cogswell", journal: "Journal of Manufacturing Processes", doi: "10.1016/j.jmapro.2024.11.048", category: "constitutive" },
  { year: 2025, title: "Slip system-resolved GNDs and SEDs: A multi-scale framework for predicting crack nucleation in single-crystal metals", authors: "Z. Guo, X. Lu, C. Paramatmuni, H. Gao, F. Dunne, W. Yan, Y. Zhang, Y. Xu", journal: "Acta Materialia", doi: "10.1016/j.actamat.2025.120853", category: "damage" },
  { year: 2023, title: "Extending the capability of component digital threads using material passports", authors: "C. Paramatmuni, D. Cogswell", journal: "Journal of Manufacturing Processes", doi: "10.1016/j.jmapro.2023.01.032", category: "twins" },
  { year: 2023, title: "Effect of stress-states on non-classical twinning in three-point bending of magnesium alloys", authors: "C. Paramatmuni, F.P.E. Dunne", journal: "International Journal of Mechanical Sciences", doi: "10.1016/j.ijmecsci.2023.108574", category: "crystal" },
  { year: 2023, title: "Statistical analyses of the relationship between inclination angle and twin growth in uniaxial compression of Mg alloys", authors: "C. Paramatmuni, A.K. Kanjarla, X. Zeng, D. Guan", journal: "Materials Science and Engineering: A", doi: "10.1016/j.msea.2023.145374", category: "crystal" },
  { year: 2023, title: "An experimental and crystal plasticity investigation of anisotropic compression behaviour of Mg-Sn-Ca alloy", authors: "C. Paramatmuni, A. Bandi, A.K. Kanjarla", journal: "Journal of Alloys and Compounds", doi: "10.1016/j.jallcom.2023.169163", category: "crystal" },
  { year: 2023, title: "Void Nucleation and Growth from Heterophases and the Exploitation of New Toughening Mechanisms in Metals", authors: "Y. Guo, C. Paramatmuni, E. Avcu", journal: "Crystals", doi: "10.3390/cryst13060860", category: "damage" },
  { year: 2022, title: "Guidance for Materials 4.0 to interact with a digital twin", authors: "D. Cogswell, C. Paramatmuni, L. Scotti, J. Moffat", journal: "Data-Centric Engineering", doi: "10.1017/dce.2022.23", category: "twins" },
  { year: 2021, title: "A three-dimensional mechanistic study of the drivers of classical twin nucleation and variant selection in Mg alloys: A mesoscale modelling and experimental study", authors: "C. Paramatmuni, Y. Guo, P.J. Withers, F.P.E. Dunne", journal: "International Journal of Plasticity", doi: "10.1016/j.ijplas.2021.103027", category: "crystal" },
  { year: 2020, title: "Twin nucleation and variant selection in Mg alloys: An integrated crystal plasticity modelling and experimental approach", authors: "C. Paramatmuni, Z. Zheng, W.M. Rainforth, F.P.E. Dunne", journal: "International Journal of Plasticity", doi: "10.1016/j.ijplas.2020.102778", category: "crystal" },
  { year: 2020, title: "Effect of twin crystallographic orientation on deformation and growth in Mg alloy AZ31", authors: "C. Paramatmuni, F.P.E. Dunne", journal: "International Journal of Plasticity", doi: "10.1016/j.ijplas.2020.102775", category: "crystal" },
  { year: 2019, title: "A crystal plasticity FFT based study of deformation twinning, anisotropy and micromechanics in HCP materials: Application to AZ31 alloy", authors: "C. Paramatmuni, A.K. Kanjarla", journal: "International Journal of Plasticity", doi: "10.1016/j.ijplas.2018.10.007", category: "crystal" },
];
