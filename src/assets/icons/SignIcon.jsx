import * as React from "react"
const SignIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      fill="#BDC4CD"
      fillRule="evenodd"
      d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22Z"
      clipRule="evenodd"
    />
    <mask
      id="a"
      width={44}
      height={44}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#DEE2E7"
        d="m17.151 33.801-5.805 3.122c-.34.183-3.034 1.276-3.319 1.522 5.388 4.056 10.142 4.96 14.916 4.96 4.739 0 9.952-2.58 13.328-5.355-.312-.26-1.522-.902-1.897-1.085L28.158 33.9a2.334 2.334 0 0 1-1.31-2.09v-2.405c.174-.196.373-.448.587-.746a14.025 14.025 0 0 0 1.933-3.84c.797-.242 1.385-.968 1.385-1.83V20.42c0-.564-.255-1.069-.651-1.422v-3.711s.773-5.775-7.159-5.775c-7.932 0-7.159 5.775-7.159 5.775v3.71c-.396.354-.65.858-.65 1.423v2.567c0 .676.36 1.271.9 1.615.65 2.792 2.354 4.802 2.354 4.802v2.345c0 .855-.475 1.641-1.237 2.051Z"
      />
    </g>
  </svg>
)
export default SignIcon
