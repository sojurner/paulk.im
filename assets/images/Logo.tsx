import React from 'react';

export const Logo: React.FC<
  React.SVGProps<SVGSVGElement> & { animate?: boolean }
> = ({ animate, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className={animate ? 'pk-logo--active' : 'pk-logo'}
      version="1"
      viewBox="0 0 202 136"
      {...props}
    >
      <g fill="#e2a013">
        <path
          fill="var(--chakra-colors-teal-300)"
          d="M40 1340V20h600v2640H40V1340z"
          className="pk-logo__path-1"
          transform="matrix(.05 0 0 -.05 0 136)"
        ></path>
        <path
          fill="var(--chakra-colors-blue-300)"
          d="M1252 2577c347-369 352-1138 8-1499-104-110-109-106 111-93 1057 64 1057 1630-1 1671l-200 8 82-87z"
          className="pk-logo__path-2"
          transform="matrix(.05 0 0 -.05 0 136)"
        ></path>
        <path
          fill="var(--chakra-colors-purple-300)"
          d="M2810 2629c158-117 295-313 351-505 32-106 12-117 293 156 130 127 276 264 325 305l88 75-548-1c-490 0-545-3-509-30z"
          className="pk-logo__path-3"
          transform="matrix(.05 0 0 -.05 0 136)"
        ></path>
        <path
          fill="var(--chakra-colors-pink-300)"
          d="M2635 1434c-230-218-222-180-80-361 63-81 187-248 275-372s235-328 326-453l167-228h340c217 0 338 7 334 20-7 18-215 307-808 1117-131 179-259 357-284 395-59 88-45 95-270-118z"
          className="pk-logo__path-4"
          transform="matrix(.05 0 0 -.05 0 136)"
        ></path>
      </g>
    </svg>
  );
};
