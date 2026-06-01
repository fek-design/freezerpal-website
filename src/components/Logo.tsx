import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg 
      width="24" 
      height="28" 
      viewBox="0 0 50 59" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("text-brand-accent", className)}
      {...props}
    >
      <path d="M31.461 10.9014L24.9984 21.8028L18.5396 10.9014L24.9984 0L31.461 10.9014Z" fill="currentColor"/>
      <path d="M31.461 47.2237L24.9984 58.1251L18.5396 47.2237L24.9984 36.3223L31.461 47.2237Z" fill="currentColor"/>
      <path d="M12.6083 14.3508L18.7541 25.4355L6.14942 25.6151L0 14.5304L12.6083 14.3508Z" fill="currentColor"/>
      <path d="M43.8508 32.5137L50.0002 43.5947L37.3919 43.7743L31.2461 32.6933L43.8508 32.5137Z" fill="currentColor"/>
      <path d="M6.14942 32.5137L18.7541 32.6933L12.6083 43.7743L0 43.5947L6.14942 32.5137Z" fill="currentColor"/>
      <path d="M37.3919 14.3508L50.0002 14.5304L43.8508 25.6151L31.2461 25.4355L37.3919 14.3508Z" fill="currentColor"/>
    </svg>
  );
}