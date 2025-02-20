import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Calendar, Users, Trophy } from 'lucide-react'
import Navbar from "../Navbar/Navbar"

function EventDetails() {
    const [event, setEvent] = useState(null)
    const [activeStage, setActiveStage] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        try {
           
            const urlParams = new URLSearchParams(window.location.search);
            const eventDataParam = urlParams.get('Data');
            
            if (eventDataParam) {
                try {
                    const parsedData = JSON.parse(decodeURIComponent(eventDataParam));
                    setEvent(Array.isArray(parsedData) ? parsedData[0] : parsedData);
                } catch (e) {
                    console.error("Error parsing event data:", e);
                }
            }
        } catch (error) {
            console.error("Error loading event details:", error);
        } finally {
            setLoading(false);
        }
    }, []);
  
    if (loading) {
        return (
            <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
                <p className="text-xl h-32 w-32 rounded-full animate-spin border border-purple-600 border-b-0"></p>
            </div>
        );
    }
  
    if (!event) {
        return (
            <div className="min-h-screen bg-black text-white py-24 px-5 lg:px-10">
                <Navbar />
                <div className="max-w-7xl mx-auto text-center mt-16">
                    <h1 className="text-3xl font-bold text-white mb-4">Event Not Found</h1>
                    <p className="text-gray-400 mb-8">The event details could not be loaded.</p>
                    <a 
                        href="/events" 
                        className="px-6 py-3 rounded-lg font-semibold bg-blue-500 text-white transition-all duration-200"
                    >
                        Back to Events
                    </a>
                </div>
            </div>
        );
    }
  
    return (
      <div className="min-h-screen bg-black text-white py-24  px-5 lg:px-10">
        <Navbar/>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-black to-gray-900 border border-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full order-2 lg:order-1 lg:w-1/2 space-y-6">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                  style={{ color: event.ThemeColor }}
                >
                  {event.Name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl sm:text-2xl font-semibold text-gray-300"
                >
                  {event.Tagline}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 text-lg"
                >
                  {event.Descrition || event.Description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4"
                >
                  <button
                    className="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: event.ThemeColor,
                      color: "black",
                    }}
                  >
                    Register Now
                  </button>
                  <button className="px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:bg-white/10"
                    style={{ borderColor: event.ThemeColor, color: event.ThemeColor }}>
                    Learn More
                  </button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full lg:w-1/2 order-1 lg:order-2"
              >
                <img
                  src={event.Image}
                  alt={event.Name}
                  width={600}
                  height={400}
                  className="w-full  h-auto rounded-lg shadow-2xl"
                  
                />
              </motion.div>
            </div>
          </motion.div>
  
          {/* Stages Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 space-y-6"
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: event.ThemeColor }}>
              Event Stages
            </h2>
            <div className="grid gap-6">
              {event.Stages?.map((stage, index) => (
                <motion.div
                  key={stage.title || `stage-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="rounded-xl border border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveStage(activeStage === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {index === 0 ? (
                        <Calendar className="w-6 h-6" style={{ color: event.ThemeColor }} />
                      ) : index === 1 ? (
                        <Users className="w-6 h-6" style={{ color: event.ThemeColor }} />
                      ) : (
                        <Trophy className="w-6 h-6" style={{ color: event.ThemeColor }} />
                      )}
                      <h3 className="text-xl font-semibold">{stage.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeStage === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeStage === index ? "auto" : 0,
                      opacity: activeStage === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-400">{stage.Descrition || stage.Description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: event.ThemeColor }}>
              Event Timeline
            </h2>
            <div className="relative">
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: event.ThemeColor }}
              />
              {event.Stages?.map((stage, index) => (
                <motion.div
                  key={stage.title || `timeline-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="relative pl-12 pb-8"
                >
                  <div
                    className="absolute left-0 top-2 w-8 h-8 rounded-full border-4 bg-black"
                    style={{ borderColor: event.ThemeColor }}
                  />
                  <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                  <p className="text-gray-400">{stage.Descrition || stage.Description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  )
}

export default EventDetails