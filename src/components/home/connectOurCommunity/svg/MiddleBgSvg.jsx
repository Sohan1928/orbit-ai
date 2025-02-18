const MiddleBgSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="395"
      height="367"
      viewBox="0 0 395 367"
      fill="none"
    >
      <g filter="url(#filter0_di_1_1208)">
        <rect x="74" y="70" width="247" height="219" rx="20" fill="#040128" />
      </g>
      <defs>
        <filter
          id="filter0_di_1_1208"
          x="0.900002"
          y="0.900002"
          width="393.2"
          height="365.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_1208"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="35.05" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.521569 0 0 0 0 0.105882 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1208"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1208"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.521569 0 0 0 0 0.105882 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1_1208"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MiddleBgSvg;
