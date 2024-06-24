import { RecommendedService } from "@/service";

export async function fetchRecommendedBlogData() {
    try {
        const response = await RecommendedService({
            query: `
        query getRecomendedBlog {
          blogs {
            data {
              id
              attributes {
                RecomendedBlog {
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
              }
            }
          }
}
     
      `,
        });

        // Log the complete response for debugging

        // Filter and flatten recommended blogs
        const recommendedData = response.data.blogs.data.flatMap((blog: any) => {
            if (blog.attributes.RecomendedBlog && blog.attributes.RecomendedBlog.blogs.data) {
                return blog.attributes.RecomendedBlog.blogs.data.map((recommendedBlog: any) => ({
                    id: recommendedBlog.id,
                    attributes: recommendedBlog.attributes
                }));
            }
            return [];
        });

        return recommendedData;
    } catch (e: any) {
        console.error("Error fetching recommended blog data:", e.message);
        return [];
    }
}