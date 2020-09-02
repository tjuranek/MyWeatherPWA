/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getIconFromWeatherType } from '../icons';

export const CurrentConditions = props => {
	const { currentConditions } = props;

	const styles = {
		row: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'center'
		},
		column: {
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'row',
			flexGrow: '1',
			justifyContent: 'center',
			width: '50%'
		},
		block: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		},
		icon: {
			maxHeight: '12rem',
			maxWidth: '12rem'
		}
	};

	return (
		<div>
			<div css={styles.row}>
				<div css={styles.column}>
					<div css={styles.block}>
						<h3>{currentConditions.weatherDescription}</h3>
						<h1>{currentConditions.tempCurrent}</h1>
						<div>
							<p>Feels Like: {currentConditions.feelsLike}%</p>
							<p>
								Chance of Rain: {currentConditions.chanceOfRain}
								%
							</p>
						</div>
					</div>
				</div>
				<div css={styles.column}>
					<img
						css={styles.icon}
						src={getIconFromWeatherType(
							currentConditions.weatherType
						)}
					/>
				</div>
			</div>
		</div>
	);
};
