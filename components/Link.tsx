import React from "react";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = "",
  external = false,
}) => {
  const baseClasses = "transition-colors duration-200";
  const combinedClasses = `${baseClasses} ${className}`;

  if (external) {
    return (
      <a
        href={to}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // In a real implementation, you would use your router's Link component
  // This is a simplified version
  return (
    <a href={to} className={combinedClasses}>
      {children}
    </a>
  );
};
