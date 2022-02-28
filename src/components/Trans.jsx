import React from "react";

// Hidden open sandbox button
function Trans() {
  const removeWatermark = () => {
    const ids = [];
    const iframes = document.body.querySelectorAll("iframe");
    for (const iframe of iframes) {
      if (iframe.id.startsWith("sb__open-sandbox")) ids.push(iframe.id);
    }
    for (const id of ids) {
      const node = document.createElement("div");
      node.style.setProperty("display", "none", "important");
      node.id = id;
      document.getElementById(id).remove();
      document.body.appendChild(node);
    }
  };

  setTimeout(removeWatermark, 1000);
  return <div></div>;
}

export default Trans;
