import React from "react";

interface LinkProps {
  url: string;
}

const Link: React.FC<LinkProps> = ({ url }) => {
  return (
    <a
      href={url}
      className="link"
      target="_blank"
      rel="noopener noreferrer"
      // :class="{ 'link--outlined': outlined }"
    >
      <slot />
    </a>
  );
};

export default Link;
