"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import { CldImage } from "next-cloudinary";

export default function GalleryGrid(props: any) {
    return (
        <CldImage
            {...props}
        />

    );
}