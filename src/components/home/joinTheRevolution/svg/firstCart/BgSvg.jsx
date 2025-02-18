const BgSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="427"
      height="550"
      viewBox="0 0 427 550"
      fill="none"
    >
      <g filter="url(#filter0_i_1_900)">
        <path
          d="M0 20.5C0 9.45431 8.9543 0.5 20 0.5H406.667C417.712 0.5 426.667 9.4543 426.667 20.5V529.5C426.667 540.546 417.712 549.5 406.667 549.5H20C8.95428 549.5 0 540.546 0 529.5V20.5Z"
          fill="#040128"
        />
      </g>
      <path
        d="M0.5 20.5C0.5 9.73045 9.23045 1 20 1H406.667C417.436 1 426.167 9.73045 426.167 20.5V529.5C426.167 540.27 417.436 549 406.667 549H20C9.23042 549 0.5 540.27 0.5 529.5V20.5Z"
        stroke="#262346"
      />
      <defs>
        <filter
          id="filter0_i_1_900"
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
            result="effect1_innerShadow_1_900"
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
            result="effect1_innerShadow_1_900"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BgSvg;
