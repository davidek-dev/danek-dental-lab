export const POST_GRAPHQL_FIELDS = `
  title
  date
  description{json}
  content{json}
  blogImage {
    title
    url
  }
  slug
`;

export const getAllPosts = async (spaceId:string, accessToken:string) => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `query {
        blogPostCollection(order: date_DESC) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
      }),
    }
  )
  .then(async (res) => {
    const jsonResponse = await res.json();
    return jsonResponse;
  })
    .catch((err) => console.error(err));
  return response?.data?.blogPostCollection?.items;
};

export const getPostBySlug = async (spaceId:string, accessToken:string, slug:string) => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `query {
        blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
      }),
    }
  )
    .then((res) => res.json())
    .catch((err) => {console.error(err); return []});

  const [post] = response?.data?.blogPostCollection?.items;
  return post;
};
