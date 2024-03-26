import PageWrapper from "@/components/utils/PageWrapper";
import Separator from "@/components/utils/Separator";
import ProductGallery from "@/components/layout/gallery/ProductGallery";
import {
  getColors,
  getDescription,
  getProductById,
  getProducts,
  getProductsByIds,
  getShippingInfo,
} from "../../../../../../sanity/sanity-utils";
import TabsProducts from "@/components/modules/Product/TabsProducts";
import ProductAddToCart from "@/components/modules/Product/ProductAddToCart";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import ProductsSimilar from "@/components/modules/Product/ProductsSimilar";

type TSearchParams = {
  _id: string;
  title: string;
};

type TProps = {
  searchParams: TSearchParams;
};

export default async function ProductPage({
  searchParams = { _id: "", title: "" },
}: TProps) {
  console.log(searchParams._id);
  const product = await getProductById(searchParams._id);
  const products = await getProducts();
  const colors = await getColors();
  const shippingInfo = await getShippingInfo()

  const similarProductIds = product.similarProducts?.map((sp: any) => sp._ref);
  let similarProducts = []
  if (similarProductIds) {
    similarProducts = await getProductsByIds(similarProductIds);
  }

  const convertToInputOptionType = (array: string[]) => {
    return array.map((title: string, index: number) => {
      return {
        id: index,
        value: title,
        title: title,
      };
    });
  };

  const inputOptions = convertToInputOptionType(colors[0].colorOptions);

  return (
    <PageWrapper className="bg-light-ivory">
      <div className="py-section min-h-screen-footer">
        <div className="container container--xs">
          <div className="flex flex-col-reverse items-center gap-16 lg:items-start lg:flex-row">
            <ProductGallery
              title={product.name}
              featuredImage={product.imageUrl}
              images={product.imageGallery}
            />
            <div className="flex flex-col items-start self-stretch justify-start w-full">
              <Link href="/sklep" className="text-xl">
                <span className="flex items-center justify-center gap-2 mb-6 text-neutral-600 hover:underline hover:text-primary-500">
                  <ArrowLeft /> Wróć
                </span>
              </Link>
              <h1 className="mb-4 text-4xl font-medium text-primary-800">
                {searchParams.title}
              </h1>
              <Separator />

              {/* {!isMobile && <div className="mx-auto mt-4 mb-2">
                <ProductGallery
                featuredImage={product.imageUrl}
                images={product.imageGallery}
                            />
              </div>} */}

              <div className="w-full space-y-4">
                {product.isImmediate && (
                  <p className="font-light">
                    <strong className="font-semibold">Dostępność:</strong> od
                    ręki
                  </p>
                )}

                <ProductAddToCart
                  colorsGallery={colors[0].colorGallery}
                  colors={inputOptions}
                  isColorSelect={product.isColorSelect}
                  price={product.price}
                  discountPrice={product.discountPrice}
                  products={products}
                  productId={searchParams._id}
                />
                <Separator />
                <TabsProducts
                  product={product}
                  shipping={shippingInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductsSimilar products={similarProducts} />
    </PageWrapper>
  );
}
