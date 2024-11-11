import "./gallery-item.scss";

import Image from "../Image/Image";
const GalleryItem = ({ src }) => {
  return <Image className={"gallery-item"} src={src} />;
};
export default GalleryItem;
