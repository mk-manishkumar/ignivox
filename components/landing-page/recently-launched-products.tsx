import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";
import { getUserVotedProductIds } from "@/lib/products/vote-queries";

export default async function RecentlyLaunchedProducts() {
  const [recentlyLaunchedProducts, votedProductIds] = await Promise.all([ getRecentlyLaunchedProducts(), getUserVotedProductIds(), ]);

  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader title="Recently Launched" icon={RocketIcon} description="Discover the latest products from our community" />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} votedProductIds={votedProductIds} />
            ))}
          </div>
        ) : (
          <EmptyState message="No products launched in the last week. Check back soon for new launches." icon={CalendarIcon} />
        )}
      </div>
    </section>
  );
}