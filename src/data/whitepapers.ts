export interface Whitepaper {
  id: number;
  title: string;
  description: string;
  available: boolean;
  lastUpdated: string;
  thumbnail: string;
  downloadLink: string;
}

export const whitepapers: Whitepaper[] = [
  {
    id: 1,
    title: "Automotive Manufacturing",
    description: "Gaussian can orchestrate multiple LLM \"experts\" (e.g., quality‑control, maintenance, scheduling) while running a digital twin of the assembly line to raise overall equipment effectiveness. GaussFlow decomposes the high‑level goal \"cut defect rate by 3 % this quarter\" into sub‑tasks such as root‑cause analysis of weld failures, schedule optimization for robot maintenance, and real‑time parameter tuning.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Automotive  Manufacturing.png",
    downloadLink: ""
  },
  {
    id: 2,
    title: "Chemical & Petrochemical Processing",
    description: "In continuous‑flow plants, small parameter drifts cause costly off‑spec batches. Gaussian ingests live sensor feeds (temperatures, pressures, chromatograms) through GaussData, where LLM agents specialized in thermodynamics and process control predict quality deviations minutes in advance. A simulation inside GaussOS models reactor kinetics and heat‑exchange behaviour.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Chemical & Petrochemical Processing.png",
    downloadLink: ""
  },
  {
    id: 3,
    title: "Electric Power Utilities (Smart Grid)",
    description: "The platform builds a digital twin of substations, feeders, and distributed energy resources. GaussFlow coordinates forecasting LLMs (solar, wind, demand) with optimisation LLMs that propose switching plans. GaussOS simulates load‑flow and transient stability to ensure voltage and frequency limits are respected.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Electric Power Utilities (Smart Grid).png",
    downloadLink: ""
  },
  {
    id: 4,
    title: "Oil & Gas Upstream Operations",
    description: "For an offshore field, Gaussian unifies seismic data, well logs, and real‑time drilling telemetry. Reservoir‑modelling LLMs, safety‑compliance LLMs, and cost‑optimisation LLMs debate drilling strategies; GaussOS runs a reservoir and rig‑control simulation to test rate of penetration, mud weighting, and casing programmes.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Oil & Gas Upstream Operations.png",
    downloadLink: ""
  },
  {
    id: 5,
    title: "Logistics & Freight Transportation",
    description: "A multi‑modal logistics provider uses Gaussian to raise fleet productivity. GaussData streams truck telematics, port queue times, and weather; planning LLMs generate optimized route and load plans; compliance LLMs check cabotage and duty regulations. GaussOS simulates traffic and depot constraints to confirm on‑time performance.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Logistics & Freight Transportation.png",
    downloadLink: ""
  },
  {
    id: 6,
    title: "Aviation Maintenance, Repair & Overhaul (MRO)",
    description: "Airlines feed flight‑cycle data, sensor readouts, and maintenance logs into GaussData. Diagnosis LLMs flag potential component failures, while scheduling LLMs slot aircraft into hangar bays. GaussOS hosts a digital twin of airframe systems to verify repair scenarios meet safety margins and turnaround times.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Aviation Maintenance, Repair & Overhaul (MRO).png",
    downloadLink: ""
  },
  {
    id: 7,
    title: "Rail Network Operations",
    description: "Gaussian supervises timetable adherence and asset health across signalling, rolling stock, and track infrastructure. GaussFlow calls route‑planning LLMs, delay‑propagation predictors, and maintenance optimisers; GaussOS simulates network capacity and headway under different dispatch decisions.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Rail Network Operations.png",
    downloadLink: ""
  },
  {
    id: 8,
    title: "Hospital Operations Management",
    description: "Hospitals leverage Gaussian to balance patient flow, staffing, and bed capacity. Admission forecasts, triage notes, and EHR data stream into GaussData; clinical‑pathway LLMs, staffing LLMs, and infection‑control LLMs co‑operate through GaussFlow. A discrete‑event simulation inside GaussOS tests bed allocations and OR schedules.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Hospital Operations Management.png",
    downloadLink: ""
  },
  {
    id: 9,
    title: "Pharmaceutical R&D and Manufacturing",
    description: "Gaussian accelerates drug‑candidate screening and scale‑up. Chemistry LLMs suggest synthesis routes; regulatory LLMs assess compliance risks; manufacturing LLMs optimize batch processes. The platform integrates molecular simulations with production planning to reduce time-to-market while ensuring quality standards.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Pharmaceutical R&D and Manufacturing.png",
    downloadLink: ""
  },
  {
    id: 10,
    title: "Smart City Traffic & Infrastructure Management",
    description: "Municipalities integrate CCTV, IoT sensors, and citizen reports via GaussData. Traffic‑prediction LLMs, emergency‑response LLMs, and sustainability LLMs in GaussFlow issue coordination plans—e.g., adaptive signal timing or detour advisories. GaussOS runs an agent‑based city traffic simulation to vet these interventions.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Smart City Traffic & Infrastructure Management.png",
    downloadLink: ""
  },
  {
    id: 11,
    title: "Precision Agriculture",
    description: "Farmers stream drone imagery, soil sensors, and weather forecasts into GaussData. Agronomy LLMs recommend fertiliser or irrigation regimes; pest‑diagnosis LLMs flag infestations. GaussOS simulates crop growth under suggested inputs, checking yield projections and environmental footprints.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Precision Agriculture.png",
    downloadLink: ""
  },
  {
    id: 12,
    title: "Mining Operations",
    description: "Open‑pit and underground mines use Gaussian to optimise haul‑truck dispatch, drill‑blast designs, and mill throughput. Geology LLMs interpret exploration data; operations LLMs create load‑haul schedules. GaussOS couples a mine‑schedule simulator with equipment‑maintenance models.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Mining Operations.png",
    downloadLink: ""
  },
  {
    id: 13,
    title: "Construction Project Management",
    description: "Gaussian links BIM models, sensor data from wearables, and procurement schedules. Planning LLMs generate task sequences; safety‑compliance LLMs review against standards. GaussOS simulates site logistics and structural load paths, flagging clashes or crane conflicts.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Construction Project Management.png",
    downloadLink: ""
  },
  {
    id: 14,
    title: "Maritime Port & Terminal Operations",
    description: "Ports ingest AIS vessel data, crane telemetry, and yard inventory via GaussData. Berth‑allocation LLMs, crane‑scheduling LLMs, and customs‑clearance LLMs coordinate through GaussFlow. GaussOS simulates quay‑to‑yard workflows to validate turnaround time and resource use.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Maritime Port & Terminal Operations.png",
    downloadLink: ""
  },
  {
    id: 15,
    title: "Retail & E‑Commerce Operations",
    description: "Gaussian merges POS trends, web‑traffic analytics, and supply‑chain status. Demand‑forecasting LLMs, pricing‑strategy LLMs, and inventory‑allocation LLMs devise promotions and replenishment plans. A digital‑twin of fulfilment centres simulates order waves and picker routes inside GaussOS.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Retail & E‑Commerce Operations.png",
    downloadLink: ""
  },
  {
    id: 16,
    title: "Financial Services (Back‑Office & Risk)",
    description: "Banks integrate transaction flows, market feeds, and regulatory rulebooks. Fraud‑detection LLMs, liquidity‑risk LLMs, and compliance LLMs converse via GaussFlow. GaussOS hosts Monte Carlo simulations of liquidity shocks and settlement‑gridlocks to test mitigation steps.",
    available: false,
    lastUpdated: "Coming Soon",
    thumbnail: "/whitepaper/Financial Services (Back‑Office & Risk).png",
    downloadLink: ""
  },
  {
    id: 17,
    title: "Water & Wastewater Treatment",
    description: "Utilities collect SCADA telemetry, lab‑test results, and weather inputs in GaussData. Process‑control LLMs propose aeration or coagulant adjustments; sustainability LLMs evaluate energy and chemical footprints. GaussOS simulates biological‑process dynamics to ensure effluent meets discharge permits.",
    available: true,
    lastUpdated: "Last Updated: June 16, 2025",
    thumbnail: "/whitepaper/Water & Wastewater Treatment.png",
    downloadLink: "https://drive.google.com/uc?export=download&id=1sKFwrFX3pBafcOmlkxkgkmhR1DUqGNwE"
  },
  {
    id: 18,
    title: "Telecommunications Network Management",
    description: "Telcos stream KPI alarms, traffic loads, and power metrics. Fault‑diagnosis LLMs, capacity‑planning LLMs, and energy‑optimisation LLMs collaborate in GaussFlow. A network‑simulation core in GaussOS tests hand‑over and QoS impacts before pushing configurations to eNodeBs or routers.",
    available: true,
    lastUpdated: "Last Updated: June 16, 2025",
    thumbnail: "/whitepaper/Telecommunications Network Management.png",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Y-JObgG5oAwPHQNyYs8TxAAJUCF4eY6f"
  },
  {
    id: 19,
    title: "Tement",
    description: "Telcos stream KPI alarms, traffic loads, and power metrics. Fault‑diagnosis LLMs, capacity‑planning LLMs, and energy‑optimisation LLMs collaborate in GaussFlow. A network‑simulation core in GaussOS tests hand‑over and QoS impacts before pushing configurations to eNodeBs or routers.",
    available: true,
    lastUpdated: "Last Updated: June 16, 2025",
    thumbnail: "/whitepaper/Telecommunications Network Management.png",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Y-JObgG5oAwPHQNyYs8TxAAJUCF4eY6f"
  }
]; 
