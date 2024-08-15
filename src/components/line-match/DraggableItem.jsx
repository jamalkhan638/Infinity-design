import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Image from "next/image";

const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  // useDrag hook to handle the drag state
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // useDrop hook to handle the drop state and item reordering
  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  // Combine drag and drop refs for better handling
  const ref = useRef(null);
  const combinedRef = (node) => {
    drag(drop(node));
    ref.current = node;
  };

  return (
    <div
      ref={combinedRef}
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
