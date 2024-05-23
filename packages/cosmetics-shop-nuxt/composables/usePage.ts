import type { Locale, Stage } from "#gql/default";

type Props = {
  slug: string,
  locale: Locale,
  type: 'pdp' | 'page'
}

export async function usePage(properties: Props) {
  const { $preview } = useNuxtApp();
  const stage = $preview ? "DRAFT" as Stage : "PUBLISHED" as Stage

  const { data } = await useAsyncGql(properties.type === 'page' ? 'Page' : 'Pdp', {
    slug: properties.slug, stage, locale: properties.type === 'pdp' ? 'en' : properties.locale
  });

  // @ts-ignore
  const result = properties.type === 'page' ? data.value.page : data.value.pdp

  if (!result) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }

  return result
}