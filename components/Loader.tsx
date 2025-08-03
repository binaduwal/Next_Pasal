"use client";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface FlowerLoaderProps {
  title?: string;
  className?: string;
}

export function FlowerLoader({ className, title }: FlowerLoaderProps) {
  return (
    <div className="flex flex-col items-center">
      <div role="status" className={cn("flower-loader", className)}>
        <span className="sr-only">{title}</span>
      </div>
      {title && <p className="mt-2 text-white text-sm">{title}</p>}

      <style jsx>{`
        .flower-loader {
          width: 50px;
          aspect-ratio: 1;
          display: grid;
          -webkit-mask: conic-gradient(from 15deg, #0000, #000);
          mask: conic-gradient(from 15deg, #0000, #000);
          animation: l26 1s infinite steps(12);
        }

        .flower-loader,
        .flower-loader:before,
        .flower-loader:after {
          background:
            radial-gradient(closest-side at 50% 12.5%, #f03355 96%, #0000) 50%
              0/20% 80% repeat-y,
            radial-gradient(closest-side at 12.5% 50%, #f03355 96%, #0000) 0
              50%/80% 20% repeat-x;
        }

        .flower-loader:before,
        .flower-loader:after {
          content: "";
          grid-area: 1/1;
          transform: rotate(30deg);
        }

        .flower-loader:after {
          transform: rotate(60deg);
        }

        @keyframes l26 {
          100% {
            transform: rotate(1turn);
          }
        }
      `}</style>
    </div>
  );
}
