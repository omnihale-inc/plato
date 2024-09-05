import { StaticImageData } from "next/image";

interface Update {
  image: StaticImageData;
  title: string;
  description: string;
  amount?: string;
}

interface UpdatesItemProps {
  update: Update;
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateData: React.Dispatch<
    React.SetStateAction<{
      image: string | StaticImageData;
      title: string;
      description: string;
    }>
  >;
}

interface UpdatesProps {
  updates: Update[];
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateData: React.Dispatch<
    React.SetStateAction<{
      image: string | StaticImageData;
      title: string;
      description: string;
    }>
  >;
}

export type { Update, UpdatesProps, UpdatesItemProps };
