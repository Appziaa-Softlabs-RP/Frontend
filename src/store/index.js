import { create } from 'zustand'
import ApiService from '../services/ApiService';
import { enviroment } from '../enviroment';

export const setBannersSelector = state => state.setBanners;
export const bannersSelector = state => state.setBanners;

const log = config => (set, get, api) => config(args => {
  console.log("  applying", args)
  set(args)
  console.log("  new state", get())
}, get, api);

export const useAppStore = create(log((set, get) => ({
  // loggedIn user info
  user: {},
  setUser: (userData) => set((state) => ({
    user: userData
  })),

  // user cart
  cartCount: 0,
  cartItems: [],
  addToCard: (product) => set((state) => ({ cartItems: [...state.cartItems, product] })),
  removeFromCard: () => (product) => set((state) => ({
    cartItems: [...state.cartItems, product]
  })),

  // all banners
  // banners: {
  //   heroBanners: [],
  //   promoBanners: [],
  //   offerBanners: []
  // },
  // setBanners: (banners) => {
  //   console.log("setBanners ", banners);
  //   console.log("setBanners banner", banners.banner);
  //   set((state) => ({
  //     // banners: {
  //     //   // ...state.banners,
  //     //   heroBanners: banners?.banner,
  //     //   promoBanners: banners?.promobanner,
  //     //   offerBanners: banners?.offeroftheday,
  //     // }
  //     heroBanners: banners?.banner,
  //     promoBanners: banners?.promobanner,
  //     offerBanners: banners?.offeroftheday
  //   }))
  // },
  setBanners: async (bnrs) => {
    const payload = {
      store_id: enviroment.STORE_ID
    };
    const banners = await ApiService.banner(payload).then(res => res.payload_banner);
    set({
      heroBanners: banners.banner,
      promoBanners: [...banners.promobanner],
      offerBanners: [...banners.offeroftheday]
    })
  },
  // hero banners
  heroBanners: [],
  setHeroBanners: (banners) => {
    set((state) => ({
      heroBanners: banners
    }))
  },

  // promo banners
  promoBanners: [],
  setPromoBanners: (banners) => {
    set((state) => ({
      promoBanners: banners
    }))
  },

  // offer banners
  offerBanners: [],
  setOfferBanners: (banners) => {
    set((state) => ({
      offerBanners: banners
    }))
  },

  // category list
  categories: [],
  setCategories: async (list) => {
    const payload = {
      store_id: enviroment.STORE_ID
    };
    let allCatList = [];
    let allSubCategory = [];
    try {
      await ApiService.AllCategory(payload).then((res) => {
        allSubCategory = res?.payload_verticalWithCatList?.vertical;
        allSubCategory.map((item) => {
          if (item?.catList?.length > 0) {
            item.catList.map((item) => {
              allCatList.push(item);
            })
          }
        });
      }).catch((err) => {
        console.error(err);
      });
    } catch (err) {
      return new Error("error on AllCategory", err);
    }

    set((state) => ({
      categories: allCatList,
      navItems: allSubCategory
    }))
  },

  // product navigation Items
  navItems: [],
  // setNavItems: async () => {
  //   let al = get().categories;
  //   let allCatList = [];
  //   al.map((item) => {
  //     if (item?.catList?.length > 0) {
  //       item.catList.map((item) => {
  //         allCatList.push(item);
  //       })
  //     }
  //   });
  //   set(state => ({
  //     navItems: allCatList
  //   }))
  // },
})));