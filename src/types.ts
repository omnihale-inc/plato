import { StaticImageData } from "next/image";

interface Update {
  image: StaticImageData;
  title: string;
  description: string;
  amount?: string;
}

interface UpdatesItemProps {
  update: Update;
  onShowModal: React.Dispatch<React.SetStateAction<ShowModal>>;
}

interface ShowModal {
  show: boolean;
  data: {
    image: string | StaticImageData;
    title: string;
    description: string;
  };
}

interface UpdatesProps {
  updates: Update[];
  onShowModal: React.Dispatch<React.SetStateAction<ShowModal>>;
}

interface HomeProps {
  media: "image" | "video";
}

export type { Update, ShowModal, UpdatesProps, HomeProps, UpdatesItemProps };
