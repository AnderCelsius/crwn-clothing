import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, CategoryTitle, Preview } from "./category-preview.styles";


const CategoryPreview = ({ title, category }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>
      <Preview>
        {category
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} title={title}/>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
