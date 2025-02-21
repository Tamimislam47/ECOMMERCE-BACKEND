import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

type Props = {
  icon: React.ReactNode;
  text: string;
};

const TooltipDemo: React.FC<Props> = ({ icon, text }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="p-3w-[50px] h-[50px] w-[50px] rounded-full border-2 border-gray-500">
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipDemo;
