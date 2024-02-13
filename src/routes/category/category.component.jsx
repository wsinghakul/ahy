import {CategoryCon,CategoryTitle} from './category.styles.jsx'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState , Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const  {category} = useParams();
  const { categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => setProducts(categoriesMap[category]),[category,categoriesMap

  ])
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryCon>
        { products &&
            products.map((product) => <ProductCard key={product.id} product={product} />) 
        }
    </CategoryCon>
    </Fragment>
    
  )
}

export default Category