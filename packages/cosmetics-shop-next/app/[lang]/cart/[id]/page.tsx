import Card from "@/components/Card";

export default async function Home({ params }: { params: { id: string } }) {
  const response = await fetch(
    `http:localhost:3003/api/cart?cart_id=${params.id}`
  );
  const cart = await response.json();

  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="bg-secondary p-8 flex-1 w-full">
        <h1>
          <span className="block text-primary font-bold font-title text-6xl">
            your
          </span>
          <span className="block text-dark font-bold font-title text-6xl ml-8 -mt-2">
            shopping cart
          </span>
        </h1>
      </div>
      <section className="bg-tertiary p-12">
        {cart.lineItems.map((product: any) => {
          return (
            <div className="flex gap-12">
              <div className="w-96">
                <Card
                  image={product.variant.images[0].url}
                  title={product.name["en-GB"]}
                />
              </div>

              <div className="max-w-96">
                <h2 className="block text-primary font-bold font-title text-3xl sm:text-4xl md:text-5xl mb-6">
                  {product.name["en-GB"]}
                </h2>
                <p className="mb-4">{product.variant.attributes[0].value}</p>
                <p className="font-bold text-xl mb-4">
                  &euro; {(product.price.value.centAmount / 100).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <div className="bg-light p-8 flex-1 w-full">
        <p className="mb-4">
          Total price: &euro; {cart.totalPrice.centAmount / 100}
        </p>
        <button className="cta">Pay Now</button>
      </div>
    </main>
  );
}
