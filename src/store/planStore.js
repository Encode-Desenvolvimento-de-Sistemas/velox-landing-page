import { create } from 'zustand';

const usePlanStore = create((set) => ({
  planSelected: {
    title: '',
    value: 0,
    description: '',
    benefits: [],
  },
  setPlanSelected: (plan) => set({ planSelected: plan }),
  resetPlan: () =>
    set({
      planSelected: {
        title: '',
        value: 0,
        description: '',
        benefits: [],
      },
    }),
}));

export default usePlanStore;