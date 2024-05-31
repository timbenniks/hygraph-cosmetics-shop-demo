"use client";

import Image from "next/image";
import type { Commercetools_Product } from "../gql/graphql";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  product: Commercetools_Product;
}

export default function ProductDetail({ product }: Props) {
  const router = useRouter();
  const productId = product.id;
  const mappedProduct = product.masterData.current;
  const images = product.masterData.current?.allVariants[0].images;
  const price =
    product.masterData.current?.allVariants[0].price?.value.centAmount / 100 ||
    0;
  const ingredients =
    product.masterData.current?.allVariants[0].attributesRaw[0]?.value || false;

  const [adding, setAdding] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAdding(true);

    const response = await fetch("/api/create-cart");
    const cart = await response.json();

    const responseAddToCart = await fetch(
      `/api/add-to-cart?cart_id=${cart.id}&product_id=${productId}`
    );

    const addedToCart = await responseAddToCart.json();

    setAdding(false);

    router.push(`/cart/${cart.id}`);
  };

  return (
    <section className="bg-light product-detail pb-12">
      <div className="grid grid-cols-2">
        {images?.map((img: any) => {
          return (
            <Image
              src={img.url}
              alt={mappedProduct?.name ? mappedProduct?.name : ""}
              width={600}
              height={600}
              className="aspect-[1/1] object-cover"
              sizes="50vw"
              loading="eager"
              key={img.url}
            />
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row mx-4 lg:mx-16 mb-12">
        <div className="bg-secondary p-8 md:-mt-12 flex-1 w-full md:w-2/4">
          <h1>
            <span className="block text-primary font-bold font-title text-6xl">
              your
            </span>
            <span className="block text-dark font-bold font-title text-6xl ml-8 -mt-2">
              {mappedProduct?.name ? mappedProduct?.name : ""}
            </span>
          </h1>
        </div>
        <div className="bg-tertiary p-8 md:-mt-12 w-full md:w-2/4">
          <p className="text-5xl font-bold font-title mb-4">${price}</p>
          <form onSubmit={handleSubmit}>
            <button className="cta" type="submit">
              {adding ? "adding to cart" : "add to cart"}
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 md:mx-16">
        <div className="pr-2">
          <h2 className="text-3xl font-bold font-title mb-4">
            product description
          </h2>
          <article
            dangerouslySetInnerHTML={{ __html: mappedProduct?.description }}
          />
        </div>
        <div className="pl-2">
          <h3 className="text-3xl font-bold font-title mb-4">ingredients</h3>
          {ingredients ? (
            <article dangerouslySetInnerHTML={{ __html: ingredients }} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
