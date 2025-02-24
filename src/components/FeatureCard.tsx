
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-sm border hover:shadow-md transition-shadow duration-300 animate-fade-up">
      <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-gray-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
