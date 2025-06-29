export function Navigation() {
  return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg border-b border-cyan-500/30 z-50 transition-all duration-300">
        <div class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <img src="https://www.securicore.ca/assets/images/logo_svgs/Securicore_White.svg" alt="Securicore" class="w-40 mr-2">
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="#home" class="nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200">Home</a>
                    <a href="#about" class="nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200">About</a>
                    <a href="#services" class="nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200">Services</a>
                    <a href="#portfolio" class="nav-link text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-md transition-colors duration-200">Events</a>
                    <div class="relative ml-4 group">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                        <button class="contact-btn px-4 py-2 bg-gradient-to-r from-primary/50 to-primary rounded-lg text-white text-sm font-medium relative z-10 flex items-center justify-center gap-2 transition-all duration-300">
                            <span class="bg-gradient-to-r from-[#313131] to-blue-800 bg-clip-text text-transparent">Contact</span>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation Button -->
                <div class="flex md:hidden">
                    <button id="mobile-menu-button" class="relative w-10 h-10 focus:outline-none group" aria-label="Toggle menu">
                        <div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <span class="block h-0.5 w-5 bg-primary mb-1 transform transition duration-300 ease-in-out" id="line1"></span>
                            <span class="block h-0.5 w-5 bg-primary mb-1 transform transition duration-300 ease-in-out" id="line2"></span>
                            <span class="block h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out" id="line3"></span>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div class="pt-2 pb-4 space-y-1">
                    <a href="#home" class="mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200">Home</a>
                    <a href="#about" class="mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200">About</a>
                    <a href="#services" class="mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200">Services</a>
                    <a href="#portfolio" class="mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200">Events</a>
                    
                    <div class="px-4 pt-2">
                        <button class="contact-btn w-full px-4 py-2 bg-gradient-to-r from-primary/50 to-primary rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                            <span class="bg-gradient-to-r from-[#313131] to-blue-800 bg-clip-text text-transparent">Contact</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  `;
}
