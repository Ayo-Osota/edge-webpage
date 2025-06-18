import type { IFeatureItem } from "../interface";

const featureItems: IFeatureItem[] = [
  {
    id: "1",
    title: "Compact & Airline-Ready",
    description: "Built in a 4U rolling case for solo deployment.",
    icon: "✅",
  },
  {
    id: "2",
    title: "Signal Elevation Ready",
    description: "Integrated poles for signal optimization in any terrain.",
    icon: "📶",
  },
  {
    id: "3",
    title: "Tool-Free Setup",
    description: "Fully deploy in minutes, not hours.",
    icon: "🚀",
  },
  {
    id: "4",
    title: "Pre-Wired & Cloud-Ready",
    description: "Clean internal layout for fast cloud deployment.",
    icon: "🔌",
  },
];

function mapFeatures(items: IFeatureItem[]) {
  return items.map(
    ({ id, icon, title, description }) => `
    <li
      key="${id}"
      class="bg-white border border-grey/20 rounded-2xl py-10 px-6"
      role="group" 
      aria-label="Feature: Tool-Free Setup"
    >
      <span class="text-2xl md:text-4xl">${icon}</span>
      <h3 class="font-serif font-medium text-xl md:text-4xl text-grey/90 mt-4">
        ${title}
      </h3>
      <p class="text-base md:text-lg text-grey/80 mt-2">
        ${description}
      </p>
    </li>
  `
  );
}

export function featuresSection() {
  return `
    <section class="container my-20">
        <h2 class="font-bold text-3xl md:text-[3.5rem] text-grey">
          Key features
        </h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
            ${mapFeatures(featureItems).join("")}
        </ul>
      </section>
  `;
}
