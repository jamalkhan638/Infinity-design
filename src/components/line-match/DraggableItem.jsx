import React from "react";
import { useDrag, useDrop } from "react-dnd";
import Image from "next/image";

const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  const [{ isDragging }, ref] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`flex-fill w-100 symbol-box-right p-2 cursor-grab ${
        isDragging ? "dragging" : ""
      }`}
      style={{ opacity: isDragging ? 0.5 : 1 }} // Add opacity change for visual feedback
    >
      <Image
        width={56}
        height={56}
        src={item.imgSrc}
        className="object-fit-contain icon-2"
        alt={item.title}
      />
    </div>
  );
};

export default DraggableItem;
