
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const programs = [
  {
    number: '01',
    title: 'STRENGTH TRAINING',
    description: 'Build real strength, improve performance and push beyond your limits.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '02',
    title: 'CARDIO FITNESS',
    description: 'Improve endurance, boost energy and build a stronger heart.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    number: '03',
    title: 'PERSONAL TRAINING',
    description: 'Get expert guidance and a training plan built around your goals.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85'
  }
]

const trainers = [
  {
    name: 'ALEX MORGAN',
    role: 'STRENGTH COACH',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'JAMES CARTER',
    role: 'FITNESS TRAINER',
    image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'RYAN WILSON',
    role: 'PERSONAL COACH',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85'
  }
]

const plans = [
  {
    name: 'STARTER',
    price: '1,499',
    features: ['Gym access', 'Locker facility', 'Basic workout plan']
  },
  {
    name: 'ELITE',
    price: '2,499',
    featured: true,
    features: [
      'Unlimited gym access',
      'Personal fitness guidance',
      'Cardio & strength zones',
      'Diet consultation'
    ]
  },
  {
    name: 'ULTIMATE',
    price: '3,999',
    features: [
      'Everything in Elite',
      'Personal training sessions',
      'Custom workout plan',
      'Priority support'
    ]
  }
]

export default function App() {
  const root = useRef(null)

  // Replace with your real WhatsApp number.
  const whatsappNumber = '91XXXXXXXXXX'

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello FORCE GYM! I am interested in joining. Please share membership details.'
  )}`

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO INTRO
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' }
      })

      intro
        .from('.navbar', {
          y: -35,
          opacity: 0,
          duration: 0.8
        })
        .from('.hero-tag', {
          y: 25,
          opacity: 0,
          duration: 0.6
        }, '-=0.3')
        .from('.hero-title span', {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9
        }, '-=0.2')
        .from('.hero-description, .hero-actions', {
          y: 25,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7
        }, '-=0.3')

      // FLOATING DECORATIVE ELEMENTS
      gsap.to('.floating-ring', {
        y: -22,
        rotation: 12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('.floating-dot', {
        y: 18,
        x: 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // HERO BACKGROUND ZOOM
      gsap.to('.hero-background', {
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // SCROLL REVEALS
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // STAGGERED CARDS
      gsap.utils.toArray('.card-grid').forEach((grid) => {
        const cards = grid.children

        gsap.from(cards, {
          y: 55,
          opacity: 0,
          stagger: 0.16,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // COUNTER ENTRANCE
      gsap.from('.stat-number', {
        scale: 0.6,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 85%'
        }
      })

      // GREEN GLOW PULSE
      gsap.to('.hero-glow', {
        opacity: 0.75,
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      ScrollTrigger.refresh()
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div className="website" ref={root}>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          FORCE<span>GYM.</span>
        </a>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#programs">PROGRAMS</a>
          <a href="#trainers">TRAINERS</a>
          <a href="#membership">MEMBERSHIP</a>
        </div>

        <a href="#contact" className="nav-button">
          JOIN NOW <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-glow"></div>

        <div className="floating-ring"></div>
        <div className="floating-dot"></div>

        <div className="hero-content">
          <div className="hero-tag">
            <span className="live-dot"></span>
            BUILT FOR THE STRONG
          </div>

          <h1 className="hero-title">
            <span>TRAIN</span>
            <span className="outline-text">HARDER.</span>
            <span>LIVE <span className="green-text">STRONGER.</span></span>
          </h1>

          <p className="hero-description">
            Your body can do more than you think.
            Challenge your limits, discover your strength
            and become the strongest version of yourself.
          </p>

          <div className="hero-actions">
            <a href="#membership" className="primary-button">
              START YOUR JOURNEY <span>↗</span>
            </a>

            <a href="#programs" className="secondary-button">
              EXPLORE PROGRAMS <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>DISCIPLINE. STRENGTH. RESULTS.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>

        <div className="hero-side-text">PUSH YOUR LIMITS</div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stat-item">
          <h2 className="stat-number">05<span>+</span></h2>
          <p>YEARS OF EXCELLENCE</p>
        </div>

        <div className="stat-item">
          <h2 className="stat-number">1.2<span>K</span></h2>
          <p>HAPPY MEMBERS</p>
        </div>

        <div className="stat-item">
          <h2 className="stat-number">15<span>+</span></h2>
          <p>EXPERT TRAINERS</p>
        </div>

        <div className="stat-item">
          <h2 className="stat-number">20<span>+</span></h2>
          <p>FITNESS PROGRAMS</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding" id="about">
        <div className="about-image reveal">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
            alt="Modern gym interior"
          />
          <div className="image-label">01 / BUILT DIFFERENT</div>
        </div>

        <div className="about-content reveal">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            MORE THAN
            <br />
            JUST A <span>GYM.</span>
          </h2>

          <p>
            FORCE GYM is where ambition meets discipline.
            We believe fitness is not just about lifting weights.
            It is about building confidence, creating habits
            and becoming stronger every single day.
          </p>

          <p>
            Whether you are starting your fitness journey
            or pushing towards your next milestone, we give
            you the environment and guidance to get there.
          </p>

          <a href="#contact" className="text-link">
            DISCOVER OUR STORY <span>↗</span>
          </a>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs-section section-padding" id="programs">
        <div className="section-heading reveal">
          <div>
            <span className="section-label">WHAT WE OFFER</span>
            <h2>TRAIN WITH <span>PURPOSE.</span></h2>
          </div>

          <p>
            Find your focus. Choose your challenge.
            Make every session count.
          </p>
        </div>

        <div className="program-grid card-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.number}>
              <div className="program-image">
                <img src={program.image} alt={program.title} />
                <span className="program-number">{program.number}</span>
                <div className="image-hover-label">EXPLORE ↗</div>
              </div>

              <div className="program-info">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <a href="#contact" aria-label={`Enquire about ${program.title}`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="experience-background"></div>

        <div className="experience-content reveal">
          <span className="section-label">THE FORCE EXPERIENCE</span>

          <h2>
            NO EXCUSES.
            <br />
            <span>JUST RESULTS.</span>
          </h2>

          <p>
            A focused environment. Serious equipment.
            Expert guidance. Everything you need to
            take your fitness to the next level.
          </p>

          <a href="#membership" className="primary-button">
            FIND YOUR MEMBERSHIP <span>↗</span>
          </a>
        </div>

        <div className="experience-mark">F</div>
      </section>

      {/* TRAINERS */}
      <section className="trainers-section section-padding" id="trainers">
        <div className="section-heading reveal">
          <div>
            <span className="section-label">MEET THE TEAM</span>
            <h2>TRAIN WITH THE <span>BEST.</span></h2>
          </div>

          <p>
            Experienced coaches who help you
            stay focused and reach your goals.
          </p>
        </div>

        <div className="trainer-grid card-grid">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.name}>
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
                <span className="trainer-overlay">FORCE GYM</span>
              </div>

              <div className="trainer-info">
                <div>
                  <h3>{trainer.name}</h3>
                  <p>{trainer.role}</p>
                </div>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="membership-section section-padding" id="membership">
        <div className="membership-heading reveal">
          <span className="section-label">MEMBERSHIP PLANS</span>
          <h2>INVEST IN <span>YOURSELF.</span></h2>
          <p>Choose the plan that matches your ambition.</p>
        </div>

        <div className="plans-grid card-grid">
          {plans.map((plan) => (
            <article
              className={`plan-card ${plan.featured ? 'featured-plan' : ''}`}
              key={plan.name}
            >
              {plan.featured && (
                <div className="popular-label">MOST POPULAR</div>
              )}

              <span className="plan-name">{plan.name}</span>

              <h3><span>₹</span>{plan.price}</h3>
              <p className="plan-duration">PER MONTH</p>

              <div className="plan-divider"></div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><span>✓</span>{feature}</li>
                ))}
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="plan-button"
              >
                CHOOSE PLAN <span>↗</span>
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          * Confirm actual membership prices and facilities with the gym.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section" id="contact">
        <div className="cta-content reveal">
          <span className="section-label">YOUR TIME IS NOW</span>

          <h2>
            READY TO
            <br />
            <span>GET STRONGER?</span>
          </h2>

          <p>
            Stop waiting for the perfect moment.
            Start building the strongest version of yourself today.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            JOIN FORCE GYM <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">FORCE<span>GYM.</span></a>
            <p>
              Built for those who refuse to settle.
              Stronger every day.
            </p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#programs">Programs</a>
            <a href="#trainers">Trainers</a>
          </div>

          <div className="footer-column">
            <h4>MEMBERSHIP</h4>
            <a href="#membership">Our plans</a>
            <a href="#contact">Join now</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>CONNECT</h4>
            <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp ↗</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="mailto:hello@forcegym.com">Email ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FORCE GYM. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR STRENGTH. DESIGNED FOR RESULTS.</p>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Contact FORCE GYM on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.02 3C8.86 3 3.04 8.78 3.04 15.9c0 2.27.6 4.48 1.74 6.43L3 29l6.87-1.79a13.1 13.1 0 0 0 6.15 1.53h.01c7.15 0 12.97-5.79 12.97-12.9A12.8 12.8 0 0 0 16.02 3Zm0 23.55h-.01c-1.87 0-3.7-.5-5.3-1.44l-.38-.22-4.08 1.06 1.09-3.96-.25-.4a10.65 10.65 0 0 1-1.64-5.69c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.1 7.52 3.12a10.54 10.54 0 0 1 3.11 7.51c0 5.87-4.78 10.66-10.71 10.66Zm5.85-7.98c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.67 0 1.58 1.16 3.1 1.32 3.32.16.21 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
      </a>

    </div>
  )
}
