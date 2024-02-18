"use client";
import PageWrapper from "@/components/utils/PageWrapper";
import Button from "@/components/ui/Button";
import { useState } from "react";
import clsx from "clsx";
import Separator from "@/components/utils/Separator";
import Product from "@/components/layout/product/Product";
import HeadingLine from "@/components/ui/HeadingLine";
import ProductGallery from "@/components/layout/gallery/ProductGallery";
import useCartStore from "@/stores/useCartStore";
import { products } from "@/utils/products";
import {
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

export default async function ProductPage({ searchParams = { id: '', title: '' } }: Props) {
  const product = await getProductById(searchParams.id);
  const products = await getProducts();

  return (
    <PageWrapper className="bg-light-ivory">
      <div className="py-section">
        <div className="container container--xs">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
              <ProductGallery
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
                <div className="space-y-2">
                  {product.isImmediate && (
                    <p className="font-light">
                      <strong className="font-semibold">Dostępność:</strong> od
                      ręki
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center justify-between gap-8 sm:flex-row xl:flex-row">
                  <div className="text-3xl font-semibold text-primary-800">
                    {product.price},00 zł
                  </div>
                  <ProductAddToCart
                    products={products}
                    productId={searchParams.id}
                  />
                </div>
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
              .filter(
                (item) =>
                item.category === product.category
              )
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
