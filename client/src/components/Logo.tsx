export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="India Front Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
}

export function SmallLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="India Front Logo" 
        className="h-8 w-auto filter brightness-0 invert"
      />
    </div>
  );
}

export default Logo;
