import image from "../images/h-bench&edc.png";

export function sliderSection() {
  return `
    <section class="bg-[#071425] text-white pt-10 pb-16 mt-10 mb-20">
        <div class="container">
          <h2 class="font-bold font-serif text-2xl md:text-4xl max-w-[24ch]">
            Everything You Need. Right Where You Need It.
          </h2>
          <p class="text-sm md:text-base mt-4 max-w-[64ch]">
            Explore the internal layout, optimized for power, performance, and
            portability. Smart drawers. Routed wiring. Pre-configured
            connectivity. No guesswork, just deployment.
          </p>

          <div
            class="even-columns bg-primary rounded-2xl px-6 py-8 bg-grey mt-20"
          >
            <div class="bg-[#E0B123] rounded-2xl">
              <img src="${image}" alt="H Bench and Edc" />
            </div>
            <div>
              <h3
                class="font-serif text-xl md:text-3xl font-bold text-grey/90 mt-10"
              >
                Full-Depth Drawer Open with Equipment Packed
              </h3>
              <p class="text-grey/80 text-sm font-medium mt-3">
                A deep, custom-fitted drawer securely holds your gateway, carbon
                fiber poles, bracket, and critical cables. No wasted space, just
                smart, field-ready organization that keeps everything within
                reach and impact-protected during transit.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
}
