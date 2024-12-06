"use client";

import React, {
  ComponentProps,
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/ui/button";

import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/utils/cn";

interface ExpanderContextType {
  isExpanded: boolean;
  toggleExpand: () => void;
  initialVisibleItems: number;
}

const ExpanderContext = createContext<ExpanderContextType | undefined>(
  undefined,
);

interface ExpanderProps {
  children: ReactNode;
  initialVisibleItems?: number;
  className?: string;
}

export function Expander({ children, initialVisibleItems = 3 }: ExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <ExpanderContext.Provider
      value={{ isExpanded, toggleExpand, initialVisibleItems }}
    >
      {children}
    </ExpanderContext.Provider>
  );
}

interface ExpanderContentProps {
  children: ReactNode;
  className?: string;
}

export function ExpanderContent({
  children,
  className = "",
}: ExpanderContentProps) {
  const context = useContext(ExpanderContext);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!context) {
    throw new Error("ExpanderContent must be used within an Expander");
  }

  const { isExpanded, initialVisibleItems } = context;
  const childrenArray = React.Children.toArray(children);
  const visibleContent = childrenArray.slice(0, initialVisibleItems);
  const expandableContent = childrenArray.slice(initialVisibleItems);

  return (
    <div className={cn(className)}>
      {visibleContent}
      {expandableContent.length > 0 && (
        <>
          <div
            ref={contentRef}
            className={cn(
              "space-y-4 overflow-hidden transition-all duration-300 ease-in-out",
              className,
            )}
            style={{
              maxHeight: isExpanded ? contentRef.current?.scrollHeight : "0",
              marginTop: isExpanded ? "" : "0",
            }}
          >
            {expandableContent}
          </div>
        </>
      )}
    </div>
  );
}

type ExpanderButtonProps = {
  collapseText?: string;
  expandText?: string;
};

export function ExpanderButton({
  className,
  collapseText = "Show less",
  expandText = "Show more",
  ...props
}: ComponentProps<typeof Button> & ExpanderButtonProps) {
  const context = useContext(ExpanderContext);
  if (!context) {
    throw new Error("ExpanderButton must be used within an Expander");
  }

  const { isExpanded, toggleExpand } = context;

  return (
    <Button
      onClick={toggleExpand}
      variant="outline"
      className={cn(`flex items-center`, className)}
      aria-expanded={isExpanded}
      aria-controls="expandable-content"
      {...props}
    >
      {isExpanded ? collapseText : expandText}
      <ChevronDownIcon
        className={cn(
          "ml-2 h-4 w-4 transition-transform duration-200",
          isExpanded && "rotate-180",
        )}
      />
    </Button>
  );
}
