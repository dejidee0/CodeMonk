import React from "react";
import { Link } from "./Link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  to,
  type = "button",
  disabled = false,
  onClick,
  fullWidth = false,
}) => {
  const baseClasses =
    "font-medium rounded-md inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-500",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const widthClasses = fullWidth ? "w-full" : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
