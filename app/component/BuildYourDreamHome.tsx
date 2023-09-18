import type { FC } from "react";
import { Inter, Playfair } from "next/font/google";

interface BuildYourDreamHomeProps {}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });

const BuildYourDreamHome: FC<BuildYourDreamHomeProps> = ({}) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className={`${playfair.variable} font-serif text-5xl font-black capitalize`}>
        Build your dream <span className="text-[#FD665E]">house</span>
      </h1>
      <span className={`${inter.variable} font-sans grid gap-6`}>
        <p className="font-semibold max-w-[92%] text-base">
          100% guaranteed build safe, comfortable and transparent with a project
          management for the best result
        </p>
        <p className="bg-[#FD665E] w-fit p-4 text-white rounded">Free consultation</p>
      </span>

      <img src='/img/large_image.png' alt='illustration' />
    </div>
  );
};
export default BuildYourDreamHome;
