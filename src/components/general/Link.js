import React from 'react';

const Link = ({ url }) => {
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
