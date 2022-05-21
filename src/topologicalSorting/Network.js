import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone/esm/vis-network";

const VisNetwork = (props) => {
  const domNode = useRef(null);

  const network = useRef(null);

  const options = {
    autoResize: true,
    locale: "en",
    clickToUse: false,
    edges: {
      arrows: {
        to: {
          enabled: true,
        },
      },
      color: {
        color: "#1168d9",
        highlight: "#051d38",
      },
    },
    nodes: {
      color: {
        background: "#1e2431",
        border: "#1e2431",
        highlight: {
          background: "#1e2431",
          border: "#1e2431",
        },
      },
      shape: "circle",
      font: {
        color: "#cfddef",
      },
    },
  };

  useEffect(() => {
    network.current = new Network(domNode.current, props.value1, options);
  }, [domNode, network, props.value1, options]);

  return <div className="mainDiv" ref={domNode} />;
};

export default VisNetwork;
