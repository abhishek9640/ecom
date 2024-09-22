import BannerSlider from './components/BannerSlider';
import ProductList from './components/ProductList';
import CategorySlider from './components/TopCategory';

export default function HomePage() {
  return (
    <div>
      <BannerSlider />
      {/* Add other content below the slider */}
      <div className="mt-4 m-5">
      <ProductList />
    <CategorySlider />
    </div>
    </div>
  );
}
