import "./style.css";
import { heroSection } from "./components/heroSection.ts";
import { featuresSection } from "./components/features.ts";
import { sliderSection } from "./components/sliderSection.ts";
import { useCaseSection } from "./components/useCase.ts";
import { footer } from "./components/footer.ts";

function renderApp() {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (app) {
    app.innerHTML = `
      ${heroSection()}
      ${featuresSection()}
      ${sliderSection()}
      ${useCaseSection()}
      ${footer()}
    `;
  } else {
    console.error("❌ #app container not found");
  }
}

renderApp();
