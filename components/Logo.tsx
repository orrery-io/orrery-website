function OrreryIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      aria-hidden="true"
      className="block"
    >
      <defs>
        <radialGradient id="oi-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="60%" stopColor="#F4A623" />
          <stop offset="100%" stopColor="#E07A1A" />
        </radialGradient>
        <radialGradient id="oi-p1" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#A8D8EA" />
          <stop offset="100%" stopColor="#5B9BD5" />
        </radialGradient>
        <radialGradient id="oi-p2" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#C4B5E0" />
          <stop offset="100%" stopColor="#7B6BA1" />
        </radialGradient>
        <radialGradient id="oi-p3" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#F7C59F" />
          <stop offset="100%" stopColor="#D4845A" />
        </radialGradient>
      </defs>
      <ellipse cx="256" cy="256" rx="200" ry="80" fill="none" stroke="#3A3A4A" strokeWidth="4" strokeOpacity="0.6" transform="rotate(-20,256,256)" />
      <ellipse cx="256" cy="256" rx="145" ry="58" fill="none" stroke="#3A3A4A" strokeWidth="3.5" strokeOpacity="0.6" transform="rotate(25,256,256)" />
      <ellipse cx="256" cy="256" rx="90" ry="36" fill="none" stroke="#3A3A4A" strokeWidth="3" strokeOpacity="0.6" transform="rotate(-50,256,256)" />
      <line x1="256" y1="256" x2="308.8" y2="241.6" stroke="#5A5A6A" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
      <line x1="256" y1="256" x2="140.9" y2="180.4" stroke="#5A5A6A" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
      <line x1="256" y1="256" x2="355.9" y2="154.5" stroke="#5A5A6A" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
      <circle cx="256" cy="256" r="24" fill="url(#oi-sun)" />
      <circle cx="256" cy="256" r="31" fill="none" stroke="#F4A623" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="256" cy="256" r="5" fill="#3A3A4A" />
      <circle cx="308.8" cy="241.6" r="10" fill="url(#oi-p1)" />
      <circle cx="140.9" cy="180.4" r="13" fill="url(#oi-p2)" />
      <circle cx="355.9" cy="154.5" r="15" fill="url(#oi-p3)" />
    </svg>
  );
}

export function Logo({ className, children, iconSize = 28 }: { className?: string; children?: React.ReactNode; iconSize?: number }) {
  return (
    <div className={`flex flex-row items-center gap-2 ${className ?? ""}`}>
      <OrreryIcon size={iconSize} />
      {children}
    </div>
  );
}
