import { CheckIcon, CloseIcon, PencilIcon } from '@icons'
import useCurrencyStore from '@store'
import { isValidCurrencyValue } from '@utils/utils'
import { useState } from 'react'
import { CurrencyType } from 'types/api.types'
import s from './CurrencyTable.module.scss'
import {
	CurrencyTablePropType,
	KeyRecord,
	KeyType,
} from './CurrencyTable.types'

const CurrencyTable = ({ columns, dataSource }: CurrencyTablePropType) => {
	const tableData: CurrencyType[] = dataSource.slice(0, 2)

	const setCurrentRate = useCurrencyStore(state => state.setCurrentRateFromCell)

	const [editMode, setEditMode] = useState(false)
	const [selectedCell, setSelectedCell] = useState<string | null>(null)
	const [isCheckMarkDisabled, setIsCheckMarkDisabled] = useState(false)
	const [inputValue, setInputValue] = useState<KeyRecord>({
		buy0: '',
		sell0: '',
	})

	const getCurrencyFromCode = (code: number): string => {
		switch (code) {
			case 840:
				return 'USD'
			case 978:
				return 'EUR'
			case 980:
				return 'UAH'
			default:
				return 'Unknown currency'
		}
	}

	const handleClickEditMode = (
		e: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
		name: KeyType,
		i: number
	) => {
		const value = e.target as HTMLSpanElement
		// console.log(value);

		if (!value.innerText) return

		if (!selectedCell) {
			setSelectedCell(`${name}${i}`)
			setInputValue({
				...inputValue,
				[`${name}${i}`]: value.innerText,
			})

			setEditMode(true)
		}
	}

	const handleCloseEditMode = (name: KeyType, i: number) => {
		setEditMode(false)
		setSelectedCell(null)
		setIsCheckMarkDisabled(false)
		setInputValue({
			...inputValue,
			[`${name}${i}`]: '',
		})
	}

	const handleApplyEditMode = (
		name: KeyType,
		i: number,
		initialValue: string
	) => {
		const current = +inputValue[`${name}${i}`]

		if (isNaN(current)) return

		// console.log("Current: ", current);

		const previous = parseFloat(initialValue)

		const withoutDot = !inputValue[`${name}${i}`].endsWith('.')

		// double check if current value is incorrect
		if (withoutDot && isValidCurrencyValue(previous, current)) {
			setCurrentRate({
				[`${name}${i}`]: inputValue[`${name}${i}`],
			})
			setEditMode(false)
			setSelectedCell(null)
		}
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		i: number,
		initialValue: string
	) => {
		setInputValue({
			...inputValue,
			[`${e.target.name}${i}`]: e.target.value,
		})
		const previous = parseFloat(initialValue)
		const current = +e.target.value

		if (isNaN(current)) {
			setIsCheckMarkDisabled(true)
			return
		}

		if (
			!e.target.value.endsWith('.') &&
			isValidCurrencyValue(previous, current)
		) {
			setIsCheckMarkDisabled(false)
		} else {
			setIsCheckMarkDisabled(true)
		}
	}

	return (
		<div className={s.currencyTable}>
			<table>
				<thead>
					<tr>
						{columns.map(c => (
							<th key={c.key}>{c.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.map((d: CurrencyType, i) => {
						const buy = Number(d.rateBuy).toFixed(3)
						const sell = Number(d.rateSell).toFixed(3)

						return (
							<tr key={i}>
								<td>{`${getCurrencyFromCode(
									d.currencyCodeA
								)}/${getCurrencyFromCode(d.currencyCodeB)}`}</td>
								<td onClick={e => handleClickEditMode(e, 'buy', i)}>
									{editMode && selectedCell === `${'buy'}${i}` ? (
										<>
											<span className={s.changeMode}>
												<span
													className={s.changeMode__check}
													onClick={() => handleApplyEditMode('buy', i, buy)}
												>
													<CheckIcon
														fill={isCheckMarkDisabled ? '#bebebe' : '#76ec52'}
													/>
												</span>
												<span
													className={s.changeMode__close}
													onClick={() => handleCloseEditMode('buy', i)}
												>
													<CloseIcon />
												</span>
											</span>
											<input
												className={s.editInput}
												type='text'
												value={inputValue[`buy${i}`]}
												name='buy'
												onChange={e => handleInputChange(e, i, buy)}
											/>
										</>
									) : (
										<>
											<span className={s.editMode}>
												<PencilIcon />
											</span>
											<span>
												{inputValue[`buy${i}`] ? inputValue[`buy${i}`] : buy}
											</span>
										</>
									)}
								</td>
								<td onClick={e => handleClickEditMode(e, 'sell', i)}>
									{editMode && selectedCell === `${'sell'}${i}` ? (
										<>
											<span className={s.changeMode}>
												<span
													className={s.changeMode__check}
													onClick={() => handleApplyEditMode('sell', i, sell)}
												>
													<CheckIcon
														fill={isCheckMarkDisabled ? '#bebebe' : '#76ec52'}
													/>
												</span>
												<span
													className={s.changeMode__close}
													onClick={() => handleCloseEditMode('sell', i)}
												>
													<CloseIcon />
												</span>
											</span>
											<input
												className={s.editInput}
												type='text'
												value={inputValue[`sell${i}`]}
												name='sell'
												onChange={e => handleInputChange(e, i, sell)}
											/>
										</>
									) : (
										<>
											<span className={s.editMode}>
												<PencilIcon />
											</span>
											<span>
												<span>
													{inputValue[`sell${i}`]
														? inputValue[`sell${i}`]
														: sell}
												</span>
											</span>
										</>
									)}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default CurrencyTable
