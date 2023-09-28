// createproductapi.js
import AxiosClient from "../AxiosClient";

export default async function createproductapi(
  thumbnailImage,
  productName,
  description,
  price,
  tag,
  category
) {
  const formData = new FormData();
  formData.append("thumbnailImage", thumbnailImage);
  formData.append("productName", productName);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("tag", tag);
  formData.append("category", category);

  return AxiosClient.post(`/api/v1/product/createProduct`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => res.data);
}
