import { getCurrency } from '@api'
import CurrencyConverter from '@components/CurrencyConverter/CurrencyConverter'
import CurrencyError from '@components/CurrencyError/CurrencyError'
import TablePreloader from '@components/CurrencyTable/components/TablePreloader/TablePreloader'
import Layout from '@components/Layout/Layout'
import { MONOBANK_API_URL } from '@utils/const'
import useSWR from 'swr'
import { CurrencyErrorType, CurrencyType } from 'types/api.types'

export default function App() {
	// "Too many requests" error from monobank API
	// Limitation to get exchange rate 1–2 requests in ~50 seconds
	const { data, error, isLoading } = useSWR<CurrencyType[], CurrencyErrorType>(
		MONOBANK_API_URL,
		getCurrency,
		{
			// shouldRetryOnError: false,
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	)

	return (
		<Layout data={data!} error={error!} isLoading={isLoading}>
			<div className='container'>
				{error ? (
					<CurrencyError error={error} />
				) : isLoading ? (
					<TablePreloader />
				) : (
					data && <CurrencyConverter data={data} />
				)}
			</div>
		</Layout>
	)
}
