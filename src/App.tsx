import { useState } from "react";
import svgPaths from "./imports/svg-hzskq2n9f3";
import imgRectangle15 from "figma:asset/5f749e4c249a5ceae578ebf3ea2fd6e7abd07295.png";
import imgRectangle1 from "figma:asset/6843e92f70627173c44e024e1e1daafe9da78560.png";
import imgRectangle2 from "figma:asset/99776b5bae14ae2c3e443207748e48560b01f3b3.png";
import imgRectangle3 from "figma:asset/7def82c45d53f5dd4d1e8240caeeb6a8c3c0dd2e.png";
import { Menu, X } from "lucide-react";
import ProjectPageCms from "./imports/ProjectPageCms";

function Logo() {
  return (
    <div className="relative h-[37px] w-[69px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 37">
        <path d={svgPaths.p71b5480} fill="black" />
      </svg>
      <div className="absolute inset-[42.78%_92.92%_42.34%_6.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <path d={svgPaths.p25068180} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[42.79%_93.93%_41.77%_4.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
          <path d={svgPaths.pf542100} fill="black" />
        </svg>
      </div>
    </div>
  );
}

function Navbar({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-neutral-100">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex h-[110px] items-center justify-between">
          <button onClick={onNavigateHome} className="cursor-pointer hover:opacity-70 transition-opacity">
            <Logo />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 lg:gap-12 items-center">
            <a href="#work" className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[24.867px] text-black hover:opacity-70 transition-opacity">Work</a>
            <a href="#about" className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[24.867px] text-black hover:opacity-70 transition-opacity">About</a>
            <a href="#contact" className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[24.867px] text-black hover:opacity-70 transition-opacity">Contact</a>
            <a href="#other" className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[24.867px] text-black hover:opacity-70 transition-opacity">Other</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <a href="#work" className="font-['Libre_Franklin'] font-bold text-[20px] text-black py-2" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#about" className="font-['Libre_Franklin'] font-bold text-[20px] text-black py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="font-['Libre_Franklin'] font-bold text-[20px] text-black py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#other" className="font-['Libre_Franklin'] font-bold text-[20px] text-black py-2" onClick={() => setMobileMenuOpen(false)}>Other</a>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="w-full mx-auto max-w-[1440px] px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start py-8 lg:py-0">
        <div className="order-2 lg:order-1">
          <h1 className="font-['Afacad'] font-normal text-[32px] sm:text-[48px] lg:text-[69px] text-[#282828] leading-[1.2]">
            Camila · UX/UI Designer · Clarity, empathy, and real user needs Available for freelance projects and team collaborations · Research-based approach
          </h1>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-auto">
          <div className="relative w-full aspect-[606/564] lg:w-[606px] lg:h-[564px] bg-[#c4c4c4] rounded-lg overflow-hidden">
            <img 
              alt="Portfolio showcase" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgRectangle15} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects({ onProjectClick }: { onProjectClick: () => void }) {
  return (
    <div id="work" className="w-full mx-auto max-w-[1440px] px-6 md:px-12">
      <div className="mb-8">
        <h2 className="font-['Libre_Franklin'] font-bold text-[32px] lg:text-[45.063px] text-black mb-6">Projects</h2>
        <div className="h-[2px] w-full bg-black"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <button onClick={onProjectClick} className="text-left group cursor-pointer">
          <h3 className="font-['Afacad'] font-normal text-[24px] lg:text-[30px] text-black mb-6 group-hover:opacity-70 transition-opacity">01. QUIET TABLE</h3>
          <div className="relative aspect-[370/558] w-full rounded-[5px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <img 
              alt="Quiet Table project" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgRectangle1} 
            />
          </div>
        </button>

        <div>
          <h3 className="font-['Afacad'] font-normal text-[24px] lg:text-[30px] text-black mb-6">02 IASSITENCE</h3>
          <div className="relative aspect-[370/558] w-full rounded-[5px] overflow-hidden bg-[#c4c4c4]">
            <img 
              alt="iAssitence project" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgRectangle2} 
            />
          </div>
        </div>

        <div>
          <h3 className="font-['Libre_Franklin'] font-bold text-[24px] lg:text-[30px] text-black mb-6">03 Example</h3>
          <div className="relative aspect-[370/558] w-full rounded-[5px] overflow-hidden bg-[#c4c4c4]">
            <img 
              alt="Example project" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgRectangle3} 
            />
          </div>
        </div>
      </div>

      {/* Plus button - only shown on larger screens */}
      <div className="hidden lg:flex justify-end mt-8">
        <button className="flex items-center justify-center w-[59px] h-[59px] rounded-full border-2 border-[#0B0B0D] hover:bg-black hover:text-white transition-colors">
          <span className="font-['Libre_Franklin'] font-bold text-[30px]">+</span>
        </button>
      </div>
    </div>
  );
}

function AboutMe() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <div id="about" className="w-full mx-auto max-w-[1440px] px-6 md:px-12">
      <div className="mb-8">
        <h2 className="font-['Libre_Franklin'] font-bold text-[32px] lg:text-[45.063px] text-black mb-6">About Me</h2>
        <div className="h-[2px] w-full bg-black"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12">
        <div>
          <p className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[30px] text-black leading-[1.4]">
            I'm a product designer working on various projects on a wide range of clients. My skillset lies on creating branding packages & websites to deliver the full online experience for new and also veteran businesses.
            <br /><br />
            You can often find me creating videos about design over on YouTube, or sharing my thoughts on my podcast, Dialogue With Designers. I'm passionate about giving back and teaching what I know to the next generation of designers.‍
          </p>
        </div>

        <div>
          <h3 className="font-['Libre_Franklin'] font-bold text-[24px] lg:text-[30px] text-black mb-6">Your one stop shop for:</h3>
          
          <div className="space-y-0">
            <div className="border-b-2 border-black">
              <button 
                className="w-full py-6 flex items-center justify-between"
                onClick={() => setExpandedService(expandedService === 1 ? null : 1)}
              >
                <span className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[30px] text-black">①   Branding / Logo</span>
                <svg className="w-[12px] h-[6px] transform transition-transform" style={{ transform: expandedService === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              {expandedService === 1 && (
                <div className="pb-6 font-['Libre_Franklin'] font-bold text-[16px] lg:text-[20px] text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis massa elementum, etiam cras tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis massa elem{" "}
                  <span className="not-italic">Starting at € 2,450</span>
                </div>
              )}
            </div>

            <div className="border-b-2 border-black">
              <button 
                className="w-full py-6 flex items-center justify-between"
                onClick={() => setExpandedService(expandedService === 2 ? null : 2)}
              >
                <span className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[30px] text-black">②   Packaging</span>
                <svg className="w-[12px] h-[6px] transform transition-transform" style={{ transform: expandedService === 2 ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              {expandedService === 2 && (
                <div className="pb-6 font-['Libre_Franklin'] font-bold text-[16px] lg:text-[20px] text-black">
                  Service details coming soon...
                </div>
              )}
            </div>

            <div className="border-b-2 border-black">
              <button 
                className="w-full py-6 flex items-center justify-between"
                onClick={() => setExpandedService(expandedService === 3 ? null : 3)}
              >
                <span className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[30px] text-black">③   Websites</span>
                <svg className="w-[12px] h-[6px] transform transition-transform" style={{ transform: expandedService === 3 ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              {expandedService === 3 && (
                <div className="pb-6 font-['Libre_Franklin'] font-bold text-[16px] lg:text-[20px] text-black">
                  Service details coming soon...
                </div>
              )}
            </div>
          </div>

          {/* Programs marquee */}
          <div className="mt-12 overflow-hidden">
            <div className="font-['Libre_Franklin'] font-bold text-[18px] lg:text-[24px] text-black whitespace-nowrap animate-marquee">
              Photoshop   •   Illustrator   •   Webflow   •   Figma   •   Indesign   •   Premiere Pro   •   Cinema 4D   •   Sketch   •   Photoshop   •   Illustrator   •   Webflow   •   Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div id="contact" className="w-full mx-auto max-w-[1440px] px-6 md:px-12">
      <div className="mb-8">
        <h2 className="font-['Libre_Franklin'] font-bold text-[32px] lg:text-[45.063px] text-black mb-6">Say Hello</h2>
        <div className="h-[2px] w-full bg-black"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12">
        <div>
          <p className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[30px] text-black leading-[1.4] mb-6">
            Looking to start a new project or just want to say hi? Send me an email and I'll do my best to reply within 24 hrs!
          </p>
          <p className="font-['Libre_Franklin'] font-bold text-[20px] lg:text-[30px] text-black leading-[1.4]">
            If contact forms aren't your thing... send me an email at <span className="underline">hello@arnau.design</span>
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="font-['Libre_Franklin'] font-bold text-[20px] text-black mb-3 block">Name *</label>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="flex-1 border-2 border-[#4e4e4e] px-[13px] py-[11px] font-['Libre_Franklin'] font-bold text-[20px] text-[#9f9f9f] placeholder:text-[#9f9f9f] bg-transparent"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="flex-1 border-2 border-[#4e4e4e] px-[13px] py-[11px] font-['Libre_Franklin'] font-bold text-[20px] text-[#9f9f9f] placeholder:text-[#9f9f9f] bg-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-['Libre_Franklin'] font-bold text-[20px] text-black mb-3 block">Inquiry *</label>
              <div className="relative">
                <select className="w-full border-2 border-[#4e4e4e] px-[13px] py-[11px] font-['Libre_Franklin'] font-bold text-[20px] text-[#9f9f9f] bg-transparent appearance-none">
                  <option>Collab/Client</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-[12px] h-[6px] pointer-events-none">
                  <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>

            <div>
              <label className="font-['Libre_Franklin'] font-bold text-[20px] text-black mb-3 block">Email *</label>
              <input 
                type="email" 
                placeholder="hello@arnau.design" 
                className="w-full border-2 border-[#4e4e4e] px-[13px] py-[11px] font-['Libre_Franklin'] font-bold text-[20px] text-[#9f9f9f] placeholder:text-[#9f9f9f] bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="font-['Libre_Franklin'] font-bold text-[20px] text-black mb-3 block">Message *</label>
            <textarea 
              placeholder="Hello..." 
              rows={5}
              className="w-full border-2 border-[#4e4e4e] px-[13px] py-[11px] font-['Libre_Franklin'] font-bold text-[20px] text-[#9f9f9f] placeholder:text-[#9f9f9f] bg-transparent resize-none"
            />
          </div>

          <button className="border-2 border-[#4e4e4e] px-[30px] py-[8px] font-['Libre_Franklin'] font-bold text-[20px] text-black hover:bg-black hover:text-white transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="w-full mx-auto max-w-[1440px] px-6 md:px-12 text-center">
      <h2 className="font-['Libre_Franklin'] font-bold text-[24px] lg:text-[30px] text-black mb-6">Join the Newsletter!</h2>
      <p className="font-['Neue_Haas_Grotesk_Display_Pro'] text-[18px] lg:text-[20px] text-black mb-6 max-w-[427px] mx-auto">
        You'll receive an email every once in a while about new products, courses, and videos!
      </p>
      
      <div className="flex flex-col sm:flex-row max-w-[464px] mx-auto mb-4">
        <input 
          type="email" 
          placeholder="name@example.com" 
          className="flex-1 border-2 border-[#4e4e4e] px-[12px] py-[11px] font-['Libre_Franklin'] font-bold text-[20px] text-[#9f9f9f] placeholder:text-[#9f9f9f] bg-transparent"
        />
        <button className="bg-[#4e4e4e] px-6 py-3 mt-2 sm:mt-0 flex items-center justify-center hover:bg-black transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d="M0 7.70711H14" stroke="white" strokeWidth="2" />
            <path d="M7 0.707107L14 7.70711L7 14.7071" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>
      
      <p className="text-[15px] text-gray-500 max-w-[364px] mx-auto">
        We'll never share your details. See our Privacy Policy
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full mx-auto max-w-[1440px] px-6 md:px-12">
      <div className="h-[2px] w-full bg-black mb-8"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-12">
        <Logo />
        
        <p className="font-['Neue_Haas_Grotesk_Display_Pro'] text-[14.4px] text-gray-500 text-center md:text-left">
          © 2021 Arnau Ros, LLC. All rights reserved.
        </p>
        
        <div className="flex gap-6 items-center">
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
            <svg className="w-[21.6px] h-[21.6px]" fill="none" viewBox="0 0 55 22">
              <path d={svgPaths.p4f5ca80} fill="#111928" />
            </svg>
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
            <svg className="w-[21.6px] h-[21.6px]" fill="none" viewBox="0 0 59 22">
              <path d={svgPaths.p3df1ef80} fill="#111928" />
            </svg>
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Dribbble">
            <svg className="w-[21.6px] h-[21.6px]" fill="none" viewBox="0 0 22 22">
              <path d={svgPaths.p35f07600} fill="#111928" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function LandingPage({ onProjectClick }: { onProjectClick: () => void }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-16 lg:gap-[164px] py-8 lg:py-16">
        <Hero />
        <Projects onProjectClick={onProjectClick} />
        <AboutMe />
        <ContactForm />
        
        {/* Decorative separator */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="h-[14.142px] overflow-hidden">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1459 16">
              <path d={svgPaths.p6051980} stroke="black" strokeWidth="2" />
              <path d={svgPaths.p34488a00} stroke="black" strokeWidth="2" />
              <path d={svgPaths.p160b29c0} stroke="black" strokeWidth="2" />
              <path d={svgPaths.p16a7c440} stroke="black" strokeWidth="2" />
              <path d={svgPaths.p31b1a780} stroke="black" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'project'>('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('project');
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const navigateToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('landing');
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-neutral-100 relative overflow-hidden">
      {/* Landing Page */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          currentPage === 'project' 
            ? '-translate-x-full' 
            : 'translate-x-0'
        }`}
      >
        <LandingPage onProjectClick={navigateToProject} />
      </div>

      {/* Project Page */}
      <div
        className={`fixed inset-0 transition-transform duration-500 ease-in-out ${
          currentPage === 'project' 
            ? 'translate-x-0' 
            : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-auto bg-neutral-100">
          <Navbar onNavigateHome={navigateToHome} />
          <ProjectPageCms />
        </div>
      </div>

      {/* Transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-black/10 z-50 pointer-events-none" />
      )}
    </div>
  );
}
