import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { discountDurationType, discountValueType } from '@/types/common'

export const useDiscountsStore = defineStore('discounts', () => {
  const discounts = ref([
    {
      id: 1,
      discountValueType: discountValueType.Fixed,
      duration: 1,
      durationType: discountDurationType.Monthly,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 2,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Onetime,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 3,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Onetime,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 4,
      discountValueType: discountValueType.Fixed,
      durationType: discountDurationType.Onetime,
      duration: 3,
      discount: 190,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 5,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Monthly,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 6,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Monthly,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 7,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Monthly,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 8,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Monthly,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 9,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Monthly,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    },
    {
      id: 10,
      discountValueType: discountValueType.Percentage,
      duration: 1,
      durationType: discountDurationType.Monthly,
      discount: 100,
      description: 'Hello',
      isEnabled: false
    }
  ])

  function addItem(item: any) {
    discounts.value.unshift(item)
  }

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

  return { discounts, monthlyActiveDiscounts, onetimeActiveDiscounts, addItem }
})
