import { ReactNode } from "react";

export {};

declare global {
  interface NavItem {
    id: string;
    label: string;
    href: string;
  }

  interface VisionItem {
    id: number;
    title: string;
    description: string;
  }

  interface Item {
    id: number;
    title: string;
    description: string;
    duration: string;
    topics: string[];
    projects: string[];
    icon: ReactNode;
  }
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  address: string;
  interested: {
    community: boolean;
    aiCohort: boolean;
    career: boolean;
  };
}