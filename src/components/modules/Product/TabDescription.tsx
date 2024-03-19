import React from "react";

export default function TabDescription({ product }) {
  return (
    <div className="font-light">
      {/* Torba została wykonana z wysokiej jakości tkaniny imitującej len. */}
      {product.description &&
        product.description.map((block, blockIndex) => (
          <React.Fragment key={blockIndex}>
            {block.children.map((child, childIndex) => (
              <p key={childIndex}>{child.text}</p>
            ))}
          </React.Fragment>
        ))}
    </div>
  );
}
