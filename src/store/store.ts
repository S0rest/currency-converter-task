import { KeyRecord } from '@components/CurrencyTable/CurrencyTable.types'
import { create } from 'zustand'
import { CurrencyState } from '../types/store.types'

const useCurrencyStore = create<CurrencyState>(set => ({
	rates: {},
	setCurrentRateFromCell: (current: KeyRecord) =>
		set(state => ({
			rates: { ...state.rates, ...current },
		})),
}))

export default useCurrencyStore
