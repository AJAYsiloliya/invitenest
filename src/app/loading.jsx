"use client";


export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-pink-50">
      {/* Background glow */}
      <div className="absolute h-72 w-72 animate-pulse rounded-full bg-pink-200/40 blur-3xl" />

      {/* Floating hearts */}
      <span className="heart heart-1">♥</span>
      <span className="heart heart-2">♥</span>
      <span className="heart heart-3">♥</span>
      <span className="heart heart-4">♥</span>

      <div className="relative flex flex-col items-center">
        {/* Invitation envelope */}
        <div className="envelope">
          {/* Envelope back */}
          <div className="envelope-back" />

          {/* Letter */}
          <div className="letter">
            <span>Invite</span>
            <strong>Nest</strong>
          </div>

          {/* Envelope flap */}
          <div className="envelope-flap" />
        </div>

        {/* Brand */}
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-pink-800">
          Invite<span className="text-red-500">Nest</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Preparing your invitation
          <span className="dots">...</span>
        </p>
      </div>

      <style jsx>{`
        .envelope {
          position: relative;
          width: 170px;
          height: 115px;
          animation: float 2.5s ease-in-out infinite;
        }

        .envelope-back {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(145deg, #fbcfe8, #f9a8d4);
          box-shadow:
            0 20px 45px rgba(236, 72, 153, 0.2),
            inset 0 0 0 2px rgba(255, 255, 255, 0.5);
        }

        .letter {
          position: absolute;
          left: 15px;
          right: 15px;
          bottom: 8px;
          height: 85px;
          border-radius: 8px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          animation: letter 2.5s ease-in-out infinite;
          z-index: 2;
        }

        .letter span {
          font-size: 13px;
          color: #9d174d;
          letter-spacing: 2px;
        }

        .letter strong {
          font-size: 20px;
          color: #ef4444;
        }

        .envelope-flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 85px solid transparent;
          border-right: 85px solid transparent;
          border-top: 65px solid #f472b6;
          transform-origin: top;
          animation: flap 2.5s ease-in-out infinite;
          z-index: 3;
        }

        .heart {
          position: absolute;
          color: #f43f5e;
          opacity: 0;
          font-size: 18px;
          animation: hearts 3s ease-in-out infinite;
        }

        .heart-1 {
          top: 35%;
          left: 28%;
          animation-delay: 0s;
        }

        .heart-2 {
          top: 45%;
          right: 27%;
          animation-delay: 1s;
        }

        .heart-3 {
          top: 30%;
          right: 35%;
          animation-delay: 1.8s;
        }

        .heart-4 {
          top: 50%;
          left: 35%;
          animation-delay: 2.4s;
        }

        .dots {
          display: inline-block;
          width: 18px;
          overflow: hidden;
          vertical-align: bottom;
          animation: dots 1.4s steps(4, end) infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes letter {
          0%,
          20% {
            transform: translateY(5px);
          }
          45%,
          70% {
            transform: translateY(-15px);
          }
          90%,
          100% {
            transform: translateY(5px);
          }
        }

        @keyframes flap {
          0%,
          20% {
            transform: rotateX(0deg);
          }
          45%,
          70% {
            transform: rotateX(180deg);
          }
          90%,
          100% {
            transform: rotateX(0deg);
          }
        }

        @keyframes hearts {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.5);
          }
          30% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-70px) scale(1.2);
          }
        }

        @keyframes dots {
          0% {
            width: 4px;
          }
          33% {
            width: 8px;
          }
          66% {
            width: 12px;
          }
          100% {
            width: 18px;
          }
        }
      `}</style>
    </div>
  );
}
