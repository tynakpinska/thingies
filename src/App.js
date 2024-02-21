import Header from "./Components/Header";
import Card from "./Components/Card";

import { useGetProductsQuery } from "./redux/shopApi";

const App = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  let productsList = [];

  if (isLoading) {
    productsList = <p>Loading...</p>;
  } else if (isSuccess) {
    data.forEach((product) => {
      if (productsList.length < 20) {
        productsList.push(<Card product={product} key={product.id} />);
      }
    });
  } else if (isError) {
    productsList = <p>{error}</p>;
  }

  return (
    <div className="container-fluid text-center p-2">
      <Header />
      <div className="row justify-content-center">{productsList}</div>
    </div>
  );
};

export default App;
