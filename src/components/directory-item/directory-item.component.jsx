import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx";
import "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const navigationHandler = () => navigate(route)
  const { title, imageUrl, route } = category;
  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <BackgroundImage
      imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
