/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg" {
	import * as React from "react";
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
}