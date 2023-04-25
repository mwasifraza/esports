import { banner3, slide1, slide2, slide3 } from "../../assets";
import MainHeader from "../../components/Header/MainHeader";
import MainSidebar from "../../components/Sidebar/MainSidebar";
import Card from "../../components/Custom/Card";
import CardSmall from "../../components/Custom/CardSmall";
import HeadingOne from "../../components/Heading/HeadingOne";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

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
              <div className="bg-gradient-to-b from-transparent to-gray-950 py-96">
                <h1 className="text-orange-400 text-7xl drop-shadow-xl text-center tracking-wide uppercase font-bold italic">
                  Play & Conquer
                </h1>
                <h3 className="text-center text-white text-3xl font-medium mt-2 drop-shadow-lg uppercase">
                  Take your game to the next level!
                </h3>
              </div>
            </div>

            <div className="py-8">
              <HeadingOne>Featured Tournaments</HeadingOne>
              <div className="w-3/4 mx-auto grid grid-cols-3 gap-16 mt-10">
                <Card 
                  image={slide1} 
                  title="PUBG Mobile Tournament" 
                  tag="PUBG Mobile" 
                  date="26th April 2023" 
                />
                <Card 
                  image={slide2} 
                  title="COD Tournament" 
                  tag="Call of Duty" 
                  date="29th April 2023" 
                />
                <Card 
                  image={slide3} 
                  title="Takken7 Tournament" 
                  tag="Takken" 
                  date="3rd May 2023" 
                />
              </div>
            </div>

            <div className="py-8">
              <HeadingOne>Top Groups</HeadingOne>
              <div className="w-3/4 mx-auto grid grid-cols-5 gap-6 mt-10">
                <CardSmall 
                  image={banner3}
                  name="F3 Esports"
                  members="1,562"
                />
                <CardSmall 
                  image={banner3}
                  name="Eagles Esports"
                  members="478"
                />
                <CardSmall 
                  image={banner3}
                  name="Fearless Gamers"
                  members="746"
                />
                <CardSmall 
                  image={banner3}
                  name="Legions Esports"
                  members="1,065"
                />
                <div className="bg-gray-800 rounded-md shadow flex flex-col items-center justify-center cursor-pointer">
                  <PlusCircleIcon className="h-10 w-10 text-green-400" />
                  <h2 className="text-gray-300 text-xl font-bold mt-1">Create New Team</h2>
                </div>
              </div>
            </div>
          </main>

        </div>
      </section>
    </>
  )
}
