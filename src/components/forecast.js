/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getIconFromWeatherType } from '../services/icons';

export const Forecast = props => {
	const { forecast } = props;

	const styles = {
		container: {
			display: 'flex'
		},
		daily: {
			flexGrow: 1,
			textAlign: 'center'
		},
		dailyIcon: {
			maxWidth: '50%'
		}
	};

	return (
		<div css={styles.container}>
			{forecast.map(daily => (
				<div css={styles.daily} key={Math.random()}>
					<div>Today</div>

					<div>
						{daily.tempHigh}°/{daily.tempLow}°
					</div>

					<img
						alt="icon"
						css={styles.dailyIcon}
						src={getIconFromWeatherType(daily.weatherType)}
					/>
				</div>
			))}
		</div>
	);
};
