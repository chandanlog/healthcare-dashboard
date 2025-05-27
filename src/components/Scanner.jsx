const Scanner = ({ className }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    {/* Gradient shaded background inside scanner */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-cyan-300/20 to-cyan-400/10" />

    {/* Four corners lines */}
    {/* Top-left corner */}
    <div className="absolute top-0 left-0 w-6 h-6">
      <div className="border-t-2 border-l-2 border-cyan-500 rounded-tl-md w-6 h-6" />
    </div>
    {/* Top-right corner */}
    <div className="absolute top-0 right-0 w-6 h-6">
      <div className="border-t-2 border-r-2 border-cyan-500 rounded-tr-md w-6 h-6" />
    </div>
    {/* Bottom-left corner */}
    <div className="absolute bottom-0 left-0 w-6 h-6">
      <div className="border-b-2 border-l-2 border-cyan-500 rounded-bl-md w-6 h-6" />
    </div>
    {/* Bottom-right corner */}
    <div className="absolute bottom-0 right-0 w-6 h-6">
      <div className="border-b-2 border-r-2 border-cyan-500 rounded-br-md w-6 h-6" />
    </div>
  </div>
);

export default Scanner;