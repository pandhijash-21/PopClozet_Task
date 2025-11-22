import React from 'react';

const Loader = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative w-24 h-24 rotate-45 z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-0 w-7 h-7 m-0.5 animate-square bg-primary"
            style={{
              animationDelay: `${-1.4285714286 * i}s`
            }}
          />
        ))}
      </div>
      <style>{`
        .bg-grid {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes square-animation {
          0% {
            left: 0;
            top: 0;
          }
          10.5% {
            left: 0;
            top: 0;
          }
          12.5% {
            left: 32px;
            top: 0;
          }
          23% {
            left: 32px;
            top: 0;
          }
          25% {
            left: 64px;
            top: 0;
          }
          35.5% {
            left: 64px;
            top: 0;
          }
          37.5% {
            left: 64px;
            top: 32px;
          }
          48% {
            left: 64px;
            top: 32px;
          }
          50% {
            left: 32px;
            top: 32px;
          }
          60.5% {
            left: 32px;
            top: 32px;
          }
          62.5% {
            left: 32px;
            top: 64px;
          }
          73% {
            left: 32px;
            top: 64px;
          }
          75% {
            left: 0;
            top: 64px;
          }
          85.5% {
            left: 0;
            top: 64px;
          }
          87.5% {
            left: 0;
            top: 32px;
          }
          98% {
            left: 0;
            top: 32px;
          }
          100% {
            left: 0;
            top: 0;
          }
        }
        
        .animate-square {
          animation: square-animation 10s ease-in-out infinite both;
        }
      `}</style>
    </div>
  );
};

export default Loader;

