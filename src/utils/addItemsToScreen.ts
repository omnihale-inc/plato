import { Update } from "@/types";

const CURSOR_VALUE = 3;
function addItemToScreen(
  renderedMenu: Update[],
  cursor: number,
  menu: Update[],
  setRenderedMenu: React.Dispatch<React.SetStateAction<Update[]>>,
  setCursor: React.Dispatch<React.SetStateAction<number>>
) {
  const itemsForRenderedMenu: Update[] = [...renderedMenu];

  // Increase the cursor value by if it hasn't exceed the menu length
  // otherwise the newMenuCursorPosition will be set to the menu length
  // value
  const newMenuCursorPosition =
    cursor + CURSOR_VALUE < menu.length ? cursor + CURSOR_VALUE : menu.length;

  // Adds more item to renderedMenu
  for (let i = cursor; i < newMenuCursorPosition; i++) {
    itemsForRenderedMenu.push(menu[i]);
  }
  setRenderedMenu([...itemsForRenderedMenu]);
  setCursor(newMenuCursorPosition);
}

export default addItemToScreen;
