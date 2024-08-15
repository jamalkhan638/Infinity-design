import { useCallback, useState } from "react";
import ReactFlow, { addEdge, useNodesState, useEdgesState } from "reactflow";

import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Environment</h5>
          <p className="mb-0">(May cause damage to the aquatic environment)</p>
        </>
      ),
    },
    position: { x: 500, y: 0 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "2",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Skull and Crossbones</h5>
          <p className="mb-0">
            (Can cause death or toxicity with short exposure to small amounts)
          </p>
        </>
      ),
    },
    position: { x: 500, y: 100 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "3",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Exclamation Mark</h5>
          <p className="mb-0">
            (May cause less serious health effects or damages the ozone layer)
          </p>
        </>
      ),
    },
    position: { x: 500, y: 200 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "4",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Corrosion</h5>
          <p className="mb-0">
            (For corrosive damage to metals as well as skin, eyes)
          </p>
        </>
      ),
    },
    position: { x: 500, y: 300 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "5",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Flame</h5>
          <p className="mb-0">(For fire hazard)</p>
        </>
      ),
    },
    position: { x: 500, y: 400 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "6",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Exploding Bomb</h5>
          <p className="mb-0">(For explosion or reactivity hazard)</p>
        </>
      ),
    },
    position: { x: 500, y: 500 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "7",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Flame over Circle</h5>
          <p className="mb-0">(For oxidizing hazard)</p>
        </>
      ),
    },
    position: { x: 500, y: 600 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "8",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Cylinder Gas</h5>
          <p className="mb-0">(For gases under pressure)</p>
        </>
      ),
    },
    position: { x: 500, y: 700 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "9",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Health Hazard</h5>
          <p className="mb-0">
            (May cause or suspect of causing serious health effects)
          </p>
        </>
      ),
    },
    position: { x: 500, y: 800 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "10",
    type: "input",
    data: {
      label: (
        <>
          <h5 className="mb-1 fw-bold">Bio-hazardous Infectious Materials</h5>
          <p className="mb-0">
            (For organisms or toxins that can cause disease in people or
            animals)
          </p>
        </>
      ),
    },
    position: { x: 500, y: 900 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "icon-1",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-1.png",
    },

    position: { x: 1000, y: 0 },
    draggable: false,
  },
  {
    id: "icon-2",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-2.png",
    },
    position: { x: 1000, y: 100 },
    draggable: false,
  },
  {
    id: "icon-3",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-3.png",
    },
    position: { x: 1000, y: 200 },
    draggable: false,
  },
  {
    id: "icon-4",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-4.png",
    },
    position: { x: 1000, y: 300 },
    draggable: false,
  },
  {
    id: "icon-5",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-5.png",
    },
    position: { x: 1000, y: 400 },
    draggable: false,
  },
  {
    id: "icon-6",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-6.png",
    },
    position: { x: 1000, y: 500 },
    draggable: false,
  },
  {
    id: "icon-7",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-7.png",
    },
    position: { x: 1000, y: 600 },
    draggable: false,
  },
  {
    id: "icon-8",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-8.png",
    },
    position: { x: 1000, y: 700 },
    draggable: false,
  },
  {
    id: "icon-9",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-9.png",
    },
    position: { x: 1000, y: 800 },
    draggable: false,
  },
  {
    id: "icon-10",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-10.png",
    },
    position: { x: 1000, y: 900 },
    draggable: false,
  },
];

const CustomNodeFlow = ({ setWdata }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  function getSecondPart(str) {
    return str.split("-")[1];
  }
  let g = [];
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      console.log("Connect:", params);
      let m = [];
      m[0] = params.source;
      m[1] = getSecondPart(params.target);
      g.push(m);
      console.log("gg", g);
      setWdata(g);
    },

    [setEdges]
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      className="touchdevice-flow"
      fitView
      panOnDrag={true}
      // panOnScroll= {true}
      zoomOnScroll={true}
      preventScrolling={false}
      zoomOnPinch={true}
      // zoomOnScroll={false}
      panOnScroll={false}
      // preventScrolling={false}
    />
  );
};

export default CustomNodeFlow;
