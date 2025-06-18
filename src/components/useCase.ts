import type { IUseCase } from "../interface";

const useCases: IUseCase[] = [
  {
    id: "1",
    title: "Emergency Response & Disaster Relief",
    description:
      "Set up reliable edge connectivity in disaster zones within minutes. Whether it’s powering communication tools for first responders or running secure field systems, this kit thrives where speed and mobility matter most.",
  },
  {
    id: "2",
    title: "Remote Construction Sites",
    description:
      "Bring on-site data collection, communications, and live sync to projects happening far from infrastructure. Stay connected with HQ, manage workflows in real-time, and ensure security on the ground.",
  },
  {
    id: "3",
    title: "Mobile Command Centers & Field Ops",
    description:
      "Deploy edge compute and connectivity anywhere—from desert to jungle. Whether military, NGO, or field engineering, this kit provides a fully portable, mission-critical network backbone.",
  },
  {
    id: "4",
    title: "Executive Demos & Boardroom Deployments",
    description:
      "Make an impression with live edge stack demos that just work. Perfect for roadshows, private product launches, or temporary enterprise installations, no IT team required.",
  },
];

function mapUseCases(items: IUseCase[]) {
  return items.map(
    (item) => `
        <li
        class="bg-white border-[0.3px] border-grey/20 rounded-2xl py-10 px-6"
        >
        <h3 class="font-serif font-medium text-xl md:text-4xl text-grey/90">
            ${item.title}
        </h3>
        <p class="text-base md:text-lg text-grey/80 mt-2">
            ${item.description}
        </p>
        </li>
    `
  );
}

export function useCaseSection() {
  return `
    <section  aria-labelledby="use-cases-heading" class="container my-20">
    <div class="flex max-md:flex-col justify-between items-center">
        <h2 id="use-cases-heading" class="font-bold text-2xl md:text-[3.5rem] text-grey">
          Use Cases
        </h2>
         <button
            class="cursor-pointer bg-primary rounded-2xl p-3 md:p-5 w-full max-w-[305px] text-white font-semibold text-sm font-serif max-md:mt-5"
          >
            Talk to an expert
          </button>
        </div>
        <ul role="list" aria-label="Use case examples" class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
            ${mapUseCases(useCases).join("")}
        </ul>
      </section>
  `;
}
