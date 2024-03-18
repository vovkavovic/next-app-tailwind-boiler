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
    id: 1,
    title: "Polarized Games",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709748590~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3630%2F18%2F468153942%2F2080106110.mp4~hmac=5e7221d48fa5fe0b7959275a8b61c81e136b35913654f4aa2b11c7e64536291e/vimeo-prod-skyfire-std-us/01/3630/18/468153942/2080106110.mp4",
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
    id: 2,
    title: "Gucci Marmont",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709748670~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4203%2F18%2F471016476%2F2096366531.mp4~hmac=80a7c9a3acd7c498108f6be802f637d55db85246a36eb13a2f27b8002898f457/vimeo-prod-skyfire-std-us/01/4203/18/471016476/2096366531.mp4",
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
    id: 3,
    title: "QC Terme",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709748723~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4146%2F9%2F245732234%2F886672006.mp4~hmac=1b0dfd75a90b6b991678ded6662f39e2f815d6f8844228edb97edc13f1797a88/vimeo-prod-skyfire-std-us/01/4146/9/245732234/886672006.mp4",
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
    id: 4,
    title: "Barovier & Toso",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709748771~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4258%2F10%2F271291025%2F1008002704.mp4~hmac=a2729f61ab0f42d86556f8fc164f4a048cff6910c6e28d228e2d1acc735238ba/vimeo-prod-skyfire-std-us/01/4258/10/271291025/1008002704.mp4",
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
    id: 5,
    title: "Bulgari Femininity",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709748816~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3126%2F13%2F340630772%2F1358011990.mp4~hmac=34e0d38e14a0009831daa5978acc879ae59db365bbf6c9907946565ea04c3448/vimeo-prod-skyfire-std-us/01/3126/13/340630772/1358011990.mp4",
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
    id: 6,
    title: "Gucci Zumi",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709748973~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3180%2F13%2F340902356%2F1359661664.mp4~hmac=68df4432a865ced5cb651ff7fe3b4342301e3d36ac02e6a452923972da30356e/vimeo-prod-skyfire-std-us/01/3180/13/340902356/1359661664.mp4",
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
    id: 7,
    title: "Linealight",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709749040~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3442%2F9%2F242212240%2F869672655.mp4~hmac=a8950d668aef035c68646009856e053dd20b2a573f0a527274a0a051f2f71cea/vimeo-prod-skyfire-std-us/01/3442/9/242212240/869672655.mp4",
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
    id: 8,
    title: "Campo alle Comete",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709749073~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4352%2F9%2F246764796%2F891598768.mp4~hmac=106557153c032fe64c2dbefa7758b178a6c62db97bc70f58afec285a23156fd2/vimeo-prod-skyfire-std-us/01/4352/9/246764796/891598768.mp4",
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
    id: 9,
    title: "Envy",
    categories: ["website"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://www.aquest.it/public/gallery/items/1350/16-03-2023-09-40-36-imagedetail.jpg",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 10,
    title: "Boundless Living",
    categories: ["website"],
    cover: {
      video: {
        url: "",
        poster: "https://picsum.photos/1920/1080",
        type: "video/mp4",
      },
      image: {
        url: "https://www.aquest.it/public/gallery/items/1310/04-10-2022-14-21-46-imagedetail.jpg",
        alt: "Cover Image Project",
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    id: 11,
    title: "Bermat",
    categories: ["website"],
    cover: {
      video: {
        url: "https://vod-progressive.akamaized.net/exp=1709749272~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3479%2F19%2F492398470%2F2215718433.mp4~hmac=ebb75869f099c814d8511ed0aad19e22370cb6bf57782388e4c32bf2f6465203/vimeo-prod-skyfire-std-us/01/3479/19/492398470/2215718433.mp4",
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
