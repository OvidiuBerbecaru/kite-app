import React from 'react';

export const UserIcon = (props) => {
  return (
    <svg width={27} height={27} viewBox="0 0 27 27" {...props}>
      <title>{"Shape"}</title>
      <defs>
        <filter id="prefix__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.796078 0 0 0 0 0.796078 0 0 0 0 0.796078 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        transform="translate(-575 -421)"
        filter="url(#prefix__a)"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M588.5 434.5c3.73 0 6.75-3.02 6.75-6.75s-3.02-6.75-6.75-6.75-6.75 3.02-6.75 6.75 3.02 6.75 6.75 6.75zm0 3.375c-4.506 0-13.5 2.261-13.5 6.75V448h27v-3.375c0-4.489-8.994-6.75-13.5-6.75z"
          fill="#CBCBCB"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};