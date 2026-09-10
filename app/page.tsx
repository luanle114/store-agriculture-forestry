import { StoreLayout, Slideshow, Section } from "./components";
import { products } from "./data";
export default function Home() {
  return (
    <StoreLayout>
      <main className="container">
        <Slideshow />
        <Section
          title="HÀNG MỚI VỀ"
          items={products.slice(0, 4)}
          sidebar={false}
        />
        <Section title="GIA VỊ NẤU ĂN" items={products.slice(4, 12)} />
        <Section
          title="RƯỢU NẤU ĂN - COOKING WINE"
          items={products.slice(8, 13)}
        />
        <Section
          title="GIA VỊ NẤU LẨU / HOT POT SPICES"
          items={products.slice(12, 16)}
        />
      </main>
    </StoreLayout>
  );
}
