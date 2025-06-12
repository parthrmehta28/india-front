export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/attached_assets/Logo-blue-text-white-bg_1749734007674.PNG" 
        alt="India Front Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
}

export function SmallLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/attached_assets/Logo-blue-text-white-bg_1749734007674.PNG" 
        alt="India Front Logo" 
        className="h-8 w-auto filter brightness-0 invert"
      />
    </div>
  );
}

export default Logo;
