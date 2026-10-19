# Digital Materials & Manufacturing Laboratory (DMM Group)
### Department of Mechanical Engineering | Indian Institute of Technology Palakkad

Official website repository for the **Digital Materials & Manufacturing Laboratory (DMM Group)** led by **Dr. Chaitanya Paramatmuni** at the Indian Institute of Technology Palakkad (IIT Palakkad).

Website: [https://digital-materials-manufacturing-group.github.io/](https://digital-materials-manufacturing-group.github.io/)

---

## About the Research Group

The DMM Group investigates the synergistic intersection of continuum mechanics, experimental micromechanics, and physics-informed computational frameworks. Our primary objective is to advance manufacturing technologies and understand structural integrity under extreme processing and in-service environments.

### Core Research Thrusts
1. **Digital Twins of Manufacturing Processes**: High-fidelity thermo-mechanical representations of extreme hot deformation processes (hammer forging, multi-pass ring rolling), dynamic recrystallization (DRX) kinetics, and real-time process monitoring.
2. **Micromechanics & Crystal Plasticity (CPFE)**: Serial sectioning, 3D grain reconstruction, and non-local crystal plasticity finite element modelling of deformation twinning and variant selection in hexagonal close-packed (HCP) alloys such as Magnesium and Titanium.
3. **Multi-Scale Damage & Geometrically Necessary Dislocations (GND)**: High-resolution electron backscatter diffraction (HR-EBSD) coupled with digital image correlation (DIC) to evaluate Nye dislocation tensors and formulate slip-system-resolved damage indicators.
4. **Constitutive Modelling & Grain Growth Kinetics**: Internal state variable formulations for hot deformation, dynamic recovery, static/meta-dynamic recrystallization, and parent austenite grain reconstruction.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing & SSR/SSG**: [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Data**: [TanStack React Query](https://tanstack.com/query)
- **Testing**: [Vitest](https://vitest.dev/) + React Testing Library
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (version 20 LTS or higher recommended)
- `npm` (comes bundled with Node.js)
- `git`

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone git@github.com:Digital-Materials-Manufacturing-Group/digital-materials-manufacturing-group.github.io.git
   cd digital-materials-manufacturing-group.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) (or the URL displayed in the terminal) in your browser. Changes will hot-reload automatically.

4. **Run unit tests**:
   ```bash
   npm test
   ```

5. **Test a production build locally**:
   ```bash
   npm run build
   npm run preview
   ```

---

## Member Contribution Guidelines

All members of the research group are encouraged to keep their profiles, publication lists, and news announcements up-to-date. The codebase is organized so that common content changes do not require touching complex routing or styling code.

### 1. Updating Member Profiles
Member data is centrally managed in `src/data/people.ts`.

To add or update your profile:
- Open `src/data/people.ts`.
- Locate or append your entry to the `ALL` array conforming to the `Member` interface:
  ```typescript
  {
    name: "Your Full Name",
    role: "Ph.D Research Scholar / MS Research Scholar / M.Tech Student",
    joined: "Month Year",
    email: "rollnumber[at]smail[dot]iitpkd[dot]ac[dot]in",
    profile: "https://iitpkd.ac.in/people/your-id",
    image: "https://url-to-photo or /assets/people/photo.jpg",
    bio: [
      "Paragraph 1 detailing your research focus, prior degrees, and methodology.",
      "Paragraph 2 with academic interests, achievements, and hobbies."
    ]
  }
  ```
- If you have a local photograph, place it under `public/assets/people/` and reference it with `/assets/people/filename.jpg`.

### 2. Adding New Publications
Publications are maintained in `src/data/publications.ts`.

To add an accepted paper:
- Open `src/data/publications.ts`.
- Add an object to the `PUBLICATIONS` list:
  ```typescript
  {
    year: 2026,
    title: "Full Title of the Published Paper",
    authors: "A. Author, B. Author, C. Paramatmuni",
    journal: "Journal Name",
    doi: "10.xxxx/...",
    category: "crystal" // Options: "twins" | "crystal" | "damage" | "constitutive"
  }
  ```

### 3. Adding News & Lab Announcements
The latest announcements (e.g. member arrivals, paper acceptances, conferences) are displayed in the ticker on the homepage:
- Open `src/routes/index.tsx`.
- Look for the `News & Updates` section banner.
- Update the date badge and message text.

### 4. Adding Research Visuals & Graphical Abstracts
High-resolution plates, micrographs, and digital twin schematics can be added to the *Graphical Abstracts & Case Studies* grid in `src/routes/index.tsx`:
- Save images into `public/assets/figures/`.
- Reference the image path and update the caption, simulation domain, and lead scholar in `src/routes/index.tsx`.

---

## Collaborative Git Workflow

To maintain code stability and project history integrity:

1. **Create a Feature Branch**:
   Avoid pushing untested changes directly to `main`.
   ```bash
   git checkout -b feature/update-publications
   ```

2. **Commit with Clear Messages**:
   Follow semantic commit messages:
   - `docs: add 2026 Acta Materialia paper to publications`
   - `feat: add profile for new PhD scholar John Doe`
   - `fix: correct typo in research thrust description`

3. **Format and Test Before Pushing**:
   ```bash
   npm run format
   npm test
   npm run build
   ```

4. **Create a Pull Request**:
   - Push your branch: `git push -u origin feature/update-publications`
   - Open a Pull Request into `main` on GitHub for review.

> [!IMPORTANT]
> **Preserve Git History**: This repository is connected to Lovable. Never force-push (`git push -f`) or squash/rebase commits that have already been published to `origin/main`. Always create new forward commits.

---

## Deployment to GitHub Pages

Deployment is **100% automated** using GitHub Actions:

- **Workflow File**: `.github/workflows/deploy.yml`
- **Trigger**: Every push or merge to the `main` branch.
- **Process**:
  1. Checks out the code and sets up Node.js.
  2. Runs `npm run build` which crawls and prerenders all pages to static HTML.
  3. Generates `.nojekyll` and `404.html` for single-page routing compatibility.
  4. Publishes `.output/public` directly to GitHub Pages.

### Repository Configuration (One-time Setup)
1. Go to repository **Settings** on GitHub.
2. Select **Pages** from the left navigation.
3. Under **Build and deployment** $\rightarrow$ **Source**, choose **GitHub Actions**.

---

## Contact & Inquiries

- **Principal Investigator**: Dr. Chaitanya Paramatmuni
- **Email**: `c.paramatmuni@iitpkd.ac.in`
- **Department**: Department of Mechanical Engineering, IIT Palakkad
- **Institutional Profile**: [IIT Palakkad Faculty Page](https://iitpkd.ac.in/people/cparamatmuni)
- **Google Scholar**: [Dr. Chaitanya Paramatmuni](https://scholar.google.com/citations?user=9bgwMM8AAAAJ&hl=en)
