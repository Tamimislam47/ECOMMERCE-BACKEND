import React from "react";

interface IconAndTextProps extends React.HTMLProps<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const IconAndText: React.FC<IconAndTextProps> = ({
  icon: Icon,
  text,
  className,
  ...rest
}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`} {...rest}>
      <Icon className="icon-class" />
      <p>{text}</p>
    </div>
  );
};

export default IconAndText;
