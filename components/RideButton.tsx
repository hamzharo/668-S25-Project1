import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RideButtonProps {
  text: string;
  onClick: () => void;
  variant?: "create" | "request" | "update";
}

const RideButton = ({ text, onClick, variant }: RideButtonProps) => {
  const buttonStyles = {
    create: "bg-green-600 text-white hover:bg-green-700",
    request: "bg-blue-500 text-white hover:bg-blue-600",
    update: "bg-orange-500 text-white hover:bg-orange-600",
  };

  return (
    <Button
      className={cn(
        "w-11/12 sm:w-3/4 p-5 text-2xl rounded-lg transition-transform transform hover:scale-105 focus:outline-black",
        buttonStyles[variant || "create"]
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default RideButton;
