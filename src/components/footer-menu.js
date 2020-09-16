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
			color: '#ffffff'
		}
	};

	return (
		<div css={styles.container}>
			<Link css={styles.section} to="/">
				<p css={styles.text}>Home</p>
			</Link>
			<Link css={styles.section} to="/settings">
				<p css={styles.text}>Settings</p>
			</Link>
		</div>
	);
};
