import React from "react";

export const CurrentConditions = props => {
	const { tempCurrent } = props;

	return (
		<>
			<h1>{tempCurrent}</h1>
		</>
	);
};
