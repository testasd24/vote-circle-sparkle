import { Vote } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 animate-pulse-glow" />
        <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)]">
          <Vote className="w-4 h-4 text-white" />
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        VoteSystem
      </span>
    </div>
  );
};

export default Logo;
