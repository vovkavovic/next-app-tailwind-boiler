export type ProjectType = {
  id: number;
  title: string;
  categories: string[];
  cover: {
    video: {
      url: string;
      poster: string;
      type: string;
    };
    image: {
      url: string;
      alt: string;
      width: number | string;
      height: number | string;
    };
  };
};

export const projectsListingMock: ProjectType[] = [
  {
    id: 0,
    title: "MA",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709747836~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4279%2F18%2F471399835%2F2098600019.mp4~hmac=97c7924b19ee673c12c149d8396c94065f57db9039d3c567e8e64fb96d273508/vimeo-prod-skyfire-std-us/01/4279/18/471399835/2098600019.mp4",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 12,
    title: "Forno Bonomi",
    categories: ["social"],
    cover: {
      video: {
        url: "https://download-video.akamaized.net/v3-1/playback/503b5835-d126-4f92-acf3-f355bb06a62d/304b2d6d-0a927b09?__token__=st=1709735119~exp=1709749519~acl=%2Fv3-1%2Fplayback%2F503b5835-d126-4f92-acf3-f355bb06a62d%2F304b2d6d-0a927b09%2A~hmac=926caf926fdeb23c50206d8f4e29d4a64e3d4e3c347f166de1fe2c27006e88cc&r=dXMtY2VudHJhbDE%3D",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 13,
    title: "Gibus SPA",
    categories: ["social", "website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709749580~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3444%2F16%2F417224738%2F1798308779.mp4~hmac=c6eec1e10b118b93d678eee0c90f604cae50ae079481c86df54a75b126dad66c/vimeo-prod-skyfire-std-us/01/3444/16/417224738/1798308779.mp4",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 14,
    title: "San Martino",
    categories: ["social"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://www.aquest.it/public/gallery/items/1331/29-11-2022-09-33-34-imagedetail.jpg",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 15,
    title: "Salus Italia",
    categories: ["social"],
    cover: {
      video: {
        url: "https://download-video.akamaized.net/v3-1/playback/b81823b6-b74b-4f01-afe3-0789ea345c53/8c9477c5-d964569a?__token__=st=1709735262~exp=1709749662~acl=%2Fv3-1%2Fplayback%2Fb81823b6-b74b-4f01-afe3-0789ea345c53%2F8c9477c5-d964569a%2A~hmac=f5b6feddc47e284c793070cd3f14a7ee6a1930b8b8afa4550185481e0d013960&r=dXMtd2VzdDE%3D",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 16,
    title: "Project",
    categories: ["films"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 17,
    title: "Project",
    categories: ["installations"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 18,
    title: "Project",
    categories: ["experiential websites"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 19,
    title: "Project",
    categories: ["digital marketing"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 19,
    title: "Project",
    categories: ["3D/CGI"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 19,
    title: "Project",
    categories: ["ecommerces"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 19,
    title: "Project",
    categories: ["advergames"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 20,
    title: "Project",
    categories: ["luxury"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 21,
    title: "Project",
    categories: ["fashion"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 22,
    title: "Project",
    categories: ["food and beverages"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 23,
    title: "Project",
    categories: ["automotive"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 24,
    title: "Project",
    categories: ["design"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 24,
    title: "Project",
    categories: ["retail"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://picsum.photos/1920/1080",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
];
