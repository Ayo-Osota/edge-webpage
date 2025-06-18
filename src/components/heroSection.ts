import heroImage from "../images/hero-image.png";

export function heroSection() {
  return `
    <div class="container even-columns items-center my-20">
        <div>
          <h1 class="font-bold text-3xl md:text-[3.2rem] md:leading-normal">
            Deploy Anywhere Perform Everywhere.
          </h1>
          <p class="text-grey text-base md:text-2xl mt-4 mb-6">
            Portable Edge Datacenter for instant infrastructure at the edge of
            connectivity.
          </p>
          <button
            class="cursor-pointer bg-primary rounded-2xl p-3 md:p-5 w-full max-w-[305px] text-white font-semibold text-sm font-serif"
          >
            Learn more
          </button>
        </div>
        <img class="max-md:mt-10" src="${heroImage}" alt="Portable Edge Datacenter" />
      </div>
    `;
}
