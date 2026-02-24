import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import { getUserVotedProductIds } from "@/lib/products/vote-queries";
import { CompassIcon } from "lucide-react";

export default async function ExplorePage() {
  const [products, votedProductIds] = await Promise.all([ getAllApprovedProducts(), getUserVotedProductIds(), ]);

  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader title="Explore All Products" icon={CompassIcon} description="Browse and discover amazing projects from our community" />
        </div>
        <ProductExplorer products={products} votedProductIds={Array.from(votedProductIds)} />
      </div>
    </div>
  );
}
