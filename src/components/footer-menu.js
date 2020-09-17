/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

export const FooterMenu = () => {
	const styles = {
		container: {
			width: '100%',
			bottom: 0,
			textAlign: 'center',
			display: 'flex'
		},
		section: {
			flexGrow: 1
		},
		text: {
			color: '#ffffff',
			lineHeight: '1rem'
		}
	};

	return (
		<div css={styles.container}>
			<div css={styles.section}>
				<p css={styles.text}>
					<Link to="/">Home</Link>
				</p>
			</div>
			<div css={styles.section}>
				<p css={styles.text}>
					<Link to="/settings">Settings</Link>
				</p>
			</div>
		</div>
	);
};
