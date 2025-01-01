import { InlineSnippet } from "@/components/form/domain-configuration";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      <Image
        width={512}
        height={512}
        src="/logo.png"
        alt="app/home/page.tsx"
        className="w-48"
      />
      <h1 className="text-white">
       Salient Labs
      </h1>
    </div>
  );
}
