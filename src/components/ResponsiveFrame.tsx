export function ResponsiveFrame() {
  return (
    <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto py-8 md:py-12">
      <div className="relative">
        {/* Decorative vertical line - hidden on mobile */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-black"></div>
        
        <div className="lg:pl-12 space-y-8">
          <p className="font-['Red_Hat_Mono'] font-bold text-[24px] md:text-[28px] lg:text-[32px] text-black">OBJECTIVE</p>
          
          <h2 className="font-['Libre_Franklin'] font-bold text-[32px] sm:text-[48px] lg:text-[64px] text-black leading-tight tracking-tight max-w-[582px]">
            The hidden friction of remote work in cafés
          </h2>
          
          <div className="font-['Libre_Franklin'] font-bold text-[18px] sm:text-[20px] lg:text-[24px] text-black leading-[1.8] tracking-tight max-w-[600px] space-y-4">
            <p>In Berlin, many cafés discourage long laptop use, customers stay for hours but only order one drink.</p>
            <p>This creates silent tension between cafés and remote workers, who waste time searching for places that won't turn them away.</p>
            <p>Quiet Table solves this by showing which cafés welcome remote work, what the minimum spend is, and lets users reserve a seat with confidence</p>
          </div>
          
          {/* Side label - hidden on mobile */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="rotate-[-90deg]">
              <p className="font-['DM_Mono'] text-[22px] text-black whitespace-nowrap">QUIET TABLE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
