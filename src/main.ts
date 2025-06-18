import "./style.css";
import { setupCounter } from "./counter.ts";
import { heroSection } from "./components/heroSection.ts";
import { featuresSection } from "./components/features.ts";
import { sliderSection } from "./components/sliderSection.ts";
import { useCaseSection } from "./components/useCase.ts";
import { footer } from "./components/footer.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    ${heroSection()}
    ${featuresSection()}
    ${sliderSection()}
    ${useCaseSection()}
    ${footer()}
  </main>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
