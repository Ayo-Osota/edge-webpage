import "./style.css";
import { heroSection } from "./components/heroSection.ts";
import { featuresSection } from "./components/features.ts";
import { sliderSection } from "./components/sliderSection.ts";
import { useCaseSection } from "./components/useCase.ts";
import { footer } from "./components/footer.ts";
import { Navigation } from "./components/nav.ts";
import { team } from "./components/team.ts";

function renderApp() {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (app) {
    app.innerHTML = `
      ${Navigation()}
      ${heroSection()}
      ${featuresSection()}
      ${sliderSection()}
      ${useCaseSection()}
      ${team()}
      ${footer()}
    `;
  } else {
    console.error("❌ #app container not found");
  }
}

renderApp();
