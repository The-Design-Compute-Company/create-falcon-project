import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-neutral-950">
      <video 
        src="/3Dgrid.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="fixed top-0 left-0 w-screen h-screen object-cover opacity-20"
        style={{
          background: "linear-gradient(0deg, #FF1000 0%, #FF1000 100%)",
          backgroundBlendMode: "color"
        }}
      />
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <video className="w-60 opacity-50 mix-blend-color-dodge" src="/falcon_logo.mp4" autoPlay loop muted playsInline preload="auto" />
        <h1 className="text-center font-pp-editorial-new text-[42px] w-39 font-extralight leading-[100%] tracking-[-0.84px] text-white/24">Design anything</h1>
        <p className="text-center font-inter-display text-[17px] w-46 font-normal leading-[137%] text-[rgba(255,255,255,0.24)]">Start building your ideas by chatting or coding</p>
      </div>
    </div>
  );
}
