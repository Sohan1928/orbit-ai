const RectangleSvg19 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="514"
      height="538"
      viewBox="0 0 514 538"
      fill="none"
    >
      <g filter="url(#filter0_i_1_872)">
        <rect y="0.5" width="514" height="537" rx="20" fill="#040128" />
      </g>
      <rect x="0.5" y="1" width="513" height="536" rx="19.5" stroke="#262346" />
      <defs>
        <filter
          id="filter0_i_1_872"
          x="0"
          y="0.5"
          width="520"
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
            result="effect1_innerShadow_1_872"
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
            result="effect1_innerShadow_1_872"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default RectangleSvg19;
