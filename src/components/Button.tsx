import React from "react";
import Link from "next/link";

interface ButtonProps {
  property1?: "primary" | "secondary" | "tertiary";
  className?: string;
  primarySizeLargeTypeClassName?: string;
  primaryRadius?: string;
  primaryIcon?: "left" | "right" | "no";
  primaryText?: string;
  primary?: React.ReactNode;
  primaryType?: string;
  primarySize?: string;
  override?: React.ReactNode;
  concreteComponentNodeRadius?: string;
  concreteComponentNodeIcon?: "left" | "right" | "no";
  concreteComponentNodeText?: string;
  concreteComponentNode?: React.ReactNode;
  concreteComponentNodeSize?: string;
  concreteComponentNodeSizeLargeTypeClassName?: string;
  to?: string;
  to1?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  property1 = "primary",
  className = "",
  primarySizeLargeTypeClassName = "",
  primaryIcon = "no",
  primaryText = "Button Text",
  primary,
  override,
  concreteComponentNodeIcon = "no",
  concreteComponentNodeText = "Button Text",
  concreteComponentNode,
  concreteComponentNodeSizeLargeTypeClassName = "",
  to = "/",
  to1 = "/",
  children,
}) => {
  const buttonContent = () => {
    if (property1 === "primary") {
      return (
        <div className={`flex items-center justify-center gap-2 ${primarySizeLargeTypeClassName}`}>
          {primaryIcon === "left" && primary}
          <span className="font-medium text-sm">{primaryText}</span>
          {primaryIcon === "right" && (primary || override)}
        </div>
      );
    }

    if (property1 === "secondary") {
      return (
        <div className="flex items-center justify-center gap-2">
          {primaryIcon === "left" && primary}
          <span className="font-medium text-sm">{primaryText || "Button Text"}</span>
          {primaryIcon === "right" && (primary || override)}
        </div>
      );
    }

    if (property1 === "tertiary") {
      return (
        <div className={`flex items-center justify-center gap-2 ${concreteComponentNodeSizeLargeTypeClassName}`}>
          {concreteComponentNodeIcon === "left" && concreteComponentNode}
          <span className="font-medium text-sm">{concreteComponentNodeText}</span>
          {concreteComponentNodeIcon === "right" && concreteComponentNode}
        </div>
      );
    }

    return children;
  };

  return (
    <Link 
      href={property1 === "tertiary" ? to1 : to} 
      className={`
        inline-flex items-center justify-center px-4 py-3 rounded-lg 
        transition-all duration-200 hover:opacity-90 focus:outline-none 
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
    >
      {buttonContent()}
    </Link>
  );
}; 