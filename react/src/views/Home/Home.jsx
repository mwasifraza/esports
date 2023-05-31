import { game1 } from "../../assets";
import { tournaments, teams, records, tweets } from "../../config/data";
import MainHeader from "../../components/Header/MainHeader";
import MainSidebar from "../../components/Sidebar/MainSidebar";
import TournamentCard from "../../components/Custom/TournamentCard";
import TeamCard from "../../components/Custom/TeamCard";
import CustomTweet from "../../components/Custom/Tweet";
import HeadingOne from "../../components/Heading/HeadingOne";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import RecordCard from "../../components/Custom/RecordCard";
import Footer from "../../components/Footer/Footer";

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

            <div className="py-10">
              <HeadingOne>Featured Tournaments</HeadingOne>
              <div className="w-3/4 mx-auto grid grid-cols-3 gap-16 mt-12">
                {
                  tournaments.map(item => {
                    return (
                      <TournamentCard
                        image={item.image}
                        title={item.title}
                        tag={item.tag}
                        date={item.date}
                      />
                    )
                  })
                }
              </div>
            </div>

            <div className="py-10">
              <HeadingOne>Top Groups</HeadingOne>
              <div className="w-3/4 mx-auto grid grid-cols-5 gap-6 mt-12">
                {
                  teams.map(item => {
                    return (
                      <TeamCard
                        image={item.image}
                        name={item.name}
                        members={item.members}
                      />
                    )
                  })
                }
                <div className="bg-gray-800 rounded-md shadow flex flex-col items-center justify-center cursor-pointer">
                  <PlusCircleIcon className="h-10 w-10 text-green-400" />
                  <h2 className="text-gray-300 text-xl font-bold mt-1">Create New Team</h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 bg-gradient-to-b from-gray-800 to-gray-900 w-3/4 mx-auto my-6 rounded-lg">
              <div className="pt-10">
                <img src={game1} alt="csgo" className="h-64 mx-auto" />
              </div>
              <div className="col-span-2 flex items-center px-10">
                <h1 className="uppercase text-3xl font-semibold text-gray-300 italic">
                  Invite friends and win rewards.<br />join us today
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-green-500 px-16 py-2 rounded text-xl text-gray-800">
                  Register
                </button>
              </div>
            </div>

            <div className="py-10">
              <HeadingOne>Our Esports Track Record</HeadingOne>
              <div className="w-3/5 mx-auto grid grid-cols-5 mt-12">
                {
                  records.map(item => {
                    return (
                      <RecordCard
                        icon={item.icon}
                        number={item.number}
                        title={item.title}
                      />
                    )
                  })
                }
              </div>
            </div>

            <div className="py-10">
                <h1 className="text-4xl font-bold text-gray-200 italic tracking-wide text-center uppercase">Happy Players</h1>
                <div className="w-3/4 mx-auto grid grid-cols-4 gap-5 mt-12">
                  {
                    tweets.map(tweet => {
                      return (
                        <CustomTweet
                          img=""
                          name={tweet.name}
                          username={tweet.username}
                          comments={tweet.comments}
                          retweets={tweet.retweets}
                          likes={tweet.likes}
                        >
                          { tweet.tweet }
                        </CustomTweet>
                      )
                    })
                  }
                </div>
            </div>

            <Footer></Footer>
          </main>

        </div>
      </section>
    </>
  )
}
