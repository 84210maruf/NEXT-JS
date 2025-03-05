import React from "react";

interface LoadingButtonProps {
  pending: boolean;
  children: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ pending, children }) => {
  return (
    <button disabled={pending}>
      {pending ? "Loading..." : children}
    </button>
  );
};

export default LoadingButton;