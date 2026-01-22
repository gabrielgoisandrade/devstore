import z from "zod";
import data from "../data.json";

interface ProductProps {
  params: Promise<{ slug: string }>;
}

export async function GET(_: Request, { params }: ProductProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { slug } = await params;

  const validatedSlug = z.string().parse(slug);

  const product = data.products.find(
    (product) => product.slug === validatedSlug,
  );

  if (!product) {
    return Response.json({ message: "Product not found." }, { status: 400 });
  }

  return Response.json(product);
}
