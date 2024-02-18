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
                discountPrice,
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
        discountPrice,
        isOnSale,
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

// "slug": slug.current,
// "image": image.asset->url,
// url,
// content
