import svgPaths from "./svg-3hwkq9csu5";
import imgProjectImage02 from "figma:asset/afa195644aae89396b7557f4681a6c0e1c5811f2.png";
import imgEllipse2 from "figma:asset/d217f868aeaf0a0a185ab07ac48b7fa4a2216de4.png";
import imgProjectImage04 from "figma:asset/d346736d4adc3dd844652db81c35fa022ed8c0f2.png";
import imgRectangle29 from "figma:asset/b74627503bfe2b76124c09fe232d1d2440eb6fdb.png";

function Group() {
  return (
    <div className="absolute inset-[33.64%_91.81%_32.73%_3.4%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 37">
        <g id="Group">
          <path d={svgPaths.p71b5480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[42.78%_92.92%_42.34%_6.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
        <g id="Group">
          <path d={svgPaths.p25068180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[42.79%_93.93%_41.77%_4.56%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
        <g id="Group">
          <path d={svgPaths.pf542100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[42.78%_92.92%_41.77%_4.56%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents inset-[33.64%_91.81%_32.73%_3.4%]" data-name="logo">
      <Group />
      <Group3 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute contents inset-[33.64%_7.08%_23.64%_3.4%]" data-name="Content">
      <Logo />
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_27.5%_37.64%_68.61%] leading-[normal] text-[24.867px] text-black">Work</p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_21.11%_37.64%_74.4%] leading-[normal] text-[24.867px] text-black">About</p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_13.3%_37.64%_80.78%] leading-[normal] text-[24.867px] text-black">Contact</p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_7.08%_37.64%_88.6%] leading-[normal] text-[24.867px] text-black">Other</p>
      <div className="absolute inset-[76.36%_26.94%_23.64%_68.19%]" data-name="hover line">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 2">
            <line id="hover line" stroke="var(--stroke-0, black)" strokeWidth="2" x2="70" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectName() {
  return (
    <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto" data-name="Project name">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
        <h1 className="font-['Libre_Franklin'] font-bold text-[32px] sm:text-[38px] lg:text-[45.063px] text-black leading-normal">
          Quiet Table
        </h1>
        <p className="font-['Libre_Franklin'] font-semibold text-[20px] sm:text-[24px] lg:text-[30px] text-black leading-[1.5] lg:w-[618px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna feugiat maecenas eu imperdiet varius nec pulvinar sem ultrices. Adipiscing viverra mauris, nunc nisl sociis dui. Sagittis, curabitur libero urna interdum metus.
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto py-8 md:py-12 relative" data-name="Frame">
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-black"></div>
      <p className="font-['Red_Hat_Mono'] font-bold text-[24px] md:text-[28px] lg:text-[32px] text-black mb-8 lg:pl-12">OBJECTIVE</p>
      <h2 className="font-['Libre_Franklin'] font-bold text-[32px] sm:text-[48px] lg:text-[64px] text-black leading-tight tracking-tight max-w-[582px] mb-8 lg:pl-12">The hidden friction of remote work in cafés</h2>
      <div className="font-['Libre_Franklin'] font-bold text-[18px] sm:text-[20px] lg:text-[24px] text-black leading-[1.8] tracking-tight max-w-[600px] space-y-4 lg:pl-12">
        <p className="mb-0">{`In Berlin, many cafés discourage long laptop use, customers stay for hours but only order one drink. `}</p>
        <p className="mb-0">{`This creates silent tension between cafés and remote workers, who waste time searching for places that won’t turn them away. `}</p>
        <p>Quiet Table solves this by showing which cafés welcome remote work, what the minimum spend is, and lets users reserve a seat with confidence</p>
      </div>
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rotate-[-90deg]">
          <p className="font-['DM_Mono'] text-[22px] text-black whitespace-nowrap">QUIET TABLE</p>
        </div>
      </div>
    </div>
  );
}

function Two() {
  return (
    <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto" data-name="Two">
      <div className="relative w-full aspect-[788/623] bg-[#c4c4c4] rounded-lg overflow-hidden" data-name="Project Image02">
        <img alt="Project detail" className="absolute inset-0 w-full h-full object-cover" src={imgProjectImage02} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      <h3 className="font-['Libre_Franklin'] font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-black tracking-tight">
        {`Café Owner Insights: `}
      </h3>
      <div className="font-['Libre_Franklin'] text-[18px] sm:text-[24px] lg:text-[30px] text-black leading-[1.5] space-y-3">
        <p className="mb-0 font-normal">{`• 	“They come in with laptops, stay for hours, and buy one coffee.” `}</p>
        <p className="mb-0 font-normal">{`• 	“I don’t want to kick them out, but it’s not sustainable.” `}</p>
        <p className="mb-0 not-italic font-normal">{`• 	“If they understood how much I rely on turnover, it’d be easier.” `}</p>
        <p className="mb-0 font-normal">{`• 	“I’d love to set a minimum spend. Just to keep things fair.” `}</p>
        <p className="font-normal">{`• 	“I don’t mind remote workers, as long as there’s a clear agreement.”`}</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      <h3 className="font-['Libre_Franklin'] font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-black tracking-tight">
        {`Remote Worker Insights: `}
      </h3>
      <div className="font-['Libre_Franklin'] text-[18px] sm:text-[24px] lg:text-[30px] text-black leading-[1.5] space-y-3">
        <p className="mb-0 font-normal">{`• 	“I feel guilty if I don’t order much, but I can’t always afford more.” `}</p>
        <p className="mb-0 font-normal">{`• 	“I never know if cafés are okay with me working there . I just guess.” `}</p>
        <p className="mb-0 font-normal">{`• 	“I look for places with good energy, Wi-Fi, and outlets.” `}</p>
        <p className="mb-0 font-normal">{`• 	“If the vibe is off, I can’t focus.” `}</p>
        <p className="font-normal">{`• 	“Having a reservation would make me feel like I belong.”`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      <h3 className="font-['Libre_Franklin'] font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-black tracking-tight">
        {`Cross-Insight Takeaway: `}
      </h3>
      <div className="font-['Libre_Franklin'] text-[18px] sm:text-[24px] lg:text-[30px] text-black leading-[1.5] space-y-3">
        <p className="mb-0 font-normal">{`Lack of communication creates silent friction. `}</p>
        <p className="mb-0 whitespace-pre-wrap font-normal">{`• 	Both sides want the same thing: clarity, respect, and mutual benefit. `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="w-full max-w-[1216px] mx-auto space-y-12 md:space-y-16 lg:space-y-[88px]">
      <Frame10 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto py-8 md:py-12 relative" data-name="Frame">
      <Frame11 />
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-black"></div>
      <p className="font-['Red_Hat_Mono'] font-bold text-[24px] md:text-[28px] lg:text-[32px] text-black mb-8 lg:pl-12">KEY FINDINGS</p>
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rotate-[-90deg]">
          <p className="font-['DM_Mono'] text-[22px] text-black whitespace-nowrap">QUIET TABLE</p>
        </div>
      </div>
    </div>
  );
}

function Images() {
  return (
    <div className="w-full space-y-12 md:space-y-16" data-name="Images">
      <Frame />
      <Two />
      <Frame1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="w-full max-w-[792px] px-6 md:px-0 font-['Libre_Franklin'] font-bold text-[24px] sm:text-[28px] lg:text-[30px] text-black tracking-tight space-y-8">
      <div className="space-y-2">
        <p className="mb-0">Lucas</p>
        <p className="mb-0">{`Age: 31 `}</p>
        <p>Occupation: Freelance UX/UI designer</p>
      </div>
      <div className="space-y-3 leading-[1.4]">
        <p className="mb-0">{`HABITS: Works from cafés 3–4 times a week `}</p>
        <div className="h-4"></div>
        <p className="mb-0">FRUSTATIONS:</p>
        <p className="mb-0">{`Wastes time searching for cafés where she can use her laptop without bothering anyone `}</p>
        <p className="mb-0">{`Feels uncomfortable staying long after ordering just one coffee `}</p>
        <p className="mb-0">Never knows if she’ll be welcomed or turned away</p>
        <div className="h-4"></div>
        <p className="mb-0">GOALS:</p>
        <p className="mb-0">{`Find spaces that support remote work `}</p>
        <p className="mb-0">{`Know the minimum spend required before arriving `}</p>
        <p className="mb-0">{`Feel calm, focused, and truly welcome `}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto py-8 md:py-12 relative" data-name="Frame">
      <div className="hidden lg:block absolute right-0 top-[113.8px] w-[216.556px] h-[217.201px]">
        
      </div>
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-black"></div>
      <div className="hidden"></div>
      <h2 className="font-['Libre_Franklin'] font-semibold text-[48px] sm:text-[72px] lg:text-[96px] text-black tracking-tight leading-tight mb-12">{`Who needs Quiet Table? `}</h2>
      <Frame12 />
      
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rotate-[-90deg]">
          <p className="font-['DM_Mono'] text-[22px] text-black whitespace-nowrap">QUIET TABLE</p>
        </div>
      </div>
    </div>
  );
}

function MoreProjects() {
  return (
    <div className="w-full" data-name="More Projects">
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] h-[177px] items-start relative shrink-0 w-[396px]">
      <div className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <p className="leading-[normal]">{`Users check if the café's details match what they are looking for`}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1387)" id="Icon">
          <path d={svgPaths.p25dde800} id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
        </g>
        <defs>
          <clipPath id="clip0_1_1387">
            <rect fill="white" height="19.9946" width="19.9946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(157,149,149,0.82)] box-border content-stretch flex items-center justify-center left-[375px] rounded-[6.2775e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[39.989px] top-[84.02px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[23.97px] items-start left-[19.99px] top-[17.02px] w-[305.011px]" data-name="Heading 1">
      <p className="basis-0 font-['Poppins:Bold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[16px]">The Cozy Corner</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1404)" id="Icon">
          <path d={svgPaths.p214c100} id="Vector" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33249" />
          <path d={svgPaths.p3a696b00} id="Vector_2" stroke="var(--stroke-0, #2D2D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33249" />
        </g>
        <defs>
          <clipPath id="clip0_1_1404">
            <rect fill="white" height="15.9898" width="15.9898" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[14px] relative shrink-0 w-[74px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[74px]">
        <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#2d2d2d] text-[14px] text-nowrap top-[-2.87px] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          300m away
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.993px] h-[20px] items-center relative w-[96px]">
        <Icon1 />
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[19.995px] items-center left-[19.99px] top-[52.98px] w-[305.011px]" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(179,180,175,0.77)] h-[90px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[11.985px] h-[90px] items-start pb-0 pt-[19.995px] px-[19.995px] relative w-full">
          <Heading />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center relative">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="star-01">
          <div className="absolute inset-[10.96%_10.73%_14.16%_10.73%]" data-name="Icon">
            <div className="absolute inset-[-4.65%_-4.43%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
                <path d={svgPaths.p21b2e900} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#808962] relative rounded-[20px] shrink-0 size-[39.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[39.989px]">
        <Frame5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[22.801px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold grow leading-[22.8px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[15.2px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Reviews
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1344)" id="Icon">
          <path d={svgPaths.p17597f00} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33249" />
        </g>
        <defs>
          <clipPath id="clip0_1_1344">
            <rect fill="white" height="15.9898" width="15.9898" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <Icon2 />
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#161414] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        4.8
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[40.779px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.988px] h-[40.779px] items-start relative w-full">
        <Heading2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[11.985px] h-[40.779px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(179,180,175,0.77)] h-[72.758px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[72.758px] items-start pb-0 pt-[15.99px] px-[15.99px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1347)" id="Icon">
          <path d="M9.99731 1.66622V18.3284" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d={svgPaths.p2098b900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
        </g>
        <defs>
          <clipPath id="clip0_1_1347">
            <rect fill="white" height="19.9946" width="19.9946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#808962] relative rounded-[20px] shrink-0 size-[39.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[39.989px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[22.801px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold grow leading-[22.8px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[15.2px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Minimum spend
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#161414] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $5 per hour
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[40.779px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.988px] h-[40.779px] items-start relative w-full">
        <Heading3 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[11.985px] h-[40.779px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(179,180,175,0.77)] h-[72.758px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[72.758px] items-start pb-0 pt-[15.99px] px-[15.99px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1394)" id="Icon">
          <path d="M9.99731 16.6622H10.0056" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d={svgPaths.p7823400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d={svgPaths.p2e8d1d00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d={svgPaths.p16690140} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
        </g>
        <defs>
          <clipPath id="clip0_1_1394">
            <rect fill="white" height="19.9946" width="19.9946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#808962] relative rounded-[20px] shrink-0 size-[39.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[39.989px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[22.801px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold grow leading-[22.8px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[15.2px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        WiFi available
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        High-speed connection
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[40.779px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.988px] h-[40.779px] items-start relative w-full">
        <Heading4 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[11.985px] h-[40.779px] items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(179,180,175,0.77)] h-[72.758px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[72.758px] items-start pb-0 pt-[15.99px] px-[15.99px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1382)" id="Icon">
          <path d={svgPaths.p32e88200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
        </g>
        <defs>
          <clipPath id="clip0_1_1382">
            <rect fill="white" height="19.9946" width="19.9946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#808962] relative rounded-[20px] shrink-0 size-[39.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[39.989px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[22.801px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold grow leading-[22.8px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[15.2px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Power outlets
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Plenty of charging stations
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[40.779px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.988px] h-[40.779px] items-start relative w-full">
        <Heading5 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[11.985px] h-[40.779px] items-center relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(179,180,175,0.77)] h-[72.758px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[72.758px] items-start pb-0 pt-[15.99px] px-[15.99px] relative w-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[9.997px] h-[283px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container10 />
      <Container14 />
      <Container18 />
    </div>
  );
}

function CardCafeDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[46px] items-start left-[50px] top-[194px] w-[345px]" data-name="Card Cafe Details">
      <Container2 />
      <Container19 />
    </div>
  );
}

function CafeDetailsScreen() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[96px] items-start left-0 pb-0 pt-[23.999px] px-[15.99px] top-[670.99px] w-[440px]" data-name="CafeDetailsScreen">
      <div className="absolute bg-[#808962] box-border content-stretch flex gap-[10px] items-end justify-center left-1/2 px-[123px] py-px rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[328px]" data-name="Reserve your spot button">
        <div className="flex flex-col font-['Nunito_Sans:SemiBold',sans-serif] font-semibold h-[41px] justify-center leading-[5px] relative shrink-0 text-[#f0eded] text-[14px] w-[123px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="mb-0">Reserve your spot</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-8.33%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
            <path d={svgPaths.p2d863a00} id="Vector" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-3.95%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
            <path d={svgPaths.p31165f40} id="Vector" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f5f2ed] h-[35.955px] left-[40.69px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container20 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_66.67%_75%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-18.75%_-0.62px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.624832 0.624832V3.95817" id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_75%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-18.75%_-0.62px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.624832 0.624832V3.95817" id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4.167%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p263dab00} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.62px_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
            <path d="M0.624832 0.624832H15.6208" id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[35.955px] left-[146.07px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container21 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.41%_-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.p1addf300} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[35.955px] left-[251.45px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container22 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
            <path d={svgPaths.p4bb3e80} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-9.37%_-9.37%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.pee156f0} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[35.955px] left-[356.83px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[59.925px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-[852px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-[441px]">
      <div className="h-[852px] overflow-clip relative rounded-[inherit] w-[441px]">
        <div className="absolute content-stretch flex gap-[39px] items-center justify-center left-[2px] top-0 w-[442px]" data-name="Nav Tab">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#020202] text-[15px] text-nowrap tracking-[-0.32px] whitespace-pre">9:41</p>
          <div className="h-[30px] relative shrink-0 w-[219px]" data-name="notch">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 30">
              <g id="notch">
                <path d={svgPaths.p2458ee70} fill="var(--fill-0, #020202)" />
                <path d={svgPaths.p2458ee70} fill="var(--fill-0, #020202)" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="iOS / icon / status-bar">
            <div className="h-[16px] relative shrink-0 w-[20px]" data-name="iOS / icon / small / Mobile Signal">
              <div className="absolute h-[10.667px] left-[calc(50%-0.5px)] top-[calc(50%+0.333px)] translate-x-[-50%] translate-y-[-50%] w-[17px]" data-name="icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
                  <path d={svgPaths.p2009b500} fill="var(--fill-0, #020202)" id="icon" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[16px]" data-name="iOS / icon / small / Wifi">
              <div className="absolute h-[10.966px] left-[calc(50%-0.014px)] top-[calc(50%+0.483px)] translate-x-[-50%] translate-y-[-50%] w-[15.273px]" data-name="icon">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(2, 2, 2, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
                    <path d={svgPaths.p8704500} fill="var(--fill-0, #020202)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[16px] overflow-clip relative shrink-0 w-[25px]" data-name="iOS / icon / small / battery">
              <div className="absolute h-[11.333px] left-[calc(50%-0.5px)] top-[calc(50%-0.333px)] translate-x-[-50%] translate-y-[-50%] w-[22px]" data-name="outline border">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
                  <path d={svgPaths.p7e6b880} id="outline border" opacity="0.35" stroke="var(--stroke-0, #020202)" />
                </svg>
              </div>
              <div className="absolute h-[4px] left-[calc(50%+12.164px)] top-[calc(50%-0.333px)] translate-x-[-50%] translate-y-[-50%] w-[1.328px]" data-name="node">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
                  <path d={svgPaths.p32d253c0} fill="var(--fill-0, #020202)" id="node" opacity="0.4" />
                </svg>
              </div>
              <div className="absolute h-[7.333px] left-[calc(50%-0.5px)] top-[calc(50%-0.333px)] translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="charge">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8">
                  <path d={svgPaths.p3544af00} fill="var(--fill-0, #020202)" id="charge" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(157,149,149,0.82)] left-[32.66px] rounded-[6.2775e+07px] size-[40px] top-[77.34px]" data-name="icon / android / 24 / chevron-left">
          <div className="absolute bottom-1/4 left-[33.33%] right-[35.79%] top-1/4" data-name="↳Color">
            <div className="absolute inset-[-5.9%_-9.56%]" style={{ "--fill-0": "rgba(45, 45, 45, 1)", "--stroke-0": "rgba(151, 151, 151, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 23">
                <path clipRule="evenodd" d={svgPaths.pba77800} fill="var(--fill-0, #2D2D2D)" fillRule="evenodd" id=" â³Color" stroke="var(--stroke-0, #979797)" strokeWidth="1.67" />
              </svg>
            </div>
          </div>
        </div>
        <Button />
        <CardCafeDetails />
        <CafeDetailsScreen />
        <div className="absolute bg-white box-border content-stretch flex flex-col h-[61.796px] items-start left-[-1.52px] pb-0 pt-[1.871px] px-0 top-[790.2px] w-[441.519px]" data-name="BottomNavigation">
          <div aria-hidden="true" className="absolute border-[1.871px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
          <Container24 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[9px] border-solid inset-[-9px] pointer-events-none rounded-bl-[25px] rounded-br-[25px] rounded-tl-[29px] rounded-tr-[29px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[167.879px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute h-[30px] left-[calc(50%+4.241px)] top-0 translate-x-[-50%] w-[219px]" data-name="notch">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 30">
          <g id="notch">
            <path d={svgPaths.p2458ee70} fill="var(--fill-0, #020202)" />
            <path d={svgPaths.p2458ee70} fill="var(--fill-0, #020202)" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[21px] left-[32.22px] not-italic text-[#020202] text-[15px] text-nowrap top-[15px] tracking-[-0.32px] whitespace-pre">9:41</p>
      <div className="absolute content-stretch flex gap-[2px] items-start right-[15.99px] top-[17.5px]" data-name="iOS / icon / status-bar">
        <div className="h-[16px] relative shrink-0 w-[20px]" data-name="iOS / icon / small / Mobile Signal">
          <div className="absolute h-[10.667px] left-[calc(50%-0.5px)] top-[calc(50%+0.333px)] translate-x-[-50%] translate-y-[-50%] w-[17px]" data-name="icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
              <path d={svgPaths.p2009b500} fill="var(--fill-0, #020202)" id="icon" />
            </svg>
          </div>
        </div>
        <div className="relative shrink-0 size-[16px]" data-name="iOS / icon / small / Wifi">
          <div className="absolute h-[10.966px] left-[calc(50%-0.014px)] top-[calc(50%+0.483px)] translate-x-[-50%] translate-y-[-50%] w-[15.273px]" data-name="icon">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(2, 2, 2, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
                <path d={svgPaths.p8704500} fill="var(--fill-0, #020202)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[16px] overflow-clip relative shrink-0 w-[25px]" data-name="iOS / icon / small / battery">
          <div className="absolute h-[11.333px] left-[calc(50%-0.5px)] top-[calc(50%-0.333px)] translate-x-[-50%] translate-y-[-50%] w-[22px]" data-name="outline border">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
              <path d={svgPaths.p7e6b880} id="outline border" opacity="0.35" stroke="var(--stroke-0, #020202)" />
            </svg>
          </div>
          <div className="absolute h-[4px] left-[calc(50%+12.164px)] top-[calc(50%-0.333px)] translate-x-[-50%] translate-y-[-50%] w-[1.328px]" data-name="node">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
              <path d={svgPaths.p32d253c0} fill="var(--fill-0, #020202)" id="node" opacity="0.4" />
            </svg>
          </div>
          <div className="absolute h-[7.333px] left-[calc(50%-0.5px)] top-[calc(50%-0.333px)] translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="charge">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8">
              <path d={svgPaths.p3544af00} fill="var(--fill-0, #020202)" id="charge" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(157,149,149,0.82)] left-[24.22px] rounded-[6.2775e+07px] size-[40px] top-[83.94px]" data-name="icon / android / 24 / chevron-left">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.79%] top-1/4" data-name="↳Color">
          <div className="absolute inset-[-5.9%_-9.56%]" style={{ "--fill-0": "rgba(45, 45, 45, 1)", "--stroke-0": "rgba(151, 151, 151, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 23">
              <path clipRule="evenodd" d={svgPaths.pba77800} fill="var(--fill-0, #2D2D2D)" fillRule="evenodd" id=" â³Color" stroke="var(--stroke-0, #979797)" strokeWidth="1.67" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[23.97px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="basis-0 font-['Poppins:Bold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[20px]">Let’s get you a table</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23.97px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#858585] text-[16px] top-[-1px] w-[137px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        at The Cozy Corner
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[380px]">
      <Heading6 />
      <Paragraph4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[517.522px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[31.98px] h-[517.522px] items-start px-[15.99px] py-0 relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function TableReservationScreen() {
  return (
    <div className="absolute bg-[#faf9f6] content-stretch flex flex-col items-start left-0 rounded-[20px] top-0 w-[441.519px]" data-name="TableReservationScreen">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-8.33%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
            <path d={svgPaths.p2d863a00} id="Vector" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-3.95%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
            <path d={svgPaths.p31165f40} id="Vector" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#f5f2ed] h-[35.955px] left-[40.69px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container27 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_66.67%_75%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-18.75%_-0.62px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.624832 0.624832V3.95817" id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_75%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-18.75%_-0.62px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.624832 0.624832V3.95817" id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4.167%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p263dab00} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.62px_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
            <path d="M0.624832 0.624832H15.6208" id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[35.955px] left-[146.07px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container28 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.41%_-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.p1addf300} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[35.955px] left-[251.45px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container29 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[19.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
            <path d={svgPaths.p4bb3e80} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-9.37%_-9.37%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.pee156f0} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.98px] size-[19.995px] top-[7.98px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[35.955px] left-[356.83px] rounded-[16px] top-[11.98px] w-[43.965px]" data-name="Button">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[59.925px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1309)" id="Icon">
          <path d="M6.66487 1.66622V4.99865" id="Vector" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d="M13.3297 1.66622V4.99865" id="Vector_2" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d={svgPaths.p18a4b4f0} id="Vector_3" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d="M2.49933 8.33109H17.4953" id="Vector_4" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
        </g>
        <defs>
          <clipPath id="clip0_1_1309">
            <rect fill="white" height="19.9946" width="19.9946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.97px] relative shrink-0 w-[90.794px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.97px] items-start relative w-[90.794px]">
        <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2d2d2d] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Date & Time`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[7.98px] h-[23.97px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <Heading1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        mié
      </p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">15</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[61.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#808962] box-border content-stretch flex flex-col h-[85.942px] items-start left-0 pb-0 pt-[11.985px] px-[15.99px] rounded-[16px] top-0 w-[51.419px]" data-name="Button">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        jue
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center text-nowrap whitespace-pre">16</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[61.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[85.942px] items-start left-[59.4px] pb-0 pt-[11.985px] px-[15.99px] rounded-[16px] top-0 w-[50.016px]" data-name="Button">
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#2d2d2d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        vie
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center text-nowrap whitespace-pre">17</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#2d2d2d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[61.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[85.942px] items-start left-[117.39px] pb-0 pt-[11.985px] px-[15.99px] rounded-[16px] top-0 w-[48.408px]" data-name="Button">
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#2d2d2d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        sáb
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center text-nowrap whitespace-pre">18</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[61.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[85.942px] items-start left-[173.78px] pb-0 pt-[11.985px] px-[15.99px] rounded-[16px] top-0 w-[51.097px]" data-name="Button">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#2d2d2d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        dom
      </p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center">19</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[61.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[85.942px] items-start left-[232.86px] pb-0 pt-[11.985px] px-[15.99px] rounded-[16px] top-0 w-[55.921px]" data-name="Button">
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        lun
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[61.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[85.942px] items-start left-[296.76px] pb-0 pt-[11.985px] px-[15.99px] rounded-[16px] top-0 w-[53.962px]" data-name="Button">
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#2d2d2d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        mar
      </p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center">21</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[61.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[85.942px] items-start left-[358.7px] pb-0 pt-[11.985px] px-[15.99px] rounded-[16px] top-0 w-[52.91px]" data-name="Button">
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[93.922px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        09:00
      </p>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-0 pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-0 w-[129.848px]" data-name="Button">
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        10:00
      </p>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-[139.84px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-0 w-[129.848px]" data-name="Button">
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        11:00
      </p>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-[279.69px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-0 w-[129.848px]" data-name="Button">
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        12:00
      </p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-0 pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[57.94px] w-[129.848px]" data-name="Button">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[14.4px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        13:00
      </p>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[#808962] box-border content-stretch flex flex-col h-[47.94px] items-start left-[139.84px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[57.94px] w-[129.848px]" data-name="Button">
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        14:00
      </p>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-[279.69px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[57.94px] w-[129.848px]" data-name="Button">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        15:00
      </p>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-0 pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[115.88px] w-[129.848px]" data-name="Button">
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        16:00
      </p>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-[139.84px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[115.88px] w-[129.848px]" data-name="Button">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        17:00
      </p>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-[279.69px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[115.88px] w-[129.848px]" data-name="Button">
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        18:00
      </p>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-0 pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[173.81px] w-[129.848px]" data-name="Button">
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19:00
      </p>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-[139.84px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[173.81px] w-[129.848px]" data-name="Button">
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex h-[20.579px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#2d2d2d] text-[14.4px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        20:00
      </p>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[47.94px] items-start left-[279.69px] pb-0 pt-[13.856px] px-[45.953px] rounded-[16px] top-[173.81px] w-[129.848px]" data-name="Button">
      <Text12 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[221.753px] relative shrink-0 w-full" data-name="Container">
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-[412px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Container63 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1305)" id="Icon">
          <path d={svgPaths.pa938c00} id="Vector" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
          <path d={svgPaths.p115b4cf0} id="Vector_2" stroke="var(--stroke-0, #808962)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66622" />
        </g>
        <defs>
          <clipPath id="clip0_1_1305">
            <rect fill="white" height="19.9946" width="19.9946" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[23.97px] relative shrink-0 w-[63.579px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.97px] items-start relative w-[63.579px]">
        <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2d2d2d] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Duration
        </p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[7.98px] h-[23.97px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <Heading7 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center">1</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        hora
      </p>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[45.982px] items-start relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[69.952px] items-start left-0 pb-0 pt-[11.985px] px-0 rounded-[16px] top-0 w-[94.887px]" data-name="Button">
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-center text-white">2</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        horas
      </p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[45.982px] items-start relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-[#808962] box-border content-stretch flex flex-col h-[69.952px] items-start left-[104.88px] pb-0 pt-[11.985px] px-0 rounded-[16px] top-0 w-[94.887px]" data-name="Button">
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center">3</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        horas
      </p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[45.982px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[69.952px] items-start left-[209.77px] pb-0 pt-[11.985px] px-0 rounded-[16px] top-0 w-[94.887px]" data-name="Button">
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[28.004px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center">4</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex h-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Nunito_Sans:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#2d2d2d] text-[12px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        horas
      </p>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[1.988px] h-[45.982px] items-start relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute bg-[rgba(179,180,175,0.2)] box-border content-stretch flex flex-col h-[69.952px] items-start left-[314.65px] pb-0 pt-[11.985px] px-0 rounded-[16px] top-0 w-[94.887px]" data-name="Button">
      <Container76 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[69.952px] relative shrink-0 w-full" data-name="Container">
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] h-[110px] items-start relative shrink-0 w-[426px]" data-name="Container">
      <Container64 />
      <Container77 />
    </div>
  );
}

function QuietTableMobileApp() {
  return (
    <div className="bg-[#faf9f6] h-[852px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-[441px]" data-name="Quiet Table Mobile App">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[9px] border-solid inset-[-9px] pointer-events-none rounded-bl-[25px] rounded-br-[25px] rounded-tl-[29px] rounded-tr-[29px]" />
      <TableReservationScreen />
      <div className="absolute bg-[#808962] box-border content-stretch flex gap-[10px] h-[43px] items-center justify-center left-[53.9px] p-[10px] rounded-[16px] top-[705px] w-[354px]" data-name="Confirm Reservation Button">
        <div className="flex flex-col font-['Nunito_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="leading-[5px] whitespace-pre">Confirm Reservation</p>
        </div>
      </div>
      <div className="absolute bg-white box-border content-stretch flex flex-col h-[61.796px] items-start left-[-0.52px] pb-0 pt-[1.871px] px-0 rounded-bl-[20px] rounded-br-[20px] top-[790.2px] w-[441.519px]" data-name="BottomNavigation">
        <div aria-hidden="true" className="absolute border-[1.871px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none rounded-bl-[20px] rounded-br-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
        <Container31 />
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[31.98px] h-[447px] items-start left-0 overflow-clip px-[15.99px] py-0 top-[249.5px] w-[441px]" data-name="Container">
        <Frame4 />
        <Container78 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[31.77%_91.8%_38.25%_3.41%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 37">
        <g id="Group">
          <path d={svgPaths.p71b5480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[39.92%_92.91%_46.82%_6.18%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
        <g id="Group">
          <path d={svgPaths.p25068180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[39.93%_93.92%_46.31%_4.57%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
        <g id="Group">
          <path d={svgPaths.pf542100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[39.92%_92.91%_46.31%_4.57%]" data-name="Group">
      <Group5 />
      <Group6 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute contents inset-[31.77%_91.8%_38.25%_3.41%]" data-name="Logo">
      <Group4 />
      <Group7 />
    </div>
  );
}

function FontAwesomeFacebookF() {
  return (
    <div className="relative shrink-0 size-[21.6px]" data-name="FontAwesome/facebook-f">
      <div className="absolute bottom-0 left-0 right-[-154.63%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 22">
          <g id="FontAwesome/facebook-f">
            <path d={svgPaths.p4f5ca80} fill="var(--fill-0, #111928)" id="facebook" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavLink() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Nav Link">
      <FontAwesomeFacebookF />
    </div>
  );
}

function FontAwesomeTwitter() {
  return (
    <div className="relative shrink-0 size-[21.6px]" data-name="FontAwesome/twitter">
      <div className="absolute bottom-0 left-0 right-[-172.54%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 22">
          <g id="FontAwesome/twitter">
            <path d={svgPaths.p3df1ef80} fill="var(--fill-0, #111928)" id="twitter" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavLink1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Nav Link">
      <FontAwesomeTwitter />
    </div>
  );
}

function FontAwesomeGithub() {
  return <div className="shrink-0 size-[21.6px]" data-name="FontAwesome/github" />;
}

function NavLink2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Nav Link">
      <FontAwesomeGithub />
    </div>
  );
}

function FontAwesomeDribbble() {
  return (
    <div className="relative shrink-0 size-[21.6px]" data-name="FontAwesome/dribbble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="FontAwesome/dribbble">
          <path d={svgPaths.p35f07600} fill="var(--fill-0, #111928)" id="dribbble" />
        </g>
      </svg>
    </div>
  );
}

function NavLink3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Nav Link">
      <FontAwesomeDribbble />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="absolute content-stretch flex gap-[21.6px] items-center left-[1260px] top-[43.2px]" data-name="Social Links">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
      <NavLink3 />
    </div>
  );
}

export default function ProjectPageCms() {
  return (
    <div className="bg-neutral-100 content-stretch flex flex-col gap-16 md:gap-24 lg:gap-[166px] items-center relative size-full py-8 md:py-12 lg:py-16" data-name="Project Page CMS">
      <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto" data-name="Project Image04">
        <div className="relative w-full aspect-[1284/404] bg-[#c4c4c4] rounded-lg overflow-hidden">
          <img alt="Project showcase" className="absolute inset-0 w-full h-full object-cover" src={imgProjectImage04} />
        </div>
      </div>
      <ProjectName />
      <Images />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "1920" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[1920px] relative w-0">
            <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1920">
                <path d="M0.5 0V1920" id="Vector 2" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] px-6 md:px-12 mx-auto">
        <div className="relative w-full aspect-[1308/326] bg-[#d9d9d9] rounded-lg overflow-hidden">
          <img alt="Project detail" className="absolute inset-0 w-full h-full object-cover" src={imgRectangle29} />
        </div>
      </div>
      <MoreProjects />
      <Frame6 />
      <Frame7 />
      <QuietTableMobileApp />
    </div>
  );
}