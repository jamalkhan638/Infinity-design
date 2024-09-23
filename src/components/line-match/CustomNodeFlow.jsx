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
          <h6 className="mb-1 fw-bold">Gas Cylinder</h6>
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
  const initialEdges = [
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[0]?.length > 0 && wdata[0][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[0]?.length > 0 && wdata[0][1] && wdata[0][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[1]?.length > 0 && wdata[1][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[1]?.length > 0 && wdata[1][1] && wdata[1][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[2]?.length > 0 && wdata[2][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[2]?.length > 0 && wdata[2][1] && wdata[2][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[3]?.length > 0 && wdata[3][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[3]?.length > 0 && wdata[3][1] && wdata[3][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[4]?.length > 0 && wdata[4][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[4]?.length > 0 && wdata[4][1] && wdata[4][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[5]?.length > 0 && wdata[5][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[5]?.length > 0 && wdata[5][1] && wdata[5][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[6]?.length > 0 && wdata[6][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[6]?.length > 0 && wdata[6][1] && wdata[6][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[7]?.length > 0 && wdata[7][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[7]?.length > 0 && wdata[7][1] && wdata[7][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[8]?.length > 0 && wdata[8][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[8]?.length > 0 && wdata[8][1] && wdata[8][1]
      }`, // To node with id '2'
      type: "default",
    },
    {
      id: "e1-2",
      source: `${wdata?.length > 0 && wdata[9]?.length > 0 && wdata[9][0]}`, // Connects node with id '1'
      target: `icon-${
        wdata?.length > 0 && wdata[9]?.length > 0 && wdata[9][1] && wdata[9][1]
      }`, // To node with id '2'
      type: "default",
    },
  ];

  console.log("initital node", initialEdges, wdata);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Maps to track connections
  const descriptionToSymbolMap = useRef(new Map());
  const symbolToDescriptionMap = useRef(new Map());

  const getSecondPart = (str) => str.split("-")[1];

  const updateWdataEdges = useCallback(
    (newEdge) => {
      setWdata((prevWdata) => {
        const updatedEdges = [...prevWdata, newEdge];
        const uniqueEdges = updatedEdges.filter(
          (value, index, self) =>
            index ===
            self.findIndex((e) => e[0] === value[0] && e[1] === value[1])
        );
        return uniqueEdges;
      });
    },
    [setWdata]
  );

  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find((node) => node.id === params.source);
      const targetNode = nodes.find(
        (node) => node.id === getSecondPart(params.target)
      );

      if (sourceNode?.type !== "custom" && targetNode?.type !== "custom") {
        const targetId = getSecondPart(params.target);

        // Check if the source node is already connected to a symbol
        if (descriptionToSymbolMap.current.has(params.source)) {
          console.log("Source node already has a connection.");
          return;
        }

        // Check if the target node is already connected to a description
        if (symbolToDescriptionMap.current.has(targetId)) {
          console.log("Target node already has a connection.");
          return;
        }

        // Add edge
        setEdges((eds) => addEdge(params, eds));
        console.log("Connect:", params);

        // Update mappings
        descriptionToSymbolMap.current.set(params.source, targetId);
        symbolToDescriptionMap.current.set(targetId, params.source);

        updateWdataEdges([params.source, targetId]);
      } else {
        console.log("Edge not added. Condition not met.");
      }
    },
    [nodes, setEdges, updateWdataEdges]
  );

  const onReconnectStart = useCallback(() => {
    // Placeholder for potential logic when reconnection starts
  }, []);

  const onReconnect = useCallback(
    (oldEdge, newConnection) => {
      const sourceNode = nodes.find((node) => node.id === newConnection.source);
      const targetNode = nodes.find(
        (node) => node.id === getSecondPart(newConnection.target)
      );

      if (sourceNode?.type !== "custom" && targetNode?.type !== "custom") {
        // Remove old mappings
        const oldSource = oldEdge.source;
        const oldTarget = getSecondPart(oldEdge.target);

        if (descriptionToSymbolMap.current.get(oldSource) === oldTarget) {
          descriptionToSymbolMap.current.delete(oldSource);
        }

        if (symbolToDescriptionMap.current.get(oldTarget) === oldSource) {
          symbolToDescriptionMap.current.delete(oldTarget);
        }

        // Add new edge
        setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
        console.log("Reconnected:", newConnection.source, newConnection.target);

        const newEdge = [
          newConnection.source,
          getSecondPart(newConnection.target),
        ];

        // Update mappings
        descriptionToSymbolMap.current.set(
          newConnection.source,
          getSecondPart(newConnection.target)
        );
        symbolToDescriptionMap.current.set(
          getSecondPart(newConnection.target),
          newConnection.source
        );

        updateWdataEdges(newEdge);
      } else {
        console.log("Reconnection not performed. Condition not met.");
      }
    },
    [nodes, setEdges, updateWdataEdges]
  );

  const onReconnectEnd = useCallback((_, edge) => {
    // Placeholder for potential logic when reconnection ends
  }, []);

  const onEdgeRemove = useCallback(
    (edgeToRemove) => {
      // Remove edge
      setEdges((eds) => eds.filter((e) => e.id !== edgeToRemove.id));

      // Update mappings
      const source = edgeToRemove.source;
      const target = getSecondPart(edgeToRemove.target);

      if (descriptionToSymbolMap.current.get(source) === target) {
        descriptionToSymbolMap.current.delete(source);
      }

      if (symbolToDescriptionMap.current.get(target) === source) {
        symbolToDescriptionMap.current.delete(target);
      }

      // Update wdata
      setWdata((prevWdata) =>
        prevWdata.filter((e) => !(e[0] === source && e[1] === target))
      );
    },
    [setEdges, setWdata]
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
      zoomOnDoubleClick={false}  // Disable zoom on double click
      elementsSelectable={false} // Optional: Disable selecting elements
      onReconnect={onReconnect}
      onReconnectStart={onReconnectStart}
      onReconnectEnd={onReconnectEnd}
      onEdgeRemove={onEdgeRemove} // Add this to handle edge removal
    />
  );
};

export default CustomNodeFlow;
