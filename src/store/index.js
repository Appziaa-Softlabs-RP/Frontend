import { create } from 'zustand'

export const useAppStore = create((set) => ({
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

  // hero banners
  heroBanners: [],
  setHeroBanners: (banners) => set((state) => ({
    heroBanners: banners
  })),

  // category list
  categories: [],
  setCategories: (list) => set((state) => ({
    categories: list
  })),

  // promo banners
  promoBanners: [],
  setPromoBanners: (banners) => set((state) => ({
    promoBanners: banners
  })),

  // offer banners
  offerBanners: [],
  setOfferBanners: (banners) => set((state) => ({
    offerBanners: banners
  })),

  // product navigation Items
  navItems: [],
  setNavItems: (items) => set(state => ({
    navItems: items
  })),
}))