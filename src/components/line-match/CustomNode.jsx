import React, { memo } from "react";
import { Position } from "reactflow";
import CustomHandle from "./CustomHandle";
import Image from "next/image";

const CustomNode = ({ data }) => {
  return (
    <div className="react-flow__node-default">
      <CustomHandle type="target" position={Position.Left} isConnectable={1} />
      <div>
        <Image
          width={30}
          height={30}
          src={data.label}
          className="object-fit-contain"
          alt="symbol-icon"
        />
      </div>
    </div>
  );
};

export default memo(CustomNode);
