import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "4kjoa8dx",
  dataset: "production",
  apiVersion: "2024-02-12",
  useCdn: false,
});

export async function getProducts() {
  try {
    return await client.fetch(
      `*[_type == "product"]{
        _id,
        name,
        "slug": slug.current,
        description,
        "categories": categories[]->{
          _id,
          title
        },
        "imageUrl": featured_image.asset->url,
        price,
        currency,
        oldPrice,
        isOnSale,
        isImmediate,
        isAvailable,
        isNew
      }`
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getCategories() {
  try {
    return await client.fetch(`*[_type == "category"] | order(order asc) {
      title,
      slug,
      order
    }`);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
}

export async function getShippingInfo() {
  try {
    return await client.fetch(
      `*[_type == "shipping"] {
        name,
        slug,
        price
      }`
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getColors() {
  try {
    return await client.fetch(
      `*[_type == "color"]{
        _id,
        title,
        "slug": slug.current,
        colorOptions,
        "colorGallery": colorGallery[].asset->{
          _id,
          url
        }
      }`
    );
  } catch (error) {
    console.error("Failed to fetch colors:", error);
    throw error;
  }
}

export async function getProductById(productId: string) {
  const query = `
      *[_type == "product" && _id == $productId]{
        _id,
        name,
        "slug": slug.current,
        description,
        "categories": categories[]->{
          _id,
          title
        },
        "imageUrl": featured_image.asset->url,
        "imageGallery": imageGallery[].asset->url,
        price,
        currency,
        measurements,
        similarProducts,
        oldPrice,
        isOnSale,
        isColorSelect,
        isImmediate,
        isAvailable,
        isNew
      }`;

  try {
    const products = await client.fetch(query, { productId });
    return products.length > 0 ? products[0] : null;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
}

export async function getProductsByIds(productIds: string[]) {
  const query = `
    *[_type == "product" && _id in $productIds]{
      _id,
      name,
      "slug": slug.current,
      description,
      "categories": categories[]->{
        _id,
        title
      },
      "imageUrl": featured_image.asset->url,
      "imageGallery": imageGallery[].asset->url,
      price,
      currency,
      similarProducts,
      measurements,
      oldPrice,
      isOnSale,
      isColorSelect,
      isImmediate,
      isAvailable,
      isNew
    }`;

  try {
    const products = await client.fetch(query, { productIds });
    return products;
  } catch (error) {
    console.error("Failed to fetch products by IDs:", error);
    throw error;
  }
}

export async function getDescription(slug: "o-mnie" | "koszty-wysylki") {
  const query = `*[slug.current == $slug][0]`;
  const params = { slug };

  try {
    const document = await client.fetch(query, params);
    return document;
  } catch (error) {
    console.error("Failed to fetch document:", error);
    return null;
  }
}
