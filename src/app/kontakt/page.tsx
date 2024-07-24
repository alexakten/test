import Image from "next/image";
import Link from "next/link";

export default function Kontakt() {
  return (
    <main className="bg-blue-200 h-screen w-screen">
      <section className="w-screen h-screen flex flex-col items-center justify-center p-5 text-center">
        <h1 className="text-red-400 text-8xl">Kontaktsidan</h1>
        <p className="mt-8 ">Jag bygger hemsidor</p>
        <Link href="/" className="mt-8 px-8 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700">
          Gå hem{" "}
        </Link>
      </section>
    </main>
  );
}
