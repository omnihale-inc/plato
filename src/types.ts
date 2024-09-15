interface Update {
  image: string;
  title: string;
  description: string;
}

interface UpdatesItemProps {
  update: Update;
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateData: onUpdateData;
}

type onUpdateData = React.Dispatch<
  React.SetStateAction<{
    image: string;
    title: string;
    description: string;
  }>
>;
interface UpdatesProps {
  updates: Update[];
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateData: React.Dispatch<
    React.SetStateAction<{
      image: string;
      title: string;
      description: string;
    }>
  >;
}

export type { Update, UpdatesProps, UpdatesItemProps, onUpdateData };
