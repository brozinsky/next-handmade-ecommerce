import PageWrapper from "@/components/utils/PageWrapper";
import Separator from "@/components/utils/Separator";
import Product from "@/components/layout/product/Product";
import HeadingLine from "@/components/ui/HeadingLine";
import ProductGallery from "@/components/layout/gallery/ProductGallery";
import {
  getColors,
  getProductById,
  getProducts,
} from "../../../../../../sanity/sanity-utils";
import TabsProducts from "@/components/modules/Product/TabsProducts";
import ProductAddToCart from "@/components/modules/Product/ProductAddToCart";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

type SearchParams = {
  id: string;
  title: string;
};

type Props = {
  searchParams: SearchParams;
};

export default async function ProductPage({
  searchParams = { id: "", title: "" },
}: Props) {
  const product = await getProductById(searchParams.id);
  const products = await getProducts();
  const colors = await getColors();

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
      <div className="py-section">
        <div className="container container--xs">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
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
                  products={products}
                  productId={searchParams.id}
                />
                <Separator />
                <TabsProducts
                  product={product}
                  products={products}
                  searchParams={searchParams}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-section">
        <div className="container container--xs">
          <HeadingLine textPosition="center">Podobne produkty</HeadingLine>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {[...products]
              .filter((item) => item.category === product.category)
              .sort((a, b) =>
                a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1
              )
              .map((product) => {
                return (
                  <div key={product.id} className="max-w-[250px]">
                    <Product {...product} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
