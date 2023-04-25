import { banner3 } from "../../assets";
import MainHeader from "../../components/Header/MainHeader";
import MainSidebar from "../../components/Sidebar/MainSidebar";
import Card from "../../components/Custom/Card";

export default function Home() {
  return (
    <>
      <section className="bg-gray-950">
        <div className="flex">

          {/* sidebar */}
          <MainSidebar></MainSidebar>

          <main className="w-full min-w-0 ml-20 flex-auto">
            {/* header */}
            <MainHeader></MainHeader>

            {/* body */}
            <div className="w-full bg-[url('./assets/banner3.jpg')] bg-no-repeat bg-cover">
              <div className="bg-gradient-to-b from-transparent to-90% to-gray-950 py-96">
                <h1 className="text-orange-400 text-7xl drop-shadow-xl text-center tracking-wide uppercase font-bold italic">
                  Play & Conquer
                </h1>
                <h3 className="text-center text-white text-3xl font-medium mt-2 drop-shadow-lg uppercase">
                  Take your game to the next level!
                </h3>
              </div>
            </div>

            <div>
              <h1 className="relative text-center text-white text-4xl font-bold tracking-tight uppercase pl-3 py-1 z-10 after:absolute after:content-[attr(data-text)] after:text-gray-800 after:text-6xl after:font-extrabold after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10 after:tracking-wide" data-text="Featured Tournaments">
                Featured Tournaments
              </h1>
              <div className="w-3/4 mx-auto grid grid-cols-3 gap-16 mt-10">
                <Card 
                  image={banner3} 
                  title="PUBG Mobile Tournament" 
                  tag="PUBG Mobile" 
                  date="26th April 2023" 
                />
              </div>
            </div>
          </main>

        </div>
      </section>
    </>
  )
}
