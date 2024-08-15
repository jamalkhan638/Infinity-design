import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import DraggableItem from "./DraggableItem"; // Update the import path if necessary
import whmisSymbolData from "@/data/whmisSymbolData";

const SymbolMatch = () => {
  const [whmisSymbolDataRight, setWhmisSymbolDataRight] = useState([
    {
      title: "Environment",
      description: "(May cause damage to the aquatic environment)",
      imgSrc: "/assets/images/m-icon-1.png",
      id: "Environment",
    },
    {
      title: "Skull and Crossbones",
      description:
        "(Can cause death or toxicity with short exposure to small amounts)",
      imgSrc: "/assets/images/m-icon-2.png",
      id: "Skull and Crossbones",
    },
    {
      title: "Exclamation Mark",
      description:
        "(May cause less serious health effects or damages the ozone layer)",
      imgSrc: "/assets/images/m-icon-3.png",
      id: "Exclamation Mark",
    },
    {
      title: "Corrosion",
      description: "(For corrosive damage to metals as well as skin, eyes)",
      imgSrc: "/assets/images/m-icon-4.png",
      id: "Corrosion",
    },
    {
      title: "Flame",
      description: "(For fire hazard)",
      imgSrc: "/assets/images/m-icon-5.png",
      id: "Flame",
    },
    {
      title: "Exploding Bomb",
      description: "(For explosion or reactivity hazard)",
      imgSrc: "/assets/images/m-icon-6.png",
      id: "Exploding Bomb",
    },
    {
      title: "Flame over Circle",
      description: "(For oxidizing hazard)",
      imgSrc: "/assets/images/m-icon-7.png",
      id: "Flame over Circle",
    },
    {
      title: "Cylinder Gas",
      description: "(For gases under pressure)",
      imgSrc: "/assets/images/m-icon-8.png",
      id: "Cylinder Gas",
    },
    {
      title: "Health Hazard",
      description: "(May cause or suspect of causing serious health effects)",
      imgSrc: "/assets/images/m-icon-9.png",
      id: "Health Hazard",
    },
    {
      title: "Bio-hazardous Infectious Materials",
      description:
        "(For organisms or toxins that can cause disease in people or animals)",
      imgSrc: "/assets/images/m-icon-10.png",
      id: "Bio-hazardous Infectious Materials",
    },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    console.log("gg", fromIndex, fromIndex)
    const updatedItems = [...whmisSymbolDataRight];

    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setWhmisSymbolDataRight(updatedItems);
  };

  const isTouchDevice = () =>
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
      <div className="mt-4 d-flex justify-content-center position-relative">
        <div>
          {whmisSymbolData.map((item, index) => (
            <div key={index} className="flex-fill w-100 symbol-box-left p-2">
              <h6 className="mb-1 fw-bold">{item.title}</h6>
              <p className="mb-0 small">{item.description}</p>
            </div>
          ))}
        </div>
        <span className="line-match flex-fill d-none d-xl-flex">
          <span className="line-primary" />
        </span>
        <div className="w-100" style={{ maxWidth: "24rem" }}>
          <div>
            {whmisSymbolDataRight.map((item, index) => (
              <DraggableItem
                key={item.id}
                index={index}
                item={item}
                moveItem={moveItem}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default SymbolMatch;
