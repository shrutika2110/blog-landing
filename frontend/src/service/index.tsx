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
                coverImg {
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
              secondFold {
                Title
								description
                coverImg {
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
							thirdFold {
   							Title
								description
                coverImg {
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
							fourthFold {
   							Title
								description
                coverImg {
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
							fifthFold {
                Title
								description
                coverImg {
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
							sixthFold {
                Title
								description
                coverImg {
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
							seventhFold {
                Title
								description
                coverImg {
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
            publish_date
            slug
            publishedAt
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
                coverImg {
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
              secondFold {
                Title
                description
                coverImg {
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
              thirdFold {
                Title
                description
                coverImg {
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
              fourthFold {
                Title
                description
                coverImg {
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
              fifthFold {
                Title
                description
                coverImg {
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
              sixthFold {
                Title
                description
                coverImg {
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
              seventhFold {
                Title
                description
                coverImg {
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
              publish_date
              slug
              publishedAt
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

export function SocialService() {
  return cmsClient.query({
    query: gql`
      query getSocialLinks {
        socials {
          data {
            id
            attributes {
              title
              link
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
              publish_date
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
              publish_date
              slug
              publishedAt
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


