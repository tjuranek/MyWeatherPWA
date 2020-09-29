/** @jsx jsx */
import { jsx } from '@emotion/core';

const styles = {
	container: {
		display: 'flex',
		padding: '1em 0'
	},
	tempContainer: {
		height: '6em',
		lineHeight: '6em'
	},
	tempContainerCurrentTemp: {
		fontSize: '5em'
	},
	statsContainer: {
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: '3em',
		justifyContent: 'center'
	},
	statsContainerStat: {
		padding: '.25em 0'
	},
	statsContainerStatValue: {
		color: '#A09FB1',
		fontWeight: 'bold'
	}
};

export const CurrentConditions = props => {
	const { currentConditions } = props;

	const stats = [
		{
			label: 'Conditions',
			value: currentConditions.weatherDescription
				? currentConditions.weatherDescription
				: 'Cloudy'
		},
		{
			label: 'Chance Of Rain',
			value: `${currentConditions.chanceOfRain}%`
		},
		{
			label: 'Feels Like',
			value: `${currentConditions.feelsLike}°`
		}
	];

	return (
		<div css={styles.container}>
			<div css={styles.tempContainer}>
				<div css={styles.tempContainerCurrentTemp}>
					{currentConditions.tempCurrent}°
				</div>
			</div>

			<div css={styles.statsContainer}>
				{stats.map(stat => (
					<div css={styles.statsContainerStat} key={stat.label}>
						{stat.label} -
						<span css={styles.statsContainerStatValue}>
							{stat.value}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
