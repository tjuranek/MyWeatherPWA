/** @jsx jsx */
import { jsx } from '@emotion/core';

export const Forecast = props => {
	const { forecast } = props;

	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'space-between'
		},
		column: {
			display: 'flex',
			flexDirection: 'column'
		}
	};

	return (
		<div css={styles.container}>
			{forecast.map(day => {
				return (
					<div css={styles.column}>
						<p>high: {day.tempHigh}</p>
						<p>low: {day.tempLow}</p>
						<p>description: {day.weatherDescription}</p>
					</div>
				);
			})}
		</div>
	);
};
