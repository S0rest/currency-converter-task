import Footer from './components/FooterLayout/FooterLayout'
import Header from './components/HeaderLayout/HeaderLayout'
import s from './Layout.module.scss'
import { LayoutPropType } from './Layout.types'

const Layout = ({ data, error, isLoading, children }: LayoutPropType) => {
	return (
		<div className={s.wrapper}>
			<Header data={data} error={error} isLoading={isLoading} />
			<div className={s.content}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
