import { useCallback, useRef } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  reconnectEdge,
} from "reactflow";
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
          <h6 className="mb-1 fw-bold">Environment</h6>
          <p className="mb-0">(May cause damage to the aquatic environment)</p>
        </>
      ),
    },
    position: { x: 40, y: 50 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "2",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Skull and Crossbones</h6>
          <p className="mb-0">
            (Can cause death or toxicity with short exposure to small amounts)
          </p>
        </>
      ),
    },
    position: { x: 40, y: 150 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "3",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Exclamation Mark</h6>
          <p className="mb-0">
            (May cause less serious health effects or damages the ozone layer)
          </p>
        </>
      ),
    },
    position: { x: 40, y: 250 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "4",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Corrosion</h6>
          <p className="mb-0">
            (For corrosive damage to metals as well as skin, eyes)
          </p>
        </>
      ),
    },
    position: { x: 40, y: 350 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "5",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Flame</h6>
          <p className="mb-0">(For fire hazard)</p>
        </>
      ),
    },
    position: { x: 40, y: 450 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "6",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Exploding Bomb</h6>
          <p className="mb-0">(For explosion or reactivity hazard)</p>
        </>
      ),
    },
    position: { x: 40, y: 550 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "7",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Flame over Circle</h6>
          <p className="mb-0">(For oxidizing hazard)</p>
        </>
      ),
    },
    position: { x: 40, y: 650 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "8",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Cylinder Gas</h6>
          <p className="mb-0">(For gases under pressure)</p>
        </>
      ),
    },
    position: { x: 40, y: 750 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "9",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Health Hazard</h6>
          <p className="mb-0">
            (May cause or suspect of causing serious health effects)
          </p>
        </>
      ),
    },
    position: { x: 40, y: 850 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "10",
    type: "input",
    data: {
      label: (
        <>
          <h6 className="mb-1 fw-bold">Bio-hazardous Infectious Materials</h6>
          <p className="mb-0">
            (For organisms or toxins that can cause disease in people or
            animals)
          </p>
        </>
      ),
    },
    position: { x: 40, y: 950 },
    sourcePosition: "right",
    draggable: false,
  },
  {
    id: "icon-1",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-1.png",
    },

    position: { x: 770, y: 50 },
    draggable: false,
  },
  {
    id: "icon-2",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-2.png",
    },
    position: { x: 770, y: 150 },
    draggable: false,
  },
  {
    id: "icon-3",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-3.png",
    },
    position: { x: 770, y: 250 },
    draggable: false,
  },
  {
    id: "icon-4",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-4.png",
    },
    position: { x: 770, y: 350 },
    draggable: false,
  },
  {
    id: "icon-5",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-5.png",
    },
    position: { x: 770, y: 450 },
    draggable: false,
  },
  {
    id: "icon-6",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-6.png",
    },
    position: { x: 770, y: 550 },
    draggable: false,
  },
  {
    id: "icon-7",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-7.png",
    },
    position: { x: 770, y: 650 },
    draggable: false,
  },
  {
    id: "icon-8",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-8.png",
    },
    position: { x: 770, y: 750 },
    draggable: false,
  },
  {
    id: "icon-9",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-9.png",
    },
    position: { x: 770, y: 850 },
    draggable: false,
  },
  {
    id: "icon-10",
    type: "custom",
    data: {
      label: "/assets/images/m-icon-10.png",
    },
    position: { x: 770, y: 950 },
    draggable: false,
  },
];

const CustomNodeFlow = ({ setWdata, wdata }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const getSecondPart = (str) => str.split("-")[1];

  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find((node) => node.id === params.source);
      const targetNode = nodes.find(
        (node) => node.id === getSecondPart(params.target)
      );

      if (sourceNode?.type !== "custom" && targetNode?.type !== "custom") {
        setEdges((eds) => addEdge(params, eds));
        console.log("Connect:", params);

        const newEdge = [params.source, getSecondPart(params.target)];
        setWdata((prevWdata) => {
          const updatedEdges = [...prevWdata, newEdge];
          const uniqueEdges = updatedEdges.filter(
            (value, index, self) =>
              index ===
              self.findIndex((e) => e[0] === value[0] && e[1] === value[1])
          );
          console.log("Unique edges:", uniqueEdges);
          return uniqueEdges;
        });
      } else {
        console.log("Edge not added. Condition not met.");
      }
    },
    [nodes, setEdges, setWdata]
  );

  const edgeReconnectSuccessful = useRef(true);

  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback(
    (oldEdge, newConnection) => {
      const sourceNode = nodes.find((node) => node.id === newConnection.source);
      const targetNode = nodes.find(
        (node) => node.id === getSecondPart(newConnection.target)
      );

      if (sourceNode?.type !== "custom" && targetNode?.type !== "custom") {
        edgeReconnectSuccessful.current = true;
        setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
        console.log("Reconnected:", newConnection.source, newConnection.target);

        const newEdge = [
          newConnection.source,
          getSecondPart(newConnection.target),
        ];
        setWdata((prevWdata) => {
          const updatedEdges = [...prevWdata, newEdge];
          const uniqueEdges = updatedEdges.filter(
            (value, index, self) =>
              index ===
              self.findIndex((e) => e[0] === value[0] && e[1] === value[1])
          );
          console.log("Unique edges:", uniqueEdges);
          return uniqueEdges;
        });
      } else {
        console.log("Reconnection not performed. Condition not met.");
      }
    },
    [nodes, setEdges, setWdata]
  );

  const onReconnectEnd = useCallback(
    (_, edge) => {
      if (!edgeReconnectSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
      edgeReconnectSuccessful.current = true;
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
      panOnDrag={false}
      zoomOnScroll={false}
      preventScrolling={false}
      zoomOnPinch={false}
      panOnScroll={false}
      onReconnect={onReconnect}
      onReconnectStart={onReconnectStart}
      onReconnectEnd={onReconnectEnd}
      
      // zoomOnPinch={true}
      // fitView
    />
  );
};

export default CustomNodeFlow;
