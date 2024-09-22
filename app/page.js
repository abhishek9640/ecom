import BannerSlider from './components/BannerSlider';
import ProductList from './components/ProductList';

export default function HomePage() {
  return (
    <div>
      <BannerSlider />
      {/* Add other content below the slider */}
      <div className="container mt-4">
      <ProductList />
    </div>
    </div>
  );
}
