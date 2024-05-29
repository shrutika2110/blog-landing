import { gql } from '@apollo/client';
import cmsClient from './smsClient';

export function BlogCategoryService() {
  return cmsClient.query({
    query: gql`
      query blogCategories {
        blogCategories {
          data {
            id
            attributes {
              title
              slug
              slider {
                title
                description
                bgColor
                image {
                  id
                  altText
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
    `,
  });
}

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
              trending
              coverImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              blog_categories {
                data {
                  id
                  attributes {
                    title
                    slug
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

export function SingleBlogService(slug:any) {
  return cmsClient.query({
    query: gql`
    query getSingleBlog($slug: String) {
      blogs(filters: { slug: { eq: $slug } }) {
        data {
          id
          attributes{
            Title
            shortDes
            publish_date
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
            blog_categories {
              data {
                id
                attributes {
                  title
                  slug
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
              blog_categories {
                data {
                  id
                  attributes {
                    title
                    slug
                  }
                }
              }
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



//Get blogs by userId and watch flag
export const getVideoBlogs = gql`
  query getVideoBlogs(
    $userId: String
    $page: Int
    $pageSize: Int
    $state: Boolean = false
  ) {
    bookMarks(
      filters: { userId: { eq: $userId }, blog: { watch: { eq: $state } } }
      sort: "createdAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          userId
          blog {
            data {
              id
              attributes {
                Title
                shortDes
                publish_date
                watch
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
                blog_categories {
                  data {
                    id
                    attributes {
                      title
                      slug
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
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

//Get blogs by userId and watch flag
export const getBlogs = gql`
  query getBlogs($userId: String, $page: Int, $pageSize: Int) {
    bookMarks(
      filters: {
        userId: { eq: $userId }
        and: [
          {
            or: [
              { blog: { watch: { ne: true } } }
              { blog: { watch: { null: true } } }
            ]
          }
        ]
      }
      sort: "createdAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          userId
          blog {
            data {
              id
              attributes {
                Title
                shortDes
                publish_date
                watch
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
                blog_categories {
                  data {
                    id
                    attributes {
                      title
                      slug
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
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;
