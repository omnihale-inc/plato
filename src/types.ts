import { StaticImageData } from "next/image";

type Positions = {
  home: number;
  about: number;
  leaders: number;
  gallery: number;
  newsletter: number;
  calender: number;
  updates: number;
  contact: number;
};
interface OnSetPositions {
  onSetPositions?: React.Dispatch<React.SetStateAction<Positions>>;
}

interface NavigationProps {
  positions: Positions;
}

interface Update {
  image: StaticImageData;
  title: string;
  description: string;
  amount?: string;
}

interface UpdatesProps extends OnSetPositions {
  updates: Update[];
}

interface AboutProps extends OnSetPositions {}

interface BrandProps extends OnSetPositions {}

interface ContactProps extends OnSetPositions {}

interface HomeProps extends OnSetPositions {}

interface StartupProps extends OnSetPositions {}

interface ServicesProps extends OnSetPositions {}

interface LeadersProps extends OnSetPositions {}

interface GalleryProps extends OnSetPositions {}

interface NewsLetterProps extends OnSetPositions {}

interface CalenderProps extends OnSetPositions {}

export type {
  Positions,
  Update,
  AboutProps,
  BrandProps,
  ContactProps,
  HomeProps,
  StartupProps,
  ServicesProps,
  LeadersProps,
  NavigationProps,
  UpdatesProps,
  GalleryProps,
  NewsLetterProps,
  CalenderProps,
};
