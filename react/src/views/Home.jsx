import MainHeader from "../components/Header/MainHeader";
import MainSidebar from "../components/Sidebar/MainSidebar";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="flex">
          <MainSidebar></MainSidebar>
          {/* <main className="w-full min-w-0 ml-20 flex-auto bg-[url('./assets/banner2.jpg')] bg-no-repeat bg-contain"> */}
          <main className="w-full min-w-0 ml-20 flex-auto">
            <MainHeader />
            <div className="w-full p-10">
              
            </div>
          </main>
        </div>
      </section>
    </>
  )
}
