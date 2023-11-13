"use client";

import { SearchResult } from "./page";
import { CldImage } from "next-cloudinary";
import { Heart } from "@/components/icons/heart"

import { setAsFavoriteAction } from "./actions";
import { useTransition } from "react";
import { FullHeart } from "@/components/icons/full-heart";


export default function GalleryGrid(props: any & { imageData: SearchResult }) {
    const [transiton, setTransition] = useTransition()
    const { imageData } = props
    const isFavorite = imageData.tags.includes("favorite")
    return (
        <div className="relative">
            <CldImage {...imageData} />
            {isFavorite ? (
                <FullHeart onClick={() => {
                    setTransition(() => {
                        setAsFavoriteAction(imageData.public_id, false)
                    })
                }}
                    className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
                />
            )
                :
                (<Heart onClick={() => {
                    setTransition(() => {
                        setAsFavoriteAction(imageData.public_id, false)
                    })
                }}
                    className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" />
                )}
        </div>

    );
}