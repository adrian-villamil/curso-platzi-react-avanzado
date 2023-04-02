import * as React from "react";
import { Svg } from "./styles";

export const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={351.238}
    height={118.4}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "0 0",
    }}
    viewBox="74.381 15.8 351.238 118.4"
    {...props}
  >
    <defs>
      <linearGradient
        id="editing-gradow-gradient"
        x1={0}
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#b500b5" />
        <stop offset={1} stopColor="#ff8c00" />
      </linearGradient>
      <filter
        id="editing-gradow-filter"
        width="300%"
        height="300%"
        x="-100%"
        y="-100%"
      >
        <feFlood floodColor="rgba(0%,0%,0%,0)" result="flood" />
        <feComposite
          in="flood"
          in2="SourceAlpha"
          operator="in"
          result="shadow"
        />
        <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
        <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
        <feMerge>
          <feMergeNode in="offset-2" />
          <feMergeNode in="offset-1" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#editing-gradow-filter)">
      <path
        fill="url(#editing-gradow-gradient)"
        d="M10.47-27.25v20.56Q13.88-5 18.06-5q10.22 0 10.22-12.28Q28.28-28 18.13-28q-4.38 0-7.66.75ZM4.69 11.88v-43.35q6.53-1.34 13.5-1.34 15.78 0 15.78 15.59Q33.97 0 18.09 0q-3.93 0-7.62-1.56v13.44H4.69Zm50.62-44.69q14 0 14 13.84 0 1.97-.28 4.22H46Q46-4.69 57.75-4.69q5.59 0 9.94-1.25v4.69Q63.34 0 57.13 0 40.22 0 40.22-16.78q0-16.03 15.09-16.03ZM46-19.56h17.75q-.19-8.63-8.44-8.63-8.75 0-9.31 8.63ZM77.09-8.84v-29.29h3.63l1.25 5.32h8.87v4.68h-7.96v18.85q0 4.59 3.96 4.59h4V0h-5.5q-8.25 0-8.25-8.84Zm43.04 2.15v-20.56q-2.97-.75-7.35-.75-10.47 0-10.47 11.34Q102.31-5 112.22-5q4.5 0 7.91-1.69Zm5.78-24.78V0q0 11.88-15.1 11.88-6.06 0-10.75-1.57V5.63q4.78 1.56 10.82 1.56 9.25 0 9.25-7.19v-1.56Q116.44 0 112.19 0 96.63 0 96.63-16.59q0-16.22 16.4-16.22 6.66 0 12.88 1.34ZM141.06 0h-5.78v-32.81h3.91l1.03 4.18q4.31-4.18 10.37-4.18V-28q-5.87 0-9.53 4.16V0Zm13.75-9.91q0-10.09 13.32-10.09 4.28 0 8.56.62v-3.09q0-5.66-8.85-5.66-5.06 0-10.37 1.57v-4.69q5.31-1.56 10.37-1.56 14.63 0 14.63 10.18V0h-3.25l-2-3.25Q172.31 0 166.53 0q-11.72 0-11.72-9.91Zm13.32-5.4q-7.54 0-7.54 5.31t5.94 5.31q6 0 10.16-3.19v-6.81q-4.28-.62-8.56-.62ZM197.63 0h-5.79v-32.81h3.91l.97 4.12q4.72-4.12 10.28-4.12 7.13 0 9.72 4.5 5.34-4.5 10.84-4.5 11.32 0 11.32 12.47V0h-5.79v-20.66q0-7.34-6.18-7.34-4.63 0-8.66 4.25V0h-5.78v-20.56q0-7.44-6.13-7.44-4.87 0-8.71 4.25V0Z"
        transform="translate(128.215 100.005)"
      />
    </g>
    <style />
  </Svg>
);