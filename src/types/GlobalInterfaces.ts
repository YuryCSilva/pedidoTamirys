import { ReactNode } from 'react';
import theme from 'ui-theme/theme';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  children?: ReactNode;
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: number;
  margin?: number;
  border_radius?: number;
  isValid?: boolean;
  children: ReactNode;
}

export interface ComponentRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}