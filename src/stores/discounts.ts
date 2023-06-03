import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { discountDurationType, discountValueType } from '@/types/common'

export const useDiscountsStore = defineStore('discounts', () => {
  const discounts = ref([
    {
      id: 1,
      discount: 1,
      discountValueType: discountValueType.Fixed,
      dduration: 1,
      durationType: discountDurationType.Monthly,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 2,
      discount: 2,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Onetime,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 3,
      discount: 1,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Onetime,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 4,
      discount: 190,
      discountValueType: discountValueType.Fixed,
      durationType: discountDurationType.Onetime,
      duration: 3,
      price: 190,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 5,
      discount: 1,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Monthly,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 6,
      discount: 1,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Monthly,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 7,
      discount: 1,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Monthly,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 8,
      discount: 1,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Monthly,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 9,
      discount: 1,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Monthly,
      price: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 10,
      discount: 1,
      discountValueType: discountValueType.Percentage,
      dduration: 1,
      durationType: discountDurationType.Monthly,
      price: 100,
      description: 'Hello',
      isEnabled: false
    }
  ])

  const monthlyActiveDiscounts = computed(() => {
    return discounts.value.filter((d) => {
      return d.durationType === discountDurationType.Monthly && d.isEnabled
    })
  })

  const onetimeActiveDiscounts = computed(() => {
    return discounts.value.filter((d) => {
      return d.durationType === discountDurationType.Onetime && d.isEnabled
    })
  })

  return { discounts, monthlyActiveDiscounts, onetimeActiveDiscounts }
})
