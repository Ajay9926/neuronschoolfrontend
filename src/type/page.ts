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
}