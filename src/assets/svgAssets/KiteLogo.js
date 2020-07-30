import React from 'react';

export const KiteLogo = (props) => {
  return (
    <svg width={113} height={58} viewBox="0 0 113 58" {...props}>
      <title>{"Group 2"}</title>
      <defs>
        <path
          d="M38.5 0C59.763 0 77 8.078 77 15.576c0 .144-.006.285-.019.423-9.629-3.38-23.39-5.896-38.67-5.896-15.086 0-28.692 2.452-38.302 5.768A4.817 4.817 0 010 15.576C0 8.078 17.237 0 38.5 0z"
          id="prefix__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <text fontFamily="GillSans, Gill Sans" fontSize={50} fill="#969696">
          <tspan x={0} y={46}>
            {"K"}
          </tspan>
        </text>
        <text fontFamily="GillSans, Gill Sans" fontSize={30} fill="#969696">
          <tspan x={46} y={46}>
            {"I"}
          </tspan>
        </text>
        <text fontFamily="GillSans, Gill Sans" fontSize={30} fill="#969696">
          <tspan x={67} y={46}>
            {"T"}
          </tspan>
        </text>
        <text fontFamily="GillSans, Gill Sans" fontSize={30} fill="#969696">
          <tspan x={95} y={46}>
            {"E"}
          </tspan>
        </text>
        <g transform="translate(36 6)">
          <mask id="prefix__b" fill="#fff">
            <use xlinkHref="#prefix__a" />
          </mask>
          <use fill="#D8D8D8" xlinkHref="#prefix__a" />
          <g mask="url(#prefix__b)">
            <path fill="#D8D8D8" d="M0-3h66v27H0z" />
            <path
              fill="#FFBBA5"
              d="M0-3h11v27H0zM22-3h11v27H22zM44-3h11v27H44zM66-3h11v27H66z"
            />
            <path
              fill="#FF8E69"
              d="M11-3h11v27H11zM33-3h11v27H33zM55-3h11v27H55z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};