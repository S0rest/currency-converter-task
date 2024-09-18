import errImg from '@images/warning.png'
import s from './CurrencyError.module.scss'
import { ErrorType } from './CurrencyError.types'

const CurrencyError = ({ error }: ErrorType) => {
	return (
		<div className={s.currencyError}>
			<div className={s.errorMessage}>
				<div className={s.errorMessage__image}>
					<img src={errImg} alt='error' />
				</div>
				<span className={s.errorText}>{error.message}</span>
			</div>
		</div>
	)
}

export default CurrencyError
