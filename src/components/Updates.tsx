import React, { useEffect, useState } from "react";
import { UpdatesProps, Update } from "@/types";
import { handbuck } from "@/utils/font";
import Image from "next/image";
import getElementPosition from "@/utils/getElementPosition";
import schoolData from "@/data";

const UPDATES = schoolData.updates;

const Updates: React.FC<UpdatesProps> = ({ onSetPositions }) => {
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const pageSize = window.innerWidth;
    setPageSize(pageSize);
  }, []);

  useEffect(() => {
    getElementPosition(onSetPositions, "updates");
  }, []);
  return (
    <section className="mx-auto max-w-6xl w-5/6 mb-2 lg:mb-8" id="updates">
      <h2
        className={`${handbuck.className} pt-14 lg:pt-20 text-center text-3xl lg:text-6xl`}
      >
        Updates
      </h2>
      <div>
        {pageSize <= 800 ? (
          <UpdatesSmallScreen />
        ) : (
          <UpdatesLargeScreen updates={UPDATES} />
        )}
      </div>
    </section>
  );
};

const UpdatesSmallScreen = () => {
  return (
    <div className="flex overflow-x-scroll gap-4 updates-small_screen mx-4">
      {UPDATES.map((update, index) => (
        <div className="shrink-0 basis-64" key={index}>
          <UpdatesItem update={update} />
        </div>
      ))}
    </div>
  );
};

const UpdatesLargeScreen: React.FC<UpdatesProps> = ({ updates }) => {
  const [renderedUpdates, setRenderedUpdates] = useState<Update[]>([]);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    addItemToScreen(
      renderedUpdates,
      cursor,
      updates,
      setRenderedUpdates,
      setCursor
    );
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-7">
        {renderedUpdates.map((update, index) => (
          <React.Fragment key={index}>
            <UpdatesItem update={update} />
          </React.Fragment>
        ))}
      </div>
      {cursor < updates.length && (
        <button
          className={`${handbuck.className} mt-14 text-center w-full lg:text-2xl text-[#ee7834]`}
          onClick={() =>
            addItemToScreen(
              renderedUpdates,
              cursor,
              updates,
              setRenderedUpdates,
              setCursor
            )
          }
        >
          Read More
        </button>
      )}
    </>
  );
};

function UpdatesItem({ update }: { update: Update }): React.JSX.Element {
  return (
    <div className="mt-6 lg:mt-10">
      <div className="relative h-36 lg:h-40 w-full">
        <Image
          src={update.image}
          alt=""
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className={`${handbuck.className} lg:text-2xl mt-6`}>
        {update.title}
      </h2>
      <p className="text-xs lg:text-sm">{update.description}</p>
      {update.amount && (
        <p className="mt-3 lg:mt-5 font-semibold text-sm lg:text-base">
          {update.amount}
        </p>
      )}
    </div>
  );
}

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

export default Updates;
