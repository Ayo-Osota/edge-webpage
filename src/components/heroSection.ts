import heroImage from "../images/hero-image.png";
import blurImage from "../images/blur-effect.svg";
import fullFrontImage from "../images/Full-front.png";
import shelfLeftImage from "../images/shelf-left.png";

export function heroSection() {
  return `
  
    <section aria-label="Hero" class="">
   <div class="container even-columns items-center my-20">
      <img 
        src="${blurImage}" 
        alt="Blur Image" 
        class="absolute left-1/2 -translate-x-1/2 -top-[757px] -z-10"
      >
        <div>
          <h1 class="font-bold text-3xl md:text-[3.2rem] md:leading-normal">
            Deploy Anywhere Perform Everywhere.
          </h1>
          <p class="text-grey text-base md:text-2xl mt-4 mb-6">
            Portable Edge Datacenter for instant infrastructure at the edge of
            connectivity.
          </p>
          <button
            class="cursor-pointer bg-primary hover:bg-primary/80 rounded-2xl p-3 md:p-5 w-full max-w-[305px] text-white font-semibold text-sm font-serif"
          >
            Learn more
          </button>
        </div>
        <img class="max-md:mt-10" src="${heroImage}" alt="Portable Edge Datacenter" />
        </div>

          <div class="section" id="banner">
      <div class="content-fit">
        <div class="title" data-before="PORTABLE EDGE DATACENTER">PORTABLE EDGE DATACENTER</div>
      </div>
      <img src="${shelfLeftImage}" class="decorate" alt="" style="width: 50vw; bottom: 0; right: 0;">
      <img src="${fullFrontImage}" class="decorate" alt="" style="width: 30vw; bottom: 0; left: 0;">
    </div>
      </section>
    `;
}
