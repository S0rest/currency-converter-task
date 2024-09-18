import { SwapIcon } from '@icons'
import useCurrencyStore from '@store'
import {
	convertCurrency,
	getExchangeRateFromSelectedValue,
	setCurrentExchangeRate,
} from '@utils/utils'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import s from './CurrencyConverter.module.scss'
import {
	InputRecord,
	CurrencyConverterPropType,
	RateRecord,
	SelectRecord,
} from './CurrencyConverter.types'

const CurrencyConverter = ({ data }: CurrencyConverterPropType) => {
	const currencyData = data.slice(0, 2)
	const initData = currencyData.find(c => c.currencyCodeA === 840)!
	const inputData = isNaN(initData.rateSell)
		? '0'
		: initData.rateSell.toString()

	const ratesState = useCurrencyStore(state => state.rates)

	const [reverseMode, setReverseMode] = useState(false)

	const [rateValue, setRateValue] = useState<RateRecord>({
		sell: initData.rateSell,
		buy: initData.rateBuy,
	})

	const [inputValue, setInputValue] = useState<InputRecord>({
		change: '1',
		get: inputData,
	})

	const [selectValue, setSelectValue] = useState<SelectRecord>({
		changeCurrency: 'USD',
		getCurrency: 'UAH',
	})

	const convertAndSetValues = (
		current: string,
		rateBuy: number,
		rateSell: number,
		reverseMode: boolean,
		isChangeInput: boolean
	) => {
		let converted

		if (reverseMode) {
			converted = isChangeInput
				? convertCurrency(+current, rateBuy, '/')
				: convertCurrency(+current, rateBuy, '*')
		} else {
			converted = isChangeInput
				? convertCurrency(+current, rateSell, '*')
				: convertCurrency(+current, rateSell, '/')
		}

		setInputValue({
			get: isChangeInput ? converted.toFixed(4) : current,
			change: isChangeInput ? current : converted.toFixed(4),
		})
	}

	useEffect(() => {
		if (selectValue.changeCurrency === selectValue.getCurrency) return

		// console.log('Rates changed from table cell...')

		const foundData = getExchangeRateFromSelectedValue(
			selectValue.changeCurrency,
			selectValue.getCurrency,
			setReverseMode,
			data,
			ratesState
		)

		setRateValue({
			buy: foundData.rateBuy,
			sell: foundData.rateSell,
		})

		setInputValue({
			get: '',
			change: '',
		})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ratesState])

	useEffect(() => {
		if (selectValue.changeCurrency === selectValue.getCurrency) return
		const current = inputValue.get

		// console.log(`${selectValue.getCurrency}: ${current}`)

		convertAndSetValues(
			current,
			rateValue.buy,
			rateValue.sell,
			reverseMode,
			false
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectValue.changeCurrency])

	useEffect(() => {
		if (selectValue.changeCurrency === selectValue.getCurrency) return
		const current = inputValue.change

		// console.log(`${selectValue.changeCurrency}: ${current}`)

		convertAndSetValues(
			current,
			rateValue.buy,
			rateValue.sell,
			reverseMode,
			true
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectValue.getCurrency])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const current = +e.target.value

		if (isNaN(current)) return

		if (selectValue.getCurrency === selectValue.changeCurrency) {
			setInputValue({
				get: e.target.value,
				change: e.target.value,
			})
			return
		}

		const isChangeInput = e.target.name === 'change'

		convertAndSetValues(
			e.target.value,
			rateValue.buy,
			rateValue.sell,
			reverseMode,
			isChangeInput
		)
	}

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const updatedSelectValue = {
			...selectValue,
			[e.target.name]: e.target.value,
		}

		setSelectValue(updatedSelectValue)

		if (updatedSelectValue.getCurrency === updatedSelectValue.changeCurrency) {
			setInputValue({
				change: inputValue.get,
				get: inputValue.get,
			})
		} else {
			setCurrentExchangeRate(
				e,
				data,
				ratesState,
				setRateValue,
				updatedSelectValue,
				setReverseMode
			)
		}
	}

	const handleReverseMode = () => {
		setReverseMode(prev => !prev)
		setInputValue({
			get: inputValue.change,
			change: inputValue.get,
		})
		setSelectValue({
			getCurrency: selectValue.changeCurrency,
			changeCurrency: selectValue.getCurrency,
		})
	}

	const getOptions = () => {
		return (
			<>
				<option value='UAH'>UAH</option>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
			</>
		)
	}

	return (
		<div className={s.content}>
			<div className={s.contentItem}>
				<label htmlFor='change' className={s.label}>
					Change
				</label>
				<div className={s.cardInput}>
					<input
						className={s.input}
						type='text'
						autoComplete='off'
						name='change'
						value={inputValue.change}
						onChange={e => handleInputChange(e)}
					/>
					<select
						className={s.select}
						name='changeCurrency'
						onChange={handleSelectChange}
						value={selectValue.changeCurrency}
					>
						{getOptions()}
					</select>
				</div>
			</div>
			<div className={cn(s.contentItem, s.contentItem_m)}>
				<span className={s.swapButton} onClick={handleReverseMode}>
					<SwapIcon />
				</span>
			</div>
			<div className={s.contentItem}>
				<label htmlFor='get' className={s.label}>
					Get
				</label>
				<div className={s.cardInput}>
					<input
						className={s.input}
						type='text'
						autoComplete='off'
						name='get'
						value={inputValue.get}
						onChange={e => handleInputChange(e)}
					/>
					<select
						className={s.select}
						name='getCurrency'
						onChange={handleSelectChange}
						value={selectValue.getCurrency}
					>
						{getOptions()}
					</select>
				</div>
			</div>
		</div>
	)
}

export default CurrencyConverter
