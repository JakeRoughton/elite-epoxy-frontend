import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "https://i.imgur.com/mXSVlKZ.jpg", width: 500, height: 400,},
    { src: "https://i.imgur.com/5YrczcT.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/OF9iy61.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/k97qjqN.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/ud7cdDr.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/oZn0BAp.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/6YDdBJy.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/JxEEWdL.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/sfEbWlm.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/A6X4YFQ.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/a45XDXN.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/za1osET.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/Td9RMwR.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/sO1TaB8.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/C9fThRh.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/g3PoQvx.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/pOVS278.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/NlHSQ4X.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/4nkL7ZW.jpg", width: 500, height: 400 },
    { src: "https://i.imgur.com/lfIxB2s.jpg", width: 500, height: 400 },
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}