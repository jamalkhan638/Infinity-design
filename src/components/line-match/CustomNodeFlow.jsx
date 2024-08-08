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
          <h6 className="mb-1 fw-bold fs-8">Environment</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">
            (May cause damage to the aquatic environment)
          </p>
        </>
      ),
    },
    position: { x: 50, y: 0 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "2",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Skull and Crossbones</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">
            (Can cause death or toxicity with short exposure to small amounts)
          </p>
        </>
      ),
    },
    position: { x: 50, y: 100 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "3",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Exclamation Mark</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">
            (May cause less serious health effects or damages the ozone layer)
          </p>
        </>
      ),
    },
    position: { x: 50, y: 200 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "4",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Corrosion</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">
            (For corrosive damage to metals as well as skin, eyes)
          </p>
        </>
      ),
    },
    position: { x: 50, y: 300 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "5",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Flame</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">(For fire hazard)</p>
        </>
      ),
    },
    position: { x: 50, y: 400 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "6",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Exploding Bomb</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">
            (For explosion or reactivity hazard)
          </p>
        </>
      ),
    },
    position: { x: 50, y: 500 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "7",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Flame over Circle</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">(For oxidizing hazard)</p>
        </>
      ),
    },
    position: { x: 50, y: 600 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "8",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Cylinder Gas</h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">(For gases under pressure)</p>
        </>
      ),
    },
    position: { x: 50, y: 700 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "9",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-8">Health Hazard</h6>
          <p  style={{fontSize: "9px"}} className="mb-0 small-text-1">
            (May cause or suspect of causing serious health effects)
          </p>
        </>
      ),
    },
    position: { x: 50, y: 800 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "10",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold fs-7">
            Bio-hazardous Infectious Materials
          </h6>
          <p style={{fontSize: "9px"}} className="mb-0 small-text-1">
            (For organisms or toxins that can cause disease in people or
            animals)
          </p>
        </>
      ),
    },
    position: { x: 50, y: 900 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "icon-1",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-1.png",
   
    },

  
    position: { x: 400, y: 0 },
    draggable: false,
  },
  {
    id: "icon-2",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-2.png",
    },
    position: { x: 400, y: 100 },
    draggable: false,
  },
  {
    id: "icon-3",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-3.png",
    },
    position: { x: 400, y: 200 },
    draggable: false,
  },
  {
    id: "icon-4",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-4.png",
    },
    position: { x: 400, y: 300 },
    draggable: false,
  },
  {
    id: "icon-5",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-5.png",
    },
    position: { x: 400, y: 400 },
    draggable: false,
  },
  {
    id: "icon-6",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-6.png",
    },
    position: { x: 400, y: 500 },
    draggable: false,
  },
  {
    id: "icon-7",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-7.png",
    },
    position: { x: 400, y: 600 },
    draggable: false,
  },
  {
    id: "icon-8",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-8.png",
    },
    position: { x: 400, y: 700 },
    draggable: false,
  },
  {
    id: "icon-9",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-9.png",
    },
    position: { x: 400, y: 800 },
    draggable: false,
  },
  {
    id: "icon-10",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-10.png",
    },
    position: { x: 400, y: 900 },
    draggable: false,
  },
];

const CustomNodeFlow = ({setWdata}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  function getSecondPart(str) {
    return str.split('-')[1];
}
   let g = []
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      console.log("Connect:", params);
      let m = []
      m[0] = params.source
      m[1] = getSecondPart(params.target)
      g.push(m)
      console.log("gg", g)
      setWdata(g)
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
      panOnDrag= {false}
      // panOnScroll= {true}
      zoomOnScroll= {false}
      preventScrolling = {false}
      zoomOnPinch = {false}
      // zoomOnScroll={false}
      panOnScroll={false}
      // preventScrolling={false}
    />
  );
};

export default CustomNodeFlow;
