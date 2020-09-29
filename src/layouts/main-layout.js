/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Menu } from '../components/menu';

const styles = {
	page: {
		backgroundColor: '#100E1D',
		color: '#E7E7EB',
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'Raleway',
		minHeight: '100%',
		padding: '0 25%',
		'@media (max-width: 600px)': {
			padding: '0 1%'
		}
	},
	content: {
		flex: '1 0 auto',
		padding: '1em'
	},
	footer: {
		flexShrink: 0
	}
};

export const MainLayout = props => {
	return (
		<div css={styles.page}>
			<div css={styles.content}>{props.children}</div>

			<div css={styles.footer}>
				<Menu />
			</div>
		</div>
	);
};
