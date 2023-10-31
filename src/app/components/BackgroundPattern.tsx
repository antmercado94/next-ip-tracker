import Image from "next/image";

export default async function BackgroundPattern() {
  return (
    <picture className="relative flex w-full">
      <source media="(max-width: 640px)" srcSet="/bg/pattern-bg-mobile.png" />
      <source media="(min-width: 640px)" srcSet="/bg/pattern-bg-desktop.png" />
      <Image
        style={{ objectFit: "cover", width: "100%" }}
        width={500}
        height={500}
        src="/bg/pattern-bg-desktop.png"
        alt="background"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AC5RwWWB/Ze0/8rs/wAAJYw3Vspuiv+jwf8AAAZjAC+ZQF/UdZD/hWATLUNVMxEAAAAASUVORK5CYII="
      />
    </picture>
  );
}
