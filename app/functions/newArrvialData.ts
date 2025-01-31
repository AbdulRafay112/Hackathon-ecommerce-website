import { client } from "@/sanity/lib/client";
export const getNewArrivalData = async () => {
  const a = await client.fetch(`*[_type == 'product' && isFeaturedProduct == true][0...4]{
  id,
  name,
  imagePath,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category
}`);
  return a;
};