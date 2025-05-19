export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2">
        <div className="flex flex-col h-8">
          <div className="h-1/3 bg-saffron"></div>
          <div className="h-1/3 bg-white flex justify-center items-center">
            <div className="w-4 h-4 rounded-full border border-navy"></div>
          </div>
          <div className="h-1/3 bg-indian-green"></div>
        </div>
      </div>
      <h1 className="text-2xl font-playfair font-bold">
        <span className="text-navy">India</span> <span className="text-saffron">First</span>
      </h1>
    </div>
  );
}

export function SmallLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2">
        <div className="flex flex-col h-6">
          <div className="h-1/3 bg-saffron"></div>
          <div className="h-1/3 bg-white flex justify-center items-center">
            <div className="w-3 h-3 rounded-full border border-navy"></div>
          </div>
          <div className="h-1/3 bg-indian-green"></div>
        </div>
      </div>
      <h2 className="text-xl font-playfair font-bold">
        <span className="text-white">India</span> <span className="text-saffron">First</span>
      </h2>
    </div>
  );
}

export default Logo;
