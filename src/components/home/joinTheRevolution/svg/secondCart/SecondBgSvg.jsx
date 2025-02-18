const SecondBgSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="427"
      height="550"
      viewBox="0 0 427 550"
      fill="none"
    >
      <g filter="url(#filter0_i_1_901)">
        <rect y="0.5" width="426.667" height="549" rx="20" fill="#25085F" />
      </g>
      <rect
        x="0.5"
        y="1"
        width="425.667"
        height="548"
        rx="19.5"
        stroke="#9A42FF"
      />
      <defs>
        <filter
          id="filter0_i_1_901"
          x="0"
          y="0.5"
          width="432.667"
          height="551"
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
            result="effect1_innerShadow_1_901"
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
            result="effect1_innerShadow_1_901"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SecondBgSvg;
