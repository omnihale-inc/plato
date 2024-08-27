import { Positions } from "@/types";

function getElementPosition(
  onSetPositions: React.Dispatch<React.SetStateAction<Positions>> | undefined,
  id: string
) {
  const elementPosition = window.document.getElementById(id);
  if (elementPosition && onSetPositions)
    onSetPositions((prevState) => ({
      ...prevState,
      [id]: elementPosition?.offsetTop,
    }));
}

export default getElementPosition;
