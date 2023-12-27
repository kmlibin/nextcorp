import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  const imgData = props.imgData;
  const imgAlt = props.imgAlt;
  const title = props.title;

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10 ">
        <Image src={imgData} fill style={{ objectFit: "cover" }} alt={imgAlt} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>

      <div className="flex items-center justify-center pt-48">
        <h1 className="text-6xl text-white">{title}</h1>
      </div>
    </div>
  );
}
