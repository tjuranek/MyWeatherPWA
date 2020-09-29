/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useHistory } from 'react-router-dom';

export const Menu = () => {
	const history = useHistory();

	const handleLinkClick = route => {
		history.push(route);
	};

	const styles = {
		container: {
			border: '1px solid #E7E7EB',
			display: 'flex',
			margin: '.5em',
			textAlign: 'center'
		},
		link: {
			flexGrow: 1,
			fontSize: '1.25em',
			height: '3em',
			lineHeight: '3em'
		}
	};

	return (
		<div css={styles.container}>
			<div
				css={{ ...styles.link, borderRight: '1px solid #E7E7EB' }}
				onClick={() => handleLinkClick('/')}
			>
				Home
			</div>

			<div css={styles.link} onClick={() => handleLinkClick('/settings')}>
				Settings
			</div>
		</div>
	);
};
