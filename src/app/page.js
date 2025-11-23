import Image from "next/image";
import List from "./list/page";

export default function Home() {
  return (
    <div className="min-h-screen  font-sans mx-auto max-w-7xl px-4 ">
      <List/>
    </div>
  );
}
