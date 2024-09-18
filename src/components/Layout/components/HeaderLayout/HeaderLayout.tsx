import exchange from '@images/exchange.png'
import { currencyColumns } from '@utils/utils'
import TablePreloader from '../../../CurrencyTable/components/TablePreloader/TablePreloader'
import CurrencyTable from '../../../CurrencyTable/CurrencyTable'
import s from './HeaderLayout.module.scss'
import { HeaderLayoutPropType } from './HeaderLayout.types'

const HeaderLayout = ({ data, error, isLoading }: HeaderLayoutPropType) => {
	return (
		<div className={s.header}>
			<span className={s.header__container}>
				<span className={s.header__logo}>
					<img src={exchange} alt='logo' />
				</span>
				<span className={s.header__text}>
					<p>Currency Converter</p>
				</span>
			</span>
			{isLoading ? (
				<TablePreloader />
			) : (
				!error && <CurrencyTable columns={currencyColumns} dataSource={data} />
			)}
		</div>
	)
}

export default HeaderLayout
