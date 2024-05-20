import { headers } from "next/headers";

let viewport: string | null = null;

export default function fetchViewport() {
    const headerList = headers();
    viewport = headerList.get("viewport");
    return viewport;
};


  