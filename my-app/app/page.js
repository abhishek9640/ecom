import BannerSlider from './components/BannerSlider';
import ProductList from './components/ProductList';

export default function HomePage() {
  return (
    <div>
      <BannerSlider />
      {/* Add other content below the slider */}
      <div className="container mt-4">
      <h1 className="text-center mb-4">Our Collection</h1>
      <ProductList />
    </div>
    </div>
  );
}
