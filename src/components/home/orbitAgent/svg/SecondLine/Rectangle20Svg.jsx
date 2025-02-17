const Rectangle20Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="790"
      height="538"
      viewBox="0 0 790 538"
      fill="none"
    >
      <g filter="url(#filter0_i_1_876)">
        <rect y="0.5" width="790" height="537" rx="20" fill="#040128" />
      </g>
      <rect x="0.5" y="1" width="789" height="536" rx="19.5" stroke="#262346" />
      <defs>
        <filter
          id="filter0_i_1_876"
          x="0"
          y="0.5"
          width="796"
          height="539"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="5"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_1_876"
          />
          <feOffset dx="6" dy="2" />
          <feGaussianBlur stdDeviation="17.95" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_876"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Rectangle20Svg;
