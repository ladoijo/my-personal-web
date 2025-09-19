import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  type: ToastType;
  message: string;
  className?: string;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, className, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for animation to complete before calling onClose
      setTimeout(() => {
        onClose?.();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const toastStyles = clsx(
    `
      fixed right-4 bottom-4 z-50 mx-4 w-full max-w-sm
      sm:mx-0
    `,
    'rounded-lg p-4 shadow-xl',
    'transform transition-all duration-300 ease-in-out',
    {
      'translate-x-0 opacity-100': isVisible,
      'translate-x-full opacity-0': !isVisible
    },
    {
      'border border-green-800 bg-green-100 text-green-800': type === 'success',
      'border border-red-800 bg-red-100 text-red-800': type === 'error',
      'border border-blue-800 bg-blue-100 text-blue-800': type === 'info',
      'border border-yellow-800 bg-yellow-100 text-yellow-800': type === 'warning'
    },
    className
  );

  return (
    <div className={toastStyles}>
      <div className="flex items-center">
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
