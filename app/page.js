import {
  Navbar,
  Banner1,
  Banner1Child1,
  Banner1Child2,
  Banner2,
  Banner2Child1,
  Banner2Child2,
  Banner3,
  Banner3Child1,
  Banner4,
  Banner4Child1,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="">

      <Navbar />

      <section id="banner1" className="mx-28  bg-violet-100  h-screen rounded-3xl">
        <Banner1 />
      </section>

      <section className=" w-full mt-16 mb-16">
        <Banner1Child1 />
      </section>

      <section className="">
        <Banner1Child2 />
      </section>

      <section id="banner2" className="mx-28 bg-orange-50  h-screen rounded-3xl">
        <Banner2 />
      </section>

      <section className="">
        <Banner2Child1 />
      </section>

      <section className="">
        <Banner2Child2 />
      </section>

      <section id="banner3" className="mx-28 bg-sky-100  h-screen rounded-3xl">
        <Banner3 />
      </section>

      <section className="">
        <Banner3Child1 />
      </section>

      <section id="banner4" className="mx-28 bg-indigo-100  h-3/4 rounded-3xl">
        <Banner4 />
      </section>

      <section className="w-full  mt-20">
        <Banner4Child1 />
      </section>

      <Footer />
    </main>
  );
}
