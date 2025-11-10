'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchPartnersFromGoogleSheets, Partner, getPartnerImageUrls, getFallbackPartnerImage } from '../../lib/partnersData';

// Robust Partner Logo Component (same as events system)
interface PartnerLogoProps {
  partner: Partner;
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls] = useState(() => getPartnerImageUrls(partner.logo));

  const handleImageError = () => {
    if (currentImageIndex < imageUrls.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const currentImageUrl = currentImageIndex < imageUrls.length
    ? imageUrls[currentImageIndex]
    : getFallbackPartnerImage();



  return (
    <li style={{ flexShrink: 0 }}>
      <div
        className="hover:scale-105 transition-transform duration-300 overflow-hidden"
        style={{
          flexShrink: 0,
          opacity: 1,
          width: '140px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
        }}
      >
        <img
          src={currentImageUrl}
          alt={`${partner.name} logo`}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </div>
    </li>
  );
}

export default function Agenda() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [partnersLoading, setPartnersLoading] = useState(true);

  // Fetch partners data on component mount
  useEffect(() => {
    const loadPartners = async (forceRefresh = false) => {
      try {
        setPartnersLoading(true);

        const partnersData = await fetchPartnersFromGoogleSheets(forceRefresh);
        setPartners(partnersData);
      } catch (error) {
        console.error('Failed to load partners:', error);
        // Don't crash the component, just log the error
        // Fallback partners will be returned by the fetch function
      } finally {
        setPartnersLoading(false);
      }
    };

    // Check if page was hard refreshed (F5 or Ctrl+F5)
    const wasHardRefresh = typeof window !== 'undefined' &&
      window.performance &&
      window.performance.navigation &&
      window.performance.navigation.type === 1; // TYPE_RELOAD

    if (wasHardRefresh) {
      loadPartners(true); // Force refresh on F5
    } else {
      loadPartners();
    }
  }, []);
  const scheduleItems = [
    {
      activity: 'Welcome Address',
      speakers: 'Deepa Nair, \n6D Technologies | HR Evolve Member',
      topic: '',
      type: 'admin'
    },
    {
      activity: 'Inaugural Function',
      speakers: '• Seeram Sambasiva Rao IAS: Special Secretary (E & ITD) / Chairman, Kerala State IT Mission\n• Anoop Ambika, CEO, Kerala Start-up Mission\n• Sreekumar V, Secretary, GTech, Centre Head Tata Elxsi\n• Col. Sanjeev Nair (Retd.), CEO, Technopark\n• Deepu S Nath, MD, Faya',
      topic: '',
      type: 'admin'
    },
    {
      activity: 'Keynote Address',
      speakers: 'Nisha Gopinath\nVice President and Head of HR IBM, India and South Asia',
      topic: 'Shaping the Future: Leading through the Human–AI Nexus',
      type: 'keynote'
    },
    {
      activity: 'Power Talk',
      speakers: 'Charles Godwin,\nHR Leader, Zoho Corporation',
      topic: 'Learning Rewired: The Skill-Shelf-Life Crisis Management',
      type: 'session'
    },
    {
      activity: 'Special Address',
      speakers: 'Magical Rafi,\nFounder & Chief Mentor, Magic of Change',
      topic: 'Perform with Purpose: The Heartbeat Behind High Achievement',
      type: 'session'
    },
    {
      activity: 'Power Talk',
      speakers: 'Saurabh Singh,\nConsulting and Capability at SHRM India',
      topic: 'AI + HI: Creating a Future-Ready HR Function',
      type: 'session'
    },
    {
      activity: 'Power Talk',
      speakers: 'Yet to be decided',
      topic: '',
      type: 'session'
    },
    {
      activity: 'Panel Discussion',
      speakers: '• Jayan Nair, Chief People Officer - IBS Software Services\n• Manoj Elanjickal, Director - People & Culture, H&R Block India\n• Varun Palat, Deputy Vice President - HR, Federal Bank',
      topic: 'Future of Work - Bridging the Human-AI Continuum',
      type: 'panel'
    },
    {
      activity: 'Closing Remarks',
      speakers: '',
      topic: '',
      type: 'admin'
    }
  ];

  return (
    <section className="-mt-15 sm:-mt-5 px-4" data-framer-name="Schedule" id="agenda">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">

        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-white capitalize font-medium text-center"
            style={{
              fontFamily: '"Sora", "Sora Placeholder", sans-serif',
              fontSize: 'clamp(28px, 6vw, 40px)',
              fontWeight: 500,
              letterSpacing: '-0.05em'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Agenda
          </motion.h2>
        </div>

        <div className="mb-12 sm:mb-16">
          <motion.div
            className="border border-white/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h3
              className="text-white font-extraboldbold"
              style={{
                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: '1.4em'
              }}
            >
              20th November 2025
            </h3>
          </motion.div>

          <motion.div
            className="border border-white/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h3
              className="text-white font-extraboldbold"
              style={{
                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: '1.4em'
              }}
            >
              Registration at 8:30 AM
            </h3>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {scheduleItems.map((item, index) => (
              <div key={index}>
                <motion.div
                  className="rounded-lg p-4 sm:p-6"
                  style={{
                    border: `1px solid ${item.type === 'keynote' ? 'rgba(239, 200, 38, 0.3)' :
                      item.type === 'panel' ? 'rgba(34, 197, 94, 0.3)' :
                        item.type === 'session' ? 'rgba(59, 130, 246, 0.3)' :
                          item.type === 'admin' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.2)'
                      }`,
                    backgroundColor: `${item.type === 'keynote' ? 'rgba(239, 200, 38, 0.05)' :
                      item.type === 'panel' ? 'rgba(34, 197, 94, 0.05)' :
                        item.type === 'session' ? 'rgba(59, 130, 246, 0.05)' :
                          item.type === 'admin' ? 'rgba(168, 85, 247, 0.05)' : 'transparent'
                      }`
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Activity Column */}
                    <div className="flex flex-col justify-center">
                      <h3
                        className="font-extrabold"
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: 'clamp(16px, 4vw, 20px)',
                          fontWeight: 700,
                          letterSpacing: '-0.01em',
                          color: 'white',
                          filter: 'brightness(1.1) contrast(1.2)'
                        }}
                      >
                        {item.activity}
                      </h3>
                    </div>

                    {/* Speakers Column */}
                    <div className="md:col-span-1">
                      <div className="mb-2">
                        <h4 className="text-white/80 text-xs uppercase font-semibold">Speakers/ Dignitaries</h4>
                      </div>
                      <div
                        className="text-white font-bold"
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: 'clamp(13px, 3.5vw, 15px)',
                          lineHeight: '1.4em'
                        }}
                      >
                        {item.speakers.split('\n').map((speaker, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{speaker}</p>
                        ))}
                      </div>
                    </div>

                    {/* Topic Column */}
                    <div className="md:col-span-1">
                      {item.topic && (
                        <>
                          <div className="mb-2">
                            <h4 className="text-white/80 text-xs uppercase font-semibold">
                              Topic/ Theme
                            </h4>
                          </div>
                          <p
                            className="text-white font-bold"
                            style={{
                              fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                              fontSize: 'clamp(13px, 3.5vw, 15px)',
                              lineHeight: '1.4em'
                            }}
                          >
                            {item.topic}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Add special containers after Inaugural Function */}
                {item.activity === 'Inaugural Function' && (
                  <>
                    <motion.div
                      className="border border-white/20 rounded-lg p-3 sm:p-4 my-6 sm:my-8 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                      <h3
                        className="text-white font-extraboldbold"
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: 'clamp(16px, 4vw, 18px)',
                          fontWeight: 600,
                          letterSpacing: '-0.03em',
                          lineHeight: '1.4em'
                        }}
                      >
                        Felicitation to Great Place To Work Certified Organizations
                      </h3>
                    </motion.div>

                    <motion.div
                      className="border border-white/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    >
                      <h3
                        className="text-white font-extraboldbold"
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: 'clamp(16px, 4vw, 18px)',
                          fontWeight: 600,
                          letterSpacing: '-0.03em',
                          lineHeight: '1.4em'
                        }}
                      >
                        Setting the tone of Elevate 2025 by Deepu S Nath, MD, Faya
                      </h3>
                    </motion.div>
                  </>
                )}
                {item.topic === 'Learning Rewired: The Skill-Shelf-Life Crisis Management' && (
                  <>
                    <motion.div
                      className="border border-white/20 rounded-lg p-3 sm:p-4 my-6 sm:my-8 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                      <h3
                        className="text-white font-extraboldbold"
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: 'clamp(16px, 4vw, 18px)',
                          fontWeight: 600,
                          lineHeight: '1.4em'
                        }}
                      >
                        Lunch at 1:15 pm
                      </h3>
                    </motion.div>
                  </>
                )}
              </div>
            ))}
                      <motion.div
            className="border border-white/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h3
              className="text-white font-extraboldbold"
              style={{
                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: '1.4em'
              }}
            >
              Music fiesta by MuBand
            </h3>
          </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p
            className="text-white/70 italic text-sm"
            style={{
              fontFamily: '"Sora", "Sora Placeholder", sans-serif',
              fontSize: 'clamp(12px, 3vw, 14px)',
              lineHeight: '1.4em'
            }}
          >
            *as of 10th November 2025, and subject to refinement
          </p>
        </motion.div>

        {/* Ticker Section */}
        <div className="mb-16 mt-12" style={{ opacity: 1, transform: 'perspective(1200px)' }}>
          <Link href="https://makemypass.com/event/elevate25-hr-conclave" target="_blank" rel="noopener noreferrer">
            <div style={{ display: 'flex', width: '100%', height: '80px', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0px', padding: '0px', listStyleType: 'none', opacity: 1, overflow: 'hidden' }}>
              <ul
                className="animate-marquee"
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  placeItems: 'center',
                  margin: '0px',
                  padding: '0px',
                  listStyleType: 'none',
                  gap: '40px',
                  position: 'relative',
                  flexDirection: 'row',
                  willChange: 'transform'
                }}
              >
                {[...Array(10)].map((_, index) => (
                  <li key={index} style={{ flexShrink: 0 }}>
                    <div className="flex items-center gap-4" style={{ flexShrink: 0 }}>
                      <div style={{ display: 'contents' }}>
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 204, 0)', width: '24px', height: '24px' }}>
                          <path d="M18.819 13.329l-5.324 5.99a2 2 0 01-2.99 0l-5.324-5.99a2 2 0 010-2.658l5.324-5.99a2 2 0 012.99 0l5.324 5.99a2 2 0 010 2.658z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <p
                        className="text-white uppercase whitespace-nowrap"
                        style={{
                          fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                          fontSize: '20px',
                          fontWeight: 600,
                          textTransform: 'uppercase'
                        }}
                      >
                        Reserve Your Spot
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>

        {/* Partners Section */}
        <motion.div
          className="mb-16 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <h2
              className="text-white uppercase font-medium"
              style={{
                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                fontSize: 'clamp(20px, 5vw, 28px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1em'
              }}
            >
              Our Partners
            </h2>
          </div>

          <div
            className="relative overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
            }}
          >
            <div
              className="flex items-center"
              style={{
                display: 'flex',
                width: '100%',
                height: '100px',
                maxWidth: '100%',
                maxHeight: '100%',
                placeItems: 'center',
                margin: '0px',
                padding: '10px',
                listStyleType: 'none',
                opacity: 1,
                overflow: 'hidden'
              }}
            >
              <div className="partners-container animate-marquee-partners">
                {/* First set */}
                <ul
                  style={{
                    display: 'flex',
                    width: 'max-content',
                    height: '100%',
                    placeItems: 'center',
                    margin: '0px',
                    padding: '0px',
                    listStyleType: 'none',
                    gap: '60px',
                    position: 'relative',
                    flexDirection: 'row',
                    willChange: 'transform'
                  }}
                >
                  {partnersLoading ? (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <li key={`loading-${i}`} style={{ flexShrink: 0 }}>
                          <div
                            className="flex items-center justify-center bg-white rounded-lg p-3"
                            style={{
                              flexShrink: 0,
                              opacity: 1,
                              width: '140px',
                              height: '70px'
                            }}
                          >
                            <span
                              style={{
                                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: '#666',
                                textAlign: 'center'
                              }}
                            >
                              Loading...
                            </span>
                          </div>
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      {partners.map((partner: Partner, index: number) => (
                        <PartnerLogo
                          key={`set1-${index}`}
                          partner={partner}
                        />
                      ))}
                    </>
                  )}
                </ul>
                
                {/* Second set for seamless looping */}
                <ul
                  style={{
                    display: 'flex',
                    width: 'max-content',
                    height: '100%',
                    placeItems: 'center',
                    margin: '0px',
                    padding: '0px',
                    listStyleType: 'none',
                    gap: '60px',
                    position: 'relative',
                    flexDirection: 'row',
                    willChange: 'transform',
                    marginLeft: '60px'
                  }}
                >
                  {!partnersLoading && partners.map((partner: Partner, index: number) => (
                    <PartnerLogo
                      key={`set2-${index}`}
                      partner={partner}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </motion.div>


      </div>
    </section>
  );
}