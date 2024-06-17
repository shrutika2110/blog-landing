import { gql } from "@apollo/client";
import cmsClient from "./smsClient";


export function BlogService() {
  return cmsClient.query({
    query: gql`
      query getBlog {
        blogs {
          data {
            id
            attributes {
              Title
              shortDes
              publish_date
              slug
              good_read
              recommended
              pick
              watch
              hero_slider
              publishedAt
              trending
              coverImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              views
              video {
                video {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                coverImg {
                  id
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  altText
                }
              }
              videoViews
              firstFold {
                Title
								description
              }
              secondFold {
                Title
								description
              }
							thirdFold {
   							Title
								description
							}
							fourthFold {
   							Title
								description
							}
							fifthFold {
                Title
								description
              }
							sixthFold {
                Title
								description
              }
							seventhFold {
                Title
								description
              }
              blog_authors {
                data {
                  id
                  attributes {
                    name
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
}

export function SingleVideoService(slug: any) {
  return cmsClient.query({
    query: gql`
    query getSingleVideo($slug: String) {
      youtubes(filters: { slug: { eq: $slug } }) {
        data {
          attributes {
            Title
            Link
            Description
            Date
            slug
            publishedAt
            Duration
            CoverImg {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    
    }
    `,

    variables: {
      slug: slug,
    },
  });
}

export function SingleBlogService(slug: any) {
  return cmsClient.query({
    query: gql`
      query getSingleBlog($slug: String) {
        blogs(filters: { slug: { eq: $slug } }) {
          data {
            attributes {
              Title
              shortDes
              publish_date
              publishedAt
              slug
              good_read
              recommended
              pick
              watch
              trending
              coverImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              firstFold {
                Title
                description
              }
              secondFold {
                Title
                description
              }
              thirdFold {
                Title
                description
              }
              fourthFold {
                Title
                description
              }
              fifthFold {
                Title
                description
              }
              sixthFold {
                Title
                description
              }
              seventhFold {
                Title
                description
              }
              views
              video {
                video {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                coverImg {
                  id
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  altText
                }
              }
              videoViews
              blog_authors {
                data {
                  id
                  attributes {
                    name
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,

    variables: {
      slug: slug,
    },
  });
}

export function VideoService() {
  return cmsClient.query({
    query: gql`
      query getVideos {
        youtubes {
          data {
            id
            attributes {
              Title
              Link
              Description
              Date
              slug
              publishedAt
              Duration
              CoverImg {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
}

//Get blogs by title for search
export function getBlogsByTitle(titleString: string) {
  return cmsClient.query({
    query: gql`
      query GetBlogsByTitle($titleString: String) {
        blogs(
          filters: { Title: { containsi: $titleString } }
          sort: "createdAt:desc"
          pagination: { page: 1, pageSize: 5 }
        ) {
          data {
            id
            attributes {
              Title
              shortDes
              slug
              coverImg {
                data {
                  id
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      titleString: titleString,
    },
  });
}

export function getBlogsAndVideosByTitle(titleString: string) {
  return cmsClient.query({
    query: gql`
      query GetBlogsAndVideosByTitle($titleString: String) {
        blogs(
          filters: { Title: { containsi: $titleString } }
          sort: "createdAt:desc"
          pagination: { page: 1, pageSize: 5 }
        ) {
          data {
            id
            attributes {
              Title
              publishedAt
              shortDes
              slug
              coverImg {
                data {
                  id
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
          }
        }
        youtubes(
          filters: { Title: { containsi: $titleString } }
          sort: "createdAt:desc"
          pagination: { page: 1, pageSize: 5 }
        ) {
          data {
            id
            attributes {
              Title
              Link
              Description
              Date
              slug
              publishedAt
              Duration
              CoverImg {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      titleString: titleString,
    },
  });
}

export function TermsService() {
  return cmsClient.query({
    query: gql`
      query getTerms {
        term {
          data {
            attributes {
              title
              description
              publishedAt
            }
          }
        }
      }
    `,
  });
}

export function PrivacyPolicyService() {
  return cmsClient.query({
    query: gql`
      query getPrivacyPolicy {
        privacyPolicie {
          data {
            attributes {
              title
              description
              publishedAt
            }
          }
        }
      }
    `,
  });
}


