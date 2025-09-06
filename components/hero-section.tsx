import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[400px] md:w-[1220px] md:h-[600px] lg:h-[810px] md:px-0"
    >
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_crescent)">
            {/* Crescent Background */}
            <defs>
              <radialGradient id="crescentGradient" cx="0.8" cy="0.2" r="0.8">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
              </radialGradient>
              <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
              </filter>
              <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
              </filter>
            </defs>

            {/* Main crescent shape */}
            <path
              d="M 800 100 Q 1100 200 1150 500 Q 1100 700 900 750 Q 1000 600 1000 400 Q 950 250 800 100 Z"
              fill="url(#crescentGradient)"
              filter="url(#blur1)"
            />

            {/* Secondary crescent for depth */}
            <path
              d="M 900 150 Q 1050 250 1080 450 Q 1050 650 950 700 Q 1000 550 1000 400 Q 980 300 900 150 Z"
              fill="hsl(var(--primary))"
              fillOpacity="0.05"
              filter="url(#blur2)"
            />

            {/* Subtle dots pattern */}
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={200 + (i % 5) * 200}
                cy={150 + Math.floor(i / 5) * 150}
                r="2"
                fill="hsl(var(--foreground))"
                fillOpacity="0.1"
              />
            ))}
          </g>

          <rect
            x="0.5"
            y="0.5"
            width="1219"
            height="809"
            rx="15.5"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.06"
          />

          <defs>
            <clipPath id="clip0_crescent">
              <rect width="1220" height="810" rx="16" fill="hsl(var(--foreground))" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight text-balance">
          Innovative Software & IT Solutions for Modern Business
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto text-pretty">
          Cosnux Limited delivers cutting-edge software development, cloud infrastructure, and comprehensive IT services
          to transform your business operations and drive digital success.
        </p>
      </div>

      <Link href="/services">
        <Button className="relative z-10 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10">
          Explore Our Services
        </Button>
      </Link>
    </section>
  )
}
