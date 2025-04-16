import { Sparkles } from "lucide-react";

interface ILabelBadge {
  label: string;
}

const LabelBadge: React.FC<ILabelBadge> = ({ label }) => (
  <div className="absolute -bottom-3 -left-1.5">
    <div className="relative inline-flex items-center gap-1 px-3 py-1 bg-secondary-300 text-white text-[0.625rem] font-bold uppercase rounded-md rounded-bl-none shadow-sm">
      <Sparkles className="w-3 h-3" />
      {label}
      <div className="absolute -bottom-1.5 left-0 w-0 h-0 border-l-[0.375rem] border-t-[0.375rem] border-l-transparent border-t-secondary-300" />
    </div>
  </div>
);


export default LabelBadge;
