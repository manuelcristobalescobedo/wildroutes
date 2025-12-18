import React from "react";

export default function Visibilidad(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M10.0003 13.5C10.9725 13.5 11.7989 13.1597 12.4795 12.4792C13.16 11.7986 13.5003 10.9722 13.5003 10C13.5003 9.02778 13.16 8.20139 12.4795 7.52083C11.7989 6.84028 10.9725 6.5 10.0003 6.5C9.0281 6.5 8.20171 6.84028 7.52116 7.52083C6.8406 8.20139 6.50033 9.02778 6.50033 10C6.50033 10.9722 6.8406 11.7986 7.52116 12.4792C8.20171 13.1597 9.0281 13.5 10.0003 13.5Z"/>
    </svg>
  );
}
