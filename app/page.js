import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image src="/avatar.jpg" width={180} height={180} alt="avatar" className="rounded-full transform -translate-y-24 border-4" draggable="false" />
      <h1 className="text-[36px] md:text-[48px] transform lg:text-[50px] -translate-x-10 bound-text font-black">Rise with <span className="text-white">Aurora</span></h1>
      <h1 className="text-[32px] md:text-[43px] transform lg:text-[46px] translate-x-10 bound-text font-black"><span className="text-white">Shine</span> with Purpose!</h1>
    </div>
  );
}
