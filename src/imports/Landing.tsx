import svgPaths from "./svg-hzskq2n9f3";
import imgRectangle15 from "figma:asset/5f749e4c249a5ceae578ebf3ea2fd6e7abd07295.png";
import imgRectangle1 from "figma:asset/6843e92f70627173c44e024e1e1daafe9da78560.png";
import imgRectangle2 from "figma:asset/99776b5bae14ae2c3e443207748e48560b01f3b3.png";
import imgRectangle3 from "figma:asset/7def82c45d53f5dd4d1e8240caeeb6a8c3c0dd2e.png";

function Group() {
  return <div className="absolute bg-neutral-100 inset-0" />;
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
      <div className="absolute inset-[33.64%_91.81%_32.73%_3.4%]" data-name="Group">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 37">
          <g id="Group">
            <path d={svgPaths.p71b5480} fill="var(--fill-0, black)" id="Vector" />
          </g>
        </svg>
      </div>
      <Group3 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute contents inset-[33.64%_7.08%_32.73%_3.4%]" data-name="Content">
      <Logo />
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_27.5%_37.64%_68.61%] leading-[normal] text-[24.867px] text-black">Work</p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_21.11%_37.64%_74.4%] leading-[normal] text-[24.867px] text-black">About</p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_13.3%_37.64%_80.78%] leading-[normal] text-[24.867px] text-black">Contact</p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[36.36%_7.08%_37.64%_88.6%] leading-[normal] text-[24.867px] text-black">Other</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[682px] relative shrink-0 w-[1228px]" data-name="Hero">
      <div className="absolute h-[564px] left-[622px] top-0 w-[606px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#c4c4c4] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle15} />
        </div>
      </div>
      <div className="absolute font-['Afacad:Regular',sans-serif] font-normal h-[600px] leading-[normal] left-0 text-[#282828] text-[69px] top-[41px] w-[773px]">
        <p className="mb-0">{`Camila · UX/UI Designer · Clarity, empathy, and real user needs `}</p>
        <p>Available for freelance projects and team collaborations · Research-based approach</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0">
      <div className="h-[110px] relative shrink-0 w-[1440px]" data-name="Navbar">
        <Group />
        <Content />
      </div>
      <Hero />
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute contents left-[1216px] top-[483.58px]" data-name="Plus">
      <div className="absolute left-[1216px] size-[59px] top-[483.58px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 59">
          <circle cx="29.5" cy="29.5" id="Ellipse 1" r="28.5" stroke="var(--stroke-0, #0B0B0D)" strokeWidth="2" />
        </svg>
      </div>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] left-[1237px] text-[30px] text-black text-nowrap top-[496.58px] whitespace-pre">+</p>
    </div>
  );
}

function Circle() {
  return (
    <div className="absolute left-[258px] size-[38px] top-[214.58px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Circle">
          <path d={svgPaths.p23e59340} id="Ellipse 4" stroke="var(--stroke-0, white)" strokeWidth="2" />
          <path d={svgPaths.p12353000} id="Ellipse 5" stroke="var(--stroke-0, black)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Projects() {
  return (
    <div className="h-[791.582px] relative shrink-0 w-[1284px]" data-name="Projects">
      <div className="absolute h-[558px] left-0 rounded-[5px] top-[233.58px] w-[370px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute h-[558px] left-[404px] rounded-[5px] top-[233.58px] w-[370px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[5px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[5px] size-full" src={imgRectangle2} />
        </div>
      </div>
      <div className="absolute h-[558px] left-[808px] rounded-[5px] top-[233.58px] w-[370px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[5px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[5px] size-full" src={imgRectangle3} />
        </div>
      </div>
      <p className="absolute font-['Afacad:Regular',sans-serif] font-normal leading-[normal] left-0 text-[30px] text-black text-nowrap top-[181.58px] whitespace-pre">01. QUIET TABLE</p>
      <p className="absolute font-['Afacad:Regular',sans-serif] font-normal leading-[normal] left-[404px] text-[30px] text-black text-nowrap top-[181.58px] whitespace-pre">02 IASSITENCE</p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] left-[808px] text-[30px] text-black text-nowrap top-[181.58px] whitespace-pre">03 Example</p>
      <Plus />
      <Circle />
      <div className="absolute content-stretch flex flex-col gap-[27px] items-start left-0 top-0" data-name="Title of Section">
        <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[45.063px] text-black w-[586.49px]">Projects</p>
        <div className="h-0 relative shrink-0 w-[1284px]" data-name="Separator">
          <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1284 2">
              <line id="Separator" stroke="var(--stroke-0, black)" strokeWidth="2" x2="1284" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Programs() {
  return (
    <div className="absolute content-stretch flex font-['Libre_Franklin:Bold',sans-serif] font-bold items-start leading-[0] left-[-127px] text-[24px] text-black text-nowrap top-[4px]" data-name="Programs">
      <ul className="[white-space-collapse:collapse] block relative shrink-0">
        <li className="ms-[36px] whitespace-pre-wrap">
          <span className="leading-[normal]">{`Photoshop       •     Illustrator       •     Webflow       •     Figma       •     Indesign       •     Premiere Pro       •     Cinema 4D       •     Sketch   `}</span>
        </li>
      </ul>
      <ul className="[white-space-collapse:collapse] block relative shrink-0">
        <li className="ms-[36px] whitespace-pre-wrap">
          <span className="leading-[normal]">{`Photoshop       •     Illustrator       •     Webflow       •     Figma       •     Indesign       •     Premiere Pro       •     Cinema 4D       •     Sketch   `}</span>
        </li>
      </ul>
    </div>
  );
}

function Clipping() {
  return (
    <div className="absolute h-[51px] left-0 overflow-clip top-[743.5px] w-[1284px]" data-name="Clipping">
      <Programs />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="h-[794.5px] relative shrink-0 w-[1284px]" data-name="About Me">
      <div className="absolute content-stretch flex flex-col gap-[27px] items-start left-0 top-0" data-name="Title of Section">
        <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[45.063px] text-black w-[586.49px]">About Me</p>
        <div className="h-0 relative shrink-0 w-[1284px]" data-name="Separator">
          <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1284 2">
              <line id="Separator" stroke="var(--stroke-0, black)" strokeWidth="2" x2="1284" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold h-[447.958px] leading-[normal] left-[4px] text-[30px] text-black top-[163.5px] w-[535px]">
        {`I'm a product designer working on various projects on a wide range of clients. My skillset lies on creating branding packages & websites to deliver the full online experience for new and also veteran businesses.`}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        {`You can often find me creating videos about design over on YouTube, or sharing my thoughts on my podcast, Dialogue With Designers . I'm passionate about giving back and teaching what I know to the next generation of designers.‍`}
      </p>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold h-[385px] leading-[normal] left-[642px] text-[30px] text-black top-[163.5px] w-[535px]">Your one stop shop for:</p>
      <Clipping />
      <div className="absolute font-['Libre_Franklin:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[64px] left-[642px] text-[30px] text-black text-nowrap top-[210.5px] whitespace-pre">
        <p className="mb-0">{`①   Branding / Logo`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`②   Packaging`}</p>
        <p>{`③   Websites`}</p>
      </div>
      <div className="absolute h-0 left-[642px] top-[279.5px] w-[642px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642 2">
            <line id="Line 6" stroke="var(--stroke-0, black)" strokeWidth="2" x2="642" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[642px] top-[470.5px] w-[642px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642 2">
            <line id="Line 6" stroke="var(--stroke-0, black)" strokeWidth="2" x2="642" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[642px] top-[532.5px] w-[642px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642 2">
            <line id="Line 6" stroke="var(--stroke-0, black)" strokeWidth="2" x2="642" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[30.65%_1.56%_68.6%_97.51%] items-center justify-center">
        <div className="flex-none h-[6px] rotate-[180deg] w-[12px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                <path d="M1 1L7 7L13 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[54.81%_1.56%_44.43%_97.51%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M1 1L7 7L13 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.12%_1.56%_36.12%_97.51%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M1 1L7 7L13 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold h-[110px] leading-[normal] left-[686px] text-[20px] text-black top-[298.5px] w-[578px]">
        <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis massa elementum, etiam cras tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis massa elem `}</span>
        <span className="font-['Neue_Haas_Grotesk_Display_Pro:56_Italic',sans-serif] not-italic">Starting at € 2,450</span>
      </p>
    </div>
  );
}

function FirstName() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[13px] py-[11px] relative shrink-0 w-[251px]" data-name="First Name">
      <div aria-hidden="true" className="absolute border-2 border-[#4e4e4e] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#9f9f9f] text-[20px] text-nowrap whitespace-pre">First Name</p>
    </div>
  );
}

function LastName() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[13px] py-[11px] relative shrink-0 w-[255px]" data-name="Last Name">
      <div aria-hidden="true" className="absolute border-2 border-[#4e4e4e] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#9f9f9f] text-[20px] text-nowrap whitespace-pre">Last Name</p>
    </div>
  );
}

function NameInput() {
  return (
    <div className="content-stretch flex gap-[37px] items-start relative shrink-0" data-name="Name Input">
      <FirstName />
      <LastName />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0" data-name="Name">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Name *</p>
      <NameInput />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[225px]" data-name="Text">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#9f9f9f] text-[20px] text-nowrap whitespace-pre">Collab/Client</p>
      <div className="h-[6px] relative shrink-0 w-[12px]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M1 1L7 7L13 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[13px] py-[11px] relative shrink-0" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-[#4e4e4e] border-solid inset-0 pointer-events-none" />
      <Text />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0" data-name="Dropdown">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Inquiry *</p>
      <Dropdown />
    </div>
  );
}

function Email() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[13px] py-[11px] relative shrink-0 w-[256px]" data-name="Email">
      <div aria-hidden="true" className="absolute border-2 border-[#4e4e4e] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#9f9f9f] text-[20px] text-nowrap whitespace-pre">hello@arnau.design</p>
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0" data-name="Email">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Email *</p>
      <Email />
    </div>
  );
}

function InquiryEmail() {
  return (
    <div className="content-stretch flex gap-[37px] items-start relative shrink-0" data-name="Inquiry Email">
      <Dropdown1 />
      <Email1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[140px] items-start px-[13px] py-[11px] relative shrink-0 w-[544px]">
      <div aria-hidden="true" className="absolute border-2 border-[#4e4e4e] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#9f9f9f] text-[20px] text-nowrap whitespace-pre">Hello...</p>
    </div>
  );
}

function Message() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0" data-name="Message">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Message *</p>
      <Frame />
    </div>
  );
}

function Send() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[30px] py-[8px] relative shrink-0" data-name="Send">
      <div aria-hidden="true" className="absolute border-2 border-[#4e4e4e] border-solid inset-0 pointer-events-none" />
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">Send</p>
    </div>
  );
}

function ContactInputs() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[24px] items-start left-[51.4%] right-[6.23%] top-[27.26%]" data-name="Contact Inputs">
      <Name />
      <InquiryEmail />
      <Message />
      <Send />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-[14.142px] relative shrink-0 w-[1457.14px]" data-name="separator">
      <div className="absolute bottom-0 left-[-0.05%] right-[-0.05%] top-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1459 16">
          <g id="separator">
            <path d={svgPaths.p6051980} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p34488a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p160b29c0} id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p16a7c440} id="Vector_4" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p31b1a780} id="Vector_5" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p599b800} id="Vector_6" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p834e00} id="Vector_7" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1b27a80} id="Vector_8" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2969b000} id="Vector_9" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p7721080} id="Vector_10" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3175f800} id="Vector_11" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p34b43500} id="Vector_12" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p395b0e90} id="Vector_13" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p297ca200} id="Vector_14" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p24b6a900} id="Vector_15" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3724c9e0} id="Vector_16" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p9969080} id="Vector_17" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2a3b1f40} id="Vector_18" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2e0ee960} id="Vector_19" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1ac10380} id="Vector_20" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pb4f0f80} id="Vector_21" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p19b18d80} id="Vector_22" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2c486f00} id="Vector_23" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1dd30c80} id="Vector_24" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2da13052} id="Vector_25" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3957d000} id="Vector_26" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p34f1fd00} id="Vector_27" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p156e6700} id="Vector_28" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p21a81e40} id="Vector_29" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p4fdd060} id="Vector_30" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2f96a200} id="Vector_31" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2c23a80} id="Vector_32" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p22bfa900} id="Vector_33" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pdef3080} id="Vector_34" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p36c9d580} id="Vector_35" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p397a6c40} id="Vector_36" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p39411b00} id="Vector_37" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p7da7680} id="Vector_38" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p7863300} id="Vector_39" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3f35f350} id="Vector_40" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p12693180} id="Vector_41" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p25db000} id="Vector_42" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p153f5160} id="Vector_43" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p9c42180} id="Vector_44" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p36fb7e00} id="Vector_45" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p10778380} id="Vector_46" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p173e5260} id="Vector_47" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p152ab480} id="Vector_48" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p350604e0} id="Vector_49" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p39ffad10} id="Vector_50" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p882f6d0} id="Vector_51" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pde35920} id="Vector_52" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pf1c9780} id="Vector_53" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p19202480} id="Vector_54" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p162e92e0} id="Vector_55" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p25c65240} id="Vector_56" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p37adb160} id="Vector_57" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p26ab1b00} id="Vector_58" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2da80f90} id="Vector_59" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p23c06480} id="Vector_60" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2b7ff300} id="Vector_61" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1596b200} id="Vector_62" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2a3015d0} id="Vector_63" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3a710680} id="Vector_64" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3ca43380} id="Vector_65" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p82c300} id="Vector_66" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3ee92480} id="Vector_67" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3f3be500} id="Vector_68" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p302823c0} id="Vector_69" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p22a98e00} id="Vector_70" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1f221300} id="Vector_71" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p26ef7000} id="Vector_72" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pfa1fa80} id="Vector_73" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2aa94b40} id="Vector_74" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p318fb000} id="Vector_75" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p67ccd80} id="Vector_76" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pee7e680} id="Vector_77" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p4150c80} id="Vector_78" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2b046a00} id="Vector_79" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p317afdc0} id="Vector_80" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p12d27b40} id="Vector_81" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pd3c9f80} id="Vector_82" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pe5a5980} id="Vector_83" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2b13e80} id="Vector_84" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p14584480} id="Vector_85" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pc5e6880} id="Vector_86" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pea10100} id="Vector_87" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p101c8480} id="Vector_88" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p4401f00} id="Vector_89" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1ad5df00} id="Vector_90" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pef81dc0} id="Vector_91" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p15fbd380} id="Vector_92" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2495f700} id="Vector_93" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p182e6e00} id="Vector_94" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1c46d200} id="Vector_95" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p664e940} id="Vector_96" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p16c9fd80} id="Vector_97" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3b4555b0} id="Vector_98" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pe255300} id="Vector_99" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2b913480} id="Vector_100" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pc56e500} id="Vector_101" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.pc4d6480} id="Vector_102" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p27c84780} id="Vector_103" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1d01c480} id="Vector_104" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p35512b00} id="Vector_105" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p1c87680} id="Vector_106" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p7657c40} id="Vector_107" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p333bef00} id="Vector_108" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3dacb5f0} id="Vector_109" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p2494d280} id="Vector_110" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p38629b00} id="Vector_111" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p323bc380} id="Vector_112" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="[grid-area:1_/_1] ml-[90.517%] mt-[35.556%] relative size-[14px]" data-name="arrow">
      <div className="absolute bottom-[-5.05%] left-0 right-[-10.1%] top-[-5.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="arrow">
            <path d="M0 7.70711H14" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
            <path d={svgPaths.p3ef4bcc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Email Input">
      <div className="[grid-area:1_/_1] h-[45px] ml-0 mt-0 relative w-[380px]">
        <div aria-hidden="true" className="absolute border-2 border-[#4e4e4e] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="[grid-area:1_/_1] bg-[#4e4e4e] h-[45px] ml-[389px] mt-0 w-[75px]" />
      <p className="[grid-area:1_/_1] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] ml-[12px] mt-[11px] relative text-[#9f9f9f] text-[20px] text-nowrap whitespace-pre">name@example.com</p>
      <Arrow />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0" data-name="Newsletter">
      <div className="flex flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[30px] text-black text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Join the Newsletter!</p>
      </div>
      <div className="flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] h-[46px] justify-center not-italic relative shrink-0 text-[20px] text-black text-center w-[427px]">
        <p className="leading-[1.5]">You’ll receive an email every once in a while about new products, courses, and videos!</p>
      </div>
      <EmailInput />
      <div className="flex flex-col font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] h-[40px] justify-center not-italic relative shrink-0 text-[0px] text-center text-gray-500 w-[364px]">
        <p className="leading-[0] text-[15px]">
          <span className="leading-[20px]">{`We’ll never share your details. See our `}</span>
          <span className="leading-[1.5]">Privacy Policy</span>
        </p>
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

function FooterNews() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0" data-name="Footer/News">
      <Separator />
      <Newsletter />
      <div className="h-[123.4px] relative shrink-0 w-[1440px]" data-name="Footer">
        <p className="absolute font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] h-[21.6px] leading-[1.5] left-[158.8px] not-italic text-[14.4px] text-gray-500 top-[43.2px] w-[310.5px]">© 2021 Arnau Ros, LLC. All rights reserved.</p>
        <Logo1 />
        <SocialLinks />
        <div className="absolute h-0 left-[-31.5px] top-0 w-[1503px]" data-name="Footer Line">
          <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1503 2">
              <line id="Footer Line" stroke="var(--stroke-0, black)" strokeWidth="2" x2="1503" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-neutral-100 content-stretch flex flex-col gap-[164px] items-center relative size-full" data-name="Landing">
      <Frame1 />
      <Projects />
      <AboutMe />
      <div className="h-[609px] relative shrink-0 w-[1284px]" data-name="Contact">
        <p className="absolute bottom-[90.31%] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[normal] left-0 right-[48.6%] text-[45.063px] text-black top-0">Say Hello</p>
        <div className="absolute bottom-[85.88%] left-0 right-0 top-[14.12%]">
          <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1284 2">
              <line id="Line 9" stroke="var(--stroke-0, black)" strokeWidth="2" x2="1284" y1="1" y2="1" />
            </svg>
          </div>
        </div>
        <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[32.02%_58.41%_22.5%_0.31%] leading-[normal] text-[30px] text-black">Looking to start a new project or just want to say hi? Send me an email and I’ll do my best to reply within 24 hrs!</p>
        <p className="absolute font-['Libre_Franklin:Bold',sans-serif] font-bold inset-[54.84%_58.41%_35.14%_0.31%] leading-[normal] text-[0px] text-[30px] text-black">
          <span>{`If contact forms aren’t your thing... send me an email at `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">hello@arnau.design</span>
        </p>
        <ContactInputs />
      </div>
      <FooterNews />
    </div>
  );
}