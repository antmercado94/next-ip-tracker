import Image from "next/image";
import { getLocalBase64 } from "@/lib/getLocalBase64";

export default async function BackgroundPattern() {
  const blurURL = await getLocalBase64(
    "./src/app/assets/pattern-bg-desktop.png",
  );
  return (
    <picture className="relative contents">
      <source media="(max-width: 640px)" srcSet="/bg/pattern-bg-mobile.png" />
      <source media="(min-width: 640px)" srcSet="/bg/pattern-bg-desktop.png" />
      <Image
        fill
        quality={100}
        style={{ objectFit: "cover" }}
        src="/bg/pattern-bg-desktop.png"
        alt="background"
        placeholder="blur"
        blurDataURL={blurURL}
      />
    </picture>
  );
}
